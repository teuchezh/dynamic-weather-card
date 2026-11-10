/**
 * What the text forecast shows on the card and in the dialog.
 * The card never prints a multi-line paragraph: a single text opens from the
 * More link, and a short line appears only beside a separate detailed text.
 */
export interface ForecastPopupSources {
  summaryText?: string | null;
  summaryEntity?: string | null;
  detailText?: string | null;
  detailEntity?: string | null;
  providerText?: string | null;
}

export interface ForecastPopup {
  /** One line on the card. Set only when the dialog uses a different detailed text. */
  summary: string | null;
  /** Body of the detailed-forecast dialog. */
  detail: string | null;
  /** Sensor that supplied `detail`, shown under the dialog title. */
  source: string | null;
}

function clean(value?: string | null): string | null {
  const text = typeof value === 'string' ? value.trim() : '';
  return text ? text : null;
}

export function resolveForecastPopup(sources: ForecastPopupSources): ForecastPopup {
  const summaryText = clean(sources.summaryText);
  const detailText = clean(sources.detailText);
  const providerText = clean(sources.providerText);
  const summaryEntity = clean(sources.summaryEntity);
  const detailEntity = clean(sources.detailEntity);

  if (detailText) {
    return {
      summary: summaryText && summaryText !== detailText ? summaryText : null,
      detail: detailText,
      source: detailEntity
    };
  }

  if (summaryText) {
    return { summary: null, detail: summaryText, source: summaryEntity };
  }

  if (providerText) {
    return { summary: null, detail: providerText, source: null };
  }

  return { summary: null, detail: null, source: null };
}
