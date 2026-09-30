/**
 * Sky and cloud colors derived from the weather condition and the time of day
 */

import type { RGBColor, TimeOfDay } from './types';

export type SkyKind = 'clear' | 'partly' | 'cloudy' | 'rain' | 'heavy' | 'storm' | 'snow' | 'fog';

interface SkyPalette {
  day: [RGBColor, RGBColor];
  night: [RGBColor, RGBColor];
  // Lit side and shaded underside of clouds in daylight
  cloudLight: RGBColor;
  cloudShade: RGBColor;
  // How much of the sky clouds cover, 0..1
  coverage: number;
  // How strongly sunrise/sunset colors show through, 0..1
  twilight: number;
}

export interface SkyColors {
  top: RGBColor;
  bottom: RGBColor;
  cloudLight: RGBColor;
  cloudShade: RGBColor;
  coverage: number;
  // 1 = full daylight, 0 = night
  daylight: number;
}

const hex = (value: string): RGBColor => ({
  r: parseInt(value.slice(1, 3), 16),
  g: parseInt(value.slice(3, 5), 16),
  b: parseInt(value.slice(5, 7), 16)
});

const PALETTES: Record<SkyKind, SkyPalette> = {
  clear: {
    day: [hex('#2E6FC7'), hex('#8CC2EC')],
    night: [hex('#060A1C'), hex('#1A2546')],
    cloudLight: hex('#FFFFFF'), cloudShade: hex('#C6D4E2'),
    coverage: 0.12, twilight: 1
  },
  partly: {
    day: [hex('#3A74BD'), hex('#A0C4E2')],
    night: [hex('#0A1027'), hex('#26314E')],
    cloudLight: hex('#FFFFFF'), cloudShade: hex('#B9C7D5'),
    coverage: 0.45, twilight: 0.9
  },
  cloudy: {
    day: [hex('#5E7387'), hex('#A5B3C0')],
    night: [hex('#151A23'), hex('#2F3845')],
    cloudLight: hex('#EEF1F4'), cloudShade: hex('#98A4B1'),
    coverage: 0.85, twilight: 0.45
  },
  rain: {
    day: [hex('#45576A'), hex('#7E8FA0')],
    night: [hex('#0F141C'), hex('#252D38')],
    cloudLight: hex('#CDD4DC'), cloudShade: hex('#6D7986'),
    coverage: 0.9, twilight: 0.3
  },
  heavy: {
    day: [hex('#35424F'), hex('#62707E')],
    night: [hex('#0B0F15'), hex('#1D232C')],
    cloudLight: hex('#AEB6C0'), cloudShade: hex('#4A5460'),
    coverage: 1, twilight: 0.2
  },
  storm: {
    day: [hex('#262B38'), hex('#4C5465')],
    night: [hex('#090B11'), hex('#1A1E28')],
    cloudLight: hex('#9098A4'), cloudShade: hex('#353C48'),
    coverage: 1, twilight: 0.2
  },
  snow: {
    day: [hex('#7990A6'), hex('#C6D2DD')],
    night: [hex('#1C2432'), hex('#424D5E')],
    cloudLight: hex('#F4F7FA'), cloudShade: hex('#AAB6C3'),
    coverage: 0.8, twilight: 0.4
  },
  fog: {
    day: [hex('#8B969E'), hex('#CACFD3')],
    night: [hex('#23272D'), hex('#464B52')],
    cloudLight: hex('#E6E9EC'), cloudShade: hex('#B2B9C0'),
    coverage: 0.5, twilight: 0.35
  }
};

// Sunrise/sunset sky: deep blue overhead, warm glow at the horizon
const TWILIGHT = {
  sunrise: [hex('#5A7BBE'), hex('#F8B77E')] as [RGBColor, RGBColor],
  sunset: [hex('#3D4E8E'), hex('#F08E5C')] as [RGBColor, RGBColor]
};
const NIGHT_CLOUD_LIGHT = hex('#4A5366');
const NIGHT_CLOUD_SHADE = hex('#1A202C');
const TWILIGHT_CLOUD_LIGHT = hex('#FFC9A6');
const TWILIGHT_CLOUD_SHADE = hex('#6F5874');

