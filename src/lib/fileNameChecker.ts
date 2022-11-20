import { ErrorType } from '@/lib/types';

const fileNameChecker = (fname: string) => {
  const errors: ErrorType[] = [];

  const base = fname.split('.')?.[0];
  const ext = fname.split('.')?.[1];

  if (fname.length > 255)
    errors.push({ name: 'Nazwa pliku ma więcej niz 255 znaków.' });

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

  if (fname.trim() !== fname || base?.trim() !== base)
    errors.push({ name: 'Nazwa pliku zawiera spacje wiodące lub końcowe.' });

  let corrected = `${base
    ?.trim()
    .slice(0, 255 - ((ext?.length || 3) + 1))}.${ext?.trim()}`;
  corrected = corrected.replaceAll(
    /~|"|#|%|&|\*|:|<|>|\?|!|\/|\\|\{|\}|\|/g,
    ''
  );

  return { errors, corrected };
};

export default fileNameChecker;
