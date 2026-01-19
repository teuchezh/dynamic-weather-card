import { TIME_THRESHOLDS } from './constants';
import type { TimeOfDay, Position, BackgroundGradient, SunMoonData, HassEntity, HomeAssistant } from './types';

/**
 * Determine time of day and its progress (internal fallback)
 */
function getTimeOfDay(): TimeOfDay {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const totalMinutes = hour * 60 + minute;

  // Sunrise: 6:00 - 8:00 (120 minutes)
  if (totalMinutes >= TIME_THRESHOLDS.SUNRISE_START && totalMinutes < TIME_THRESHOLDS.SUNRISE_END) {
    const progress = (totalMinutes - TIME_THRESHOLDS.SUNRISE_START) / 120;
    return { type: 'sunrise', progress };
  }

  // Day: 8:00 - 18:00
  if (totalMinutes >= TIME_THRESHOLDS.SUNRISE_END && totalMinutes < TIME_THRESHOLDS.DAY_END) {
    const progress = (totalMinutes - TIME_THRESHOLDS.SUNRISE_END) / 600;
    return { type: 'day', progress };
  }

  // Sunset: 18:00 - 20:00 (120 minutes)
  if (totalMinutes >= TIME_THRESHOLDS.DAY_END && totalMinutes < TIME_THRESHOLDS.SUNSET_END) {
    const progress = (totalMinutes - TIME_THRESHOLDS.DAY_END) / 120;
    return { type: 'sunset', progress };
  }

  // Night
  return { type: 'night', progress: 0 };
}

/**
 * Get sun/moon position based on time of day
 */
export function getSunPosition(timeOfDay: TimeOfDay, width: number, height: number): Position {
  if (timeOfDay.type === 'sunrise') {
    const progress = timeOfDay.progress;
    return {
      x: width * (0.3 + progress * 0.4),
      y: height * (0.85 - progress * 0.55)
    };
  } else if (timeOfDay.type === 'sunset') {
    const progress = timeOfDay.progress;
    return {
      x: width * (0.5 + progress * 0.3),
      y: height * (0.3 + progress * 0.55)
    };
  } else if (timeOfDay.type === 'day') {
    const progress = timeOfDay.progress;
    const angle = progress * Math.PI;
    return {
      x: width * (0.5 + Math.sin(angle) * 0.25),
      y: height * (0.25 - Math.sin(angle) * 0.1)
    };
  } else {
    // Night: moon position
    return {
      x: width * 0.75,
      y: height * 0.3
    };
  }
}

/**
 * Get background gradient colors for sunrise/sunset
 */
export function getBackgroundGradient(timeOfDay: TimeOfDay): BackgroundGradient | null {
  if (timeOfDay.type === 'sunrise') {
    const progress = timeOfDay.progress;
    const nightStart = { r: 26, g: 26, b: 46 };
    const dayStart = { r: 255, g: 160, b: 122 };
    const dayEnd = { r: 255, g: 215, b: 0 };

    return {
      start: {
        r: Math.round(nightStart.r + (dayStart.r - nightStart.r) * progress),
        g: Math.round(nightStart.g + (dayStart.g - nightStart.g) * progress),
        b: Math.round(nightStart.b + (dayStart.b - nightStart.b) * progress)
      },
      end: {
        r: Math.round(nightStart.r + (dayEnd.r - nightStart.r) * progress),
        g: Math.round(nightStart.g + (dayEnd.g - nightStart.g) * progress),
        b: Math.round(nightStart.b + (dayEnd.b - nightStart.b) * progress)
      }
    };
  } else if (timeOfDay.type === 'sunset') {
    const progress = timeOfDay.progress;
    const dayStart = { r: 255, g: 107, b: 107 };
    const dayEnd = { r: 255, g: 160, b: 122 };
    const nightStart = { r: 26, g: 26, b: 46 };

    return {
      start: {
        r: Math.round(dayStart.r + (nightStart.r - dayStart.r) * progress),
        g: Math.round(dayStart.g + (nightStart.g - dayStart.g) * progress),
        b: Math.round(dayStart.b + (nightStart.b - dayStart.b) * progress)
      },
      end: {
        r: Math.round(dayEnd.r + (nightStart.r - dayEnd.r) * progress),
        g: Math.round(dayEnd.g + (nightStart.g - dayEnd.g) * progress),
        b: Math.round(dayEnd.b + (nightStart.b - dayEnd.b) * progress)
      }
    };
  }
  return null;
}

