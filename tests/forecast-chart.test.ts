import { describe, expect, test } from 'bun:test';
import { chartPieces } from '../src/forecast-chart';

const box = { top: 20, bottom: 60 };
// Numbers of a path: [x, y, x, y, …]
const numbers = (path: string) => (path.match(/-?\d+(\.\d+)?/g) ?? []).map(Number);

describe('chartPieces', () => {
  test('the highest temperature is at the top, the lowest at the bottom', () => {
    const ys = chartPieces([10, 15, 20], box).map(piece => piece.y);
    expect(ys).toEqual([60, 40, 20]);
  });

  test('pieces meet: each one starts where the previous one ends', () => {
    const pieces = chartPieces([3, 9, 4, 12, 7], box);
    for (let i = 1; i < pieces.length; i++) {
      const previous = numbers(pieces[i - 1].line);
      const current = numbers(pieces[i].line);
      // Previous ends at x = 100, current starts at x = 0, at the same height
      expect(previous[previous.length - 2]).toBe(100);
      expect(current[0]).toBe(0);
      expect(current[1]).toBeCloseTo(previous[previous.length - 1], 1);
    }
  });

  test('the line goes through each point, at the middle of its item', () => {
    for (const piece of chartPieces([3, 9, 4], box)) {
      expect(piece.line).toContain(`50 ${piece.y}`);
    }
  });

  test('the ends of the forecast stop at their points', () => {
    const pieces = chartPieces([3, 9, 4], box);
    expect(pieces[0].line.startsWith(`M50 ${pieces[0].y}`)).toBe(true);
    expect(numbers(pieces[2].line).slice(-2)).toEqual([50, pieces[2].y]);
  });

  test('a small change stays small with a minimum range', () => {
    const ys = chartPieces([17, 18], { ...box, minRange: 6 }).map(piece => piece.y);
    // 1° of a 6° range is a sixth of the height, around the middle
    expect(ys[0] - ys[1]).toBeCloseTo(40 / 6, 1);
    expect((ys[0] + ys[1]) / 2).toBeCloseTo(40, 1);
  });

  test('a flat forecast or a single hour sits in the middle', () => {
    expect(chartPieces([5, 5, 5], box).map(piece => piece.y)).toEqual([40, 40, 40]);
    expect(chartPieces([5], box)).toEqual([{ y: 40, line: '' }]);
    expect(chartPieces([], box)).toEqual([]);
  });
});
