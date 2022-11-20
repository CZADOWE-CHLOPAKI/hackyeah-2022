import Image from 'next/image';
import { useState } from 'react';

import clsxm from '@/lib/clsxm';

import InfoBox from '@/components/InfoBox';
const slides = [
  {
    title: 'Jak  przesłać plik?',
    text: `
Kliknij w pole “Dodaj plik:”
Wybierz docelowy plik i kliknij “Ok”
Jeśli plik zawiera błędy - popraw je według wyświetlonego wzoru.
Prześlij plik ponownie. 
`,
  },
  {
    title: 'Jaki format pliku?',
    text: 'Przesłane pliki zostaną sprawdzone pod kątem poprawności, zgodności z wymaganym formatem. Akceptowane rozszerzenia pliku to:  .pdf, .docx, .xml, .zip, .pptx, .odt ',
  },
  {
    title: 'Jak przygotować plik jako nadawca?',
    text: 'Plik winien być w formacie A4, w orientacji pionowej. Plik PDF w wersji A-2 lub PDF A-4. Minimalne marginesy pliku to 10mm(górny), 8mm(dolny), 15mm(lewy i prawy). ',
  },
  {
    title:
      'Aby dowiedzieć się więcej o wymaganiach dotyczących plików do druku, przejdź do sekcji “Wymagania Operatora Wyznaczonego”.',
    text: '',
  },
];
const Guide = () => {
  const [idx, setIdx] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const isLast = idx === slides.length - 1;

  return (
    <div className='-mb-8 flex flex-col gap-4'>
      <div
        className=' flex cursor-pointer items-center gap-4 text-2xl font-semibold text-primary'
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Image
          width={32}
          height={32}
          src='/images/guide.png'
          alt='arrow drop down icon'
        />
        Przewodnik po programie Korektex
        <Image
          className={clsxm(isOpen && 'rotate-180')}
          width={32}
          height={32}
          src='/images/arrow-down-sign-to-navigate.png'
          alt='arrow drop down icon'
        />
      </div>
      {isOpen && (
        <InfoBox
          className='min-h-[320px]'
          icon={
            <Image
              src={
                isLast ? '/images/x-mark.png' : '/images/arrow-right-blue.png'
              }
              alt='arrow right icon'
              className='absolute right-0 bottom-0 cursor-pointer p-5'
              width={80}
              height={80}
              onClick={() => {
                if (isLast) {
                  setIdx(0);
                  setIsOpen(false);
                  return;
                }
                setIdx(idx + 1);
              }}
            />
          }
          title={slides[idx].title}
        >
          {slides[idx].text}
        </InfoBox>
      )}
    </div>
  );
};

export default Guide;
