export type ErrorType = { name: string; corrected?: boolean };
export type ErrorMapType = { [key: string]: ErrorType[] };
export type CorrectedMapType = { [key: string]: string };

export type OutcomeType = 'corrected' | 'ok' | 'error';

export type PdfOutcomeType = {
  fname: string;
  url: string;
  outcome: OutcomeType;
};

export type PdfResponse = {
  data: SinglePdfResponse[];
};

type SignData = { aaa: '' };

export type ErrorTypeResponse = {
  error: string;
  corrected: boolean;
  coordinates: null;
};

export type SinglePdfResponse = {
  converted: boolean;
  size: number;
  conversion_error: boolean;
  errors: ErrorTypeResponse[];
  filename: string;
  uri: string;
  sign_data: SignData;
  verified_ts: number;
};
