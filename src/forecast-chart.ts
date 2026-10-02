/**
 * Temperature curve for the hourly forecast, drawn piece by piece: each forecast item gets the part
 * of the curve from the middle of the gap on its left, through its own point, to the middle of the gap
 * on its right. In item coordinates x runs 0..100 (the item plus half a gap on each side, so the point
 * is at x = 50) and y is in pixels. Pieces meet exactly, whatever the item widths or the scroll position.
 *
 * The curve is a Catmull-Rom spline through the points, so it passes through every temperature.
 */

export interface ChartPiece {
  // Height of the point in pixels from the top of the chart
  y: number;
  // SVG path of the line through this item ("" for a single point)
  line: string;
}

export interface ChartBox {
  // Pixel range the curve uses: the highest temperature at `top`, the lowest at `bottom`
  top: number;
  bottom: number;
  // Smallest temperature range the height stands for, so a 1° change doesn't look like a big swing
  minRange?: number;
}

const round = (value: number): number => Math.round(value * 100) / 100;

export function chartPieces(values: number[], box: ChartBox): ChartPiece[] {
  if (values.length === 0) return [];
  // The values' range, widened around its middle to at least minRange; a flat forecast sits in the middle
  const low = Math.min(...values);
  const high = Math.max(...values);
  const range = Math.max(high - low, box.minRange ?? 0);
  const min = (low + high - range) / 2;
  const yOf = (value: number): number => range === 0
    ? (box.top + box.bottom) / 2
    : box.bottom - ((value - min) / range) * (box.bottom - box.top);

  const ys = values.map(yOf);
  const last = ys.length - 1;
  // Slope at each point, in pixels per item (one-sided at the ends)
  const slopes = ys.map((y, i) => {
    if (last === 0) return 0;
    if (i === 0) return ys[1] - y;
    if (i === last) return y - ys[i - 1];
    return (ys[i + 1] - ys[i - 1]) / 2;
  });

  // Halfway between point i and i + 1 on the curve: its height and slope (pixels per item)
  const middle = (i: number): { y: number; slope: number } => ({
    y: (ys[i] + ys[i + 1]) / 2 + (slopes[i] - slopes[i + 1]) / 8,
    slope: 1.5 * (ys[i + 1] - ys[i]) - (slopes[i] + slopes[i + 1]) / 4
  });

  return ys.map((y, i) => {
    // Each half-piece spans 50 x units, i.e. half an item; a slope per item is a slope per 100 units
    const parts: string[] = [];
    let start = `M50 ${round(y)}`;
    if (i > 0) {
      const left = middle(i - 1);
      start = `M0 ${round(left.y)}`;
      parts.push(`C${round(50 / 3)} ${round(left.y + left.slope / 6)} ${round(100 / 3)} ${round(y - slopes[i] / 6)} 50 ${round(y)}`);
    }
    if (i < last) {
      const right = middle(i);
      parts.push(`C${round(50 + 50 / 3)} ${round(y + slopes[i] / 6)} ${round(100 - 50 / 3)} ${round(right.y - right.slope / 6)} 100 ${round(right.y)}`);
    }
    return { y: round(y), line: parts.length > 0 ? `${start} ${parts.join(' ')}` : '' };
  });
}
