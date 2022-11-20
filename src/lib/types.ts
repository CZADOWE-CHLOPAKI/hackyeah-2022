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
  coordinates?: null;
};

export type SinglePdfResponse = SinglePdfResponseCorrect;

export type SinglePdfResponseCorrect = {
  errors: ErrorTypeResponse[];
  filename: string;
  converted?: boolean;
  size?: number;
  conversion_error?: boolean;
  uri?: string;
  sign_data?: SignData;
  verified_ts?: number;
  report_uri?: string;
};
