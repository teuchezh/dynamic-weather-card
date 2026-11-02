import { describe, expect, test } from 'bun:test';
import { windArrowRotation } from '../src/icons/svg-icons';

describe('windArrowRotation', () => {
  test('south wind (from 180°) tip points north (toward 0°)', () => {
    expect(windArrowRotation(180)).toBe(0);
  });

  test('north wind (from 0°) tip points south (toward 180°)', () => {
    expect(windArrowRotation(0)).toBe(180);
  });

  test('east wind (from 90°) tip points west (toward 270°)', () => {
    expect(windArrowRotation(90)).toBe(270);
  });

  test('west wind (from 270°) tip points east (toward 90°)', () => {
    expect(windArrowRotation(270)).toBe(90);
  });

  test('wraps past 360', () => {
    expect(windArrowRotation(200)).toBe(20);
  });
});
