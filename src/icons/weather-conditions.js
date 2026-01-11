import { svg } from 'lit';

// Weather condition SVG icons from Basmilius Weather Icons
// License: MIT - https://github.com/basmilius/weather-icons

// Import SVG files as raw text
import clearDaySvg from './clear-day.svg?raw';
import clearNightSvg from './clear-night.svg?raw';
import cloudySvg from './cloudy.svg?raw';
import overcastSvg from './overcast-day.svg?raw';
import partlyCloudySvg from './partly-cloudy-day.svg?raw';
import rainSvg from './rain.svg?raw';
import snowSvg from './snow.svg?raw';
import fogSvg from './fog.svg?raw';
import hailSvg from './hail.svg?raw';
import thunderstormSvg from './thunderstorms-rain.svg?raw';

// Map weather conditions to SVG content
export const WEATHER_CONDITION_SVGS = {
  'sunny': clearDaySvg,
  'clear': clearDaySvg,
  'clear-night': clearNightSvg,
  'partlycloudy': partlyCloudySvg,
  'overcast': overcastSvg,
  'cloudy': cloudySvg,
  'rainy': rainSvg,
  'rain': rainSvg,
  'pouring': rainSvg,
  'snowy': snowSvg,
  'snow': snowSvg,
  'foggy': fogSvg,
  'fog': fogSvg,
  'hail': hailSvg,
  'snowy-rainy': hailSvg,
  'lightning': thunderstormSvg,
  'lightning-rainy': thunderstormSvg,
  'windy': cloudySvg,
  'windy-variant': cloudySvg,
};

// Helper function to get weather condition SVG
export function getWeatherConditionSVG(condition) {
  if (!condition) return '';

  const svgContent = WEATHER_CONDITION_SVGS[condition.toLowerCase()];
  if (!svgContent) return '';

  // Parse SVG and wrap in lit svg template
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgContent, 'image/svg+xml');
  const svgElement = doc.querySelector('svg');

  if (!svgElement) return '';

  // Get the inner HTML
  return svg([svgElement.outerHTML]);
}
