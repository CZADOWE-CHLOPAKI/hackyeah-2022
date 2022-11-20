export type ErrorType = { name: string; corrected?: boolean };
export type ErrorMapType = { [key: string]: ErrorType[] };
export type CorrectedMapType = { [key: string]: string };

export type OutcomeType = 'corrected' | 'ok' | 'error';

export type PdfOutcomeType = {
  fname: string;
  url: string;
  outcome: OutcomeType;
};

type SignData = {};

export type PdfResponse = {
  converted: boolean;
  size: number;
  conversion_error: boolean;
  errors: string[];
  filename: string;
  uri: string;
  sign_data: SignData;
  verified_ts: number;
};
