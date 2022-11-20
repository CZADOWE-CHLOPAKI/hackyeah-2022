import Image from 'next/image';
import { useState } from 'react';

import clsxm from '@/lib/clsxm';
import { OutcomeType, SinglePdfResponse } from '@/lib/types';

import PdfViewer from '@/components/PdfViewer';

const messages = {
  corrected: (
    <>
      <Image
        src='/images/correct.png'
        alt='warning icon'
        width={50}
        height={50}
      />
      <div className='text-ok'>Plik jest poprawny.</div>
    </>
  ),
  ok: (
    <>
      <Image
        src='/images/warningYellow.png'
        alt='correct icon'
        width={50}
        height={50}
      />
      <div className='text-warn'>Plik jest niepoprawny.</div>
    </>
  ),
  error: (
    <>
      <Image src='/images/close.png' alt='error icon' width={50} height={50} />
      <div className='text-red'>
        Plik zawierał błędy, ale zostały one poprawione.
      </div>
    </>
  ),
};

type PdfTileProps = {
  pdf: SinglePdfResponse;
};

const PdfTile = ({ pdf }: PdfTileProps) => {
  const [expanded, setExpanded] = useState(false);

  const outcome: OutcomeType = 'corrected';

  return (
    <>
      <button
        onClick={() => setExpanded(!expanded)}
        className='flex w-full items-center justify-between px-8 py-6 text-base font-light'
      >
        <div className='flex items-center gap-4'>{messages[outcome]}</div>
        <div className='flex items-center gap-6'>
          <div>{`${pdf.filename.slice(0, 30)}${
            pdf.filename.length > 30 ? '...' : ''
          }`}</div>

          <Image
            className={clsxm(expanded && 'rotate-180')}
            width={40}
            height={40}
            src='/images/arrow-down-sign-to-navigate.png'
            alt='arrow drop down icon'
          />
        </div>
      </button>
      {expanded && (
        <div>
          <PdfViewer pdf={pdf} />
        </div>
      )}
    </>
  );
};

export default PdfTile;