export function getSkyKind(condition: string): SkyKind {
  switch (condition.toLowerCase()) {
    case 'sunny':
    case 'clear':
    case 'clear-night':
    case 'windy':
      return 'clear';
    case 'partlycloudy':
      return 'partly';
    case 'rainy':
    case 'rain':
    case 'snowy-rainy':
      return 'rain';
    case 'pouring':
    case 'hail':
      return 'heavy';
    case 'lightning':
    case 'lightning-rainy':
      return 'storm';
    case 'snowy':
    case 'snow':
      return 'snow';
    case 'foggy':
    case 'fog':
      return 'fog';
    default:
      return 'cloudy';
  }
}

export function mixColor(a: RGBColor, b: RGBColor, t: number): RGBColor {
  return {
    r: Math.round(a.r + (b.r - a.r) * t),
    g: Math.round(a.g + (b.g - a.g) * t),
    b: Math.round(a.b + (b.b - a.b) * t)
  };
}

export function rgb(color: RGBColor, alpha?: number): string {
  return alpha === undefined
    ? `rgb(${color.r}, ${color.g}, ${color.b})`
    : `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
}

const smoothstep = (t: number): number => t * t * (3 - 2 * t);

export function getSkyColors(condition: string, timeOfDay: TimeOfDay): SkyColors {
  const kind = condition.toLowerCase() === 'clear-night' ? 'clear' : getSkyKind(condition);
  const palette = PALETTES[kind];
  const progress = Math.max(0, Math.min(1, timeOfDay.progress));
  const isNight = timeOfDay.type === 'night' || condition.toLowerCase() === 'clear-night';

  let daylight = 1;
  let twilight = 0;
  if (isNight) {
    daylight = 0;
  } else if (timeOfDay.type === 'sunrise') {
    daylight = smoothstep(progress);
    twilight = Math.sin(progress * Math.PI) * palette.twilight;
  } else if (timeOfDay.type === 'sunset') {
    daylight = smoothstep(1 - progress);
    twilight = Math.sin(progress * Math.PI) * palette.twilight;
  }

  const warm = timeOfDay.type === 'sunrise' ? TWILIGHT.sunrise : TWILIGHT.sunset;
  const top = mixColor(mixColor(palette.night[0], palette.day[0], daylight), warm[0], twilight);
  const bottom = mixColor(mixColor(palette.night[1], palette.day[1], daylight), warm[1], twilight);

  const cloudLight = mixColor(mixColor(NIGHT_CLOUD_LIGHT, palette.cloudLight, daylight), TWILIGHT_CLOUD_LIGHT, twilight * 0.6);
  const cloudShade = mixColor(mixColor(NIGHT_CLOUD_SHADE, palette.cloudShade, daylight), TWILIGHT_CLOUD_SHADE, twilight * 0.5);

  return { top, bottom, cloudLight, cloudShade, coverage: palette.coverage, daylight };
}

/**
 * Register the sky color properties as <color> so the card background can transition between them
 * (plain custom properties inside a gradient switch instantly)
 */
export function registerSkyProperties(): void {
  if (typeof CSS === 'undefined' || typeof CSS.registerProperty !== 'function') return;
  const initial: Record<string, string> = { '--dwc-sky-top': '#2E6FC7', '--dwc-sky-bottom': '#8CC2EC' };
  Object.entries(initial).forEach(([name, initialValue]) => {
    try {
      CSS.registerProperty({ name, syntax: '<color>', inherits: false, initialValue });
    } catch {
      // Already registered (e.g. the card script is loaded twice)
    }
  });
}
