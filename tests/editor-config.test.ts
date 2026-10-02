import { describe, expect, test } from 'bun:test';
import { cleanEditorConfig } from '../src/editor-config';

const defaults = { show_wind: true, show_pressure: false, overlay_opacity: 0.1, wind_speed_unit: 'auto', layout: 'default' };

describe('cleanEditorConfig', () => {
  test('type and entity come first, then what differs from the defaults', () => {
    const config = cleanEditorConfig({
      show_wind: true,
      show_pressure: true,
      layout: 'default',
      overlay_opacity: 0.1,
      entity: 'weather.home',
      type: 'custom:dynamic-weather-card',
      wind_speed_unit: 'ms'
    }, defaults);
    expect(Object.keys(config)).toEqual(['type', 'entity', 'show_pressure', 'wind_speed_unit']);
  });

  test('cleared fields are left out', () => {
    expect(cleanEditorConfig({ type: 't', entity: 'e', name: '', height: undefined, sunrise_entity: null }, defaults))
      .toEqual({ type: 't', entity: 'e' });
  });

  test('options the editor does not know are kept', () => {
    expect(cleanEditorConfig({ type: 't', entity: 'e', tap_action: { action: 'none' } }, defaults))
      .toEqual({ type: 't', entity: 'e', tap_action: { action: 'none' } });
  });
});
