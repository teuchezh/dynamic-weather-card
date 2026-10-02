/**
 * Colors for the daily forecast's temperature bars
 */

// Apple Weather-like temperature colors, by °C
const TEMPERATURE_COLORS: Array<[number, [number, number, number]]> = [
  [-20, [94, 92, 230]],
  [-5, [10, 132, 255]],
  [5, [100, 210, 255]],
  [15, [48, 209, 88]],
  [22, [255, 214, 10]],
  [28, [255, 159, 10]],
  [35, [255, 69, 58]]
];

export function temperatureColor(value: number, unit: string = '°C'): string {
  const celsius = /F/i.test(unit) ? (value - 32) * 5 / 9 : value;
  const last = TEMPERATURE_COLORS.length - 1;
  if (celsius <= TEMPERATURE_COLORS[0][0]) return `rgb(${TEMPERATURE_COLORS[0][1].join(', ')})`;
  if (celsius >= TEMPERATURE_COLORS[last][0]) return `rgb(${TEMPERATURE_COLORS[last][1].join(', ')})`;
  const index = TEMPERATURE_COLORS.findIndex(([stop]) => stop > celsius);
  const [fromStop, from] = TEMPERATURE_COLORS[index - 1];
  const [toStop, to] = TEMPERATURE_COLORS[index];
  const t = (celsius - fromStop) / (toStop - fromStop);
  return `rgb(${from.map((c, i) => Math.round(c + (to[i] - c) * t)).join(', ')})`;
}
