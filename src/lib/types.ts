export type ErrorType = { name: string; corrected?: boolean };
export type ErrorMapType = { [key: string]: ErrorType[] };
export type CorrectedMapType = { [key: string]: string };

export type OutcomeType = 'corrected' | 'ok' | 'error';

export type PdfOutcomeType = {
  fname: string;
  url: string;
  outcome: OutcomeType;
};