/**
 * Format forecast time as HH:00
 */
export function formatForecastTime(datetime: string): string {
  if (!datetime) return '';
  const date = new Date(datetime);
  const hours = date.getHours();
  return `${hours.toString().padStart(2, '0')}:00`;
}

/**
 * Format time as HH:MM
 */
export function formatTime(datetime: Date | string): string {
  if (!datetime) return '';
  const date = typeof datetime === 'string' ? new Date(datetime) : datetime;
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

/**
 * Get sunrise and sunset data from weather entity or separate sensors
 */
export function getSunriseSunsetData(
  weatherState: HassEntity,
  sunriseEntity: string | null = null,
  sunsetEntity: string | null = null,
  hass: HomeAssistant | null = null
): SunMoonData & { hasSunData: boolean } {
  let sunrise: Date | null = null;
  let sunset: Date | null = null;

  // Try to get from separate sensors first (if configured)
  if (sunriseEntity && hass && hass.states[sunriseEntity]) {
    const sunriseState = hass.states[sunriseEntity];
    sunrise = new Date(sunriseState.state);
  }

  if (sunsetEntity && hass && hass.states[sunsetEntity]) {
    const sunsetState = hass.states[sunsetEntity];
    sunset = new Date(sunsetState.state);
  }

  // If not found in separate sensors, try weather entity attributes
  if (!sunrise || !sunset) {
    if (weatherState && weatherState.attributes) {
      const attrs = weatherState.attributes;

      if (!sunrise && (attrs.forecast_sunrise || attrs.sunrise)) {
        sunrise = new Date(attrs.forecast_sunrise || attrs.sunrise);
      }

      if (!sunset && (attrs.forecast_sunset || attrs.sunset)) {
        sunset = new Date(attrs.forecast_sunset || attrs.sunset);
      }
    }
  }

  return {
    sunrise,
    sunset,
    hasSunData: !!(sunrise && sunset)
  };
}

/**
 * Determine time of day based on sunrise/sunset or fallback to static times
 */
export function getTimeOfDayWithSunData(sunData: SunMoonData & { hasSunData: boolean }): TimeOfDay {
  const now = new Date();

  // If we have real sun data, use it
  if (sunData.hasSunData && sunData.sunrise && sunData.sunset) {
    const currentTime = now.getTime();
    let sunriseTime = sunData.sunrise.getTime();
    let sunsetTime = sunData.sunset.getTime();

    // Check if sunrise/sunset are for tomorrow (common with Yandex Weather and similar integrations)
    // If sunrise is more than 12 hours in the future, subtract 24 hours to get today's time
    if (sunriseTime - currentTime > 12 * 60 * 60 * 1000) {
      sunriseTime -= 24 * 60 * 60 * 1000;
    }
    if (sunsetTime - currentTime > 12 * 60 * 60 * 1000) {
      sunsetTime -= 24 * 60 * 60 * 1000;
    }

    // Calculate sunrise/sunset window (±1 hour)
    const sunriseStart = sunriseTime - 60 * 60 * 1000; // 1 hour before
    const sunriseEnd = sunriseTime + 60 * 60 * 1000; // 1 hour after
    const sunsetStart = sunsetTime - 60 * 60 * 1000; // 1 hour before
    const sunsetEnd = sunsetTime + 60 * 60 * 1000; // 1 hour after

    // Sunrise period
    if (currentTime >= sunriseStart && currentTime < sunriseEnd) {
      const progress = (currentTime - sunriseStart) / (sunriseEnd - sunriseStart);
      return { type: 'sunrise', progress };
    }

    // Day period (after sunrise, before sunset)
    if (currentTime >= sunriseEnd && currentTime < sunsetStart) {
      const progress = (currentTime - sunriseEnd) / (sunsetStart - sunriseEnd);
      return { type: 'day', progress };
    }

    // Sunset period
    if (currentTime >= sunsetStart && currentTime < sunsetEnd) {
      const progress = (currentTime - sunsetStart) / (sunsetEnd - sunsetStart);
      return { type: 'sunset', progress };
    }

    // Night period
    return { type: 'night', progress: 0 };
  }

  // Fallback to static time-based calculation
  return getTimeOfDay();
}
