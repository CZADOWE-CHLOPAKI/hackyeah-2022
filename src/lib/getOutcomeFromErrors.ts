import { ErrorTypeResponse, OutcomeType } from '@/lib/types';

export const getOutcomeFromErrors = (
  errors: ErrorTypeResponse[]
): OutcomeType => {
  if (errors.length === 0) return 'ok';

  const allCorrected = errors.reduce(
    (acc, { corrected }) => acc && corrected,
    true
  );

  return allCorrected ? 'corrected' : 'error';
};
