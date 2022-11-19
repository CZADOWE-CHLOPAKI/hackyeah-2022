import { ErrorType } from '@/lib/types';

const fileNameChecker = (fname: string) => {
  const errors: ErrorType[] = [];

  if (fname.length > 255)
    errors.push({ name: 'Nazwa pliku ma więcej ni 255 znaków.' });

  const forbiddenChars = [
    `~`,
    `"`,
    `#`,
    `%`,
    `&`,
    `*`,
    `:`,
    `<`,
    `>`,
    `?`,
    `!`,
    `/`,
    `\\`,
    `{`,
    `|`,
    `}`,
  ];

  forbiddenChars.map((char) => {
    if (fname.includes(char))
      errors.push({
        name: `Nazwa pliku zawiera niedozwolony znak: ${char}`,
      });
  });

  if (fname.trim() !== fname)
    errors.push({ name: 'Nazwa pliku zawiera spacje wiodące lub końcowe.' });

  const corrected = '';
  return { errors, corrected };
};

export default fileNameChecker;
