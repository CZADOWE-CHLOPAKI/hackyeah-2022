import Image from 'next/image';
import { useState } from 'react';

import clsxm from '@/lib/clsxm';
import { getOutcomeFromErrors } from '@/lib/getOutcomeFromErrors';
import { OutcomeType, SinglePdfResponse } from '@/lib/types';

import PdfViewer from '@/components/PdfViewer';

const messages = {
  ok: (
    <>
      <Image
        src='/images/correct.png'
        alt='correct icon'
        width={50}
        height={50}
      />
      <div className='text-ok'>Plik jest poprawny.</div>
    </>
  ),
  corrected: (
    <>
      <Image
        src='/images/warningYellow.png'
        alt='warning icon'
        width={50}
        height={50}
      />
      <div className='text-warn'>
        Plik zawierał błędy, ale zostały one poprawione.
      </div>
    </>
  ),
  error: (
    <>
      <Image src='/images/close.png' alt='error icon' width={50} height={50} />
      <div className='text-red'>Plik jest niepoprawny.</div>
    </>
  ),
};

type PdfTileProps = {
  pdf: SinglePdfResponse;
};

const PdfTile = ({ pdf }: PdfTileProps) => {
  const [expanded, setExpanded] = useState(false);

  const outcome: OutcomeType = getOutcomeFromErrors(pdf?.errors);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const message = messages[outcome];

  return (
    <>
      <button
        onClick={() => setExpanded(!expanded)}
        className='flex w-full items-center justify-between px-8 py-6 text-base font-light'
      >
        <div className='flex items-center gap-4'>{message}</div>
        <div className='flex items-center gap-6'>
          <a
            className='rounded-xl border bg-white py-1 px-2'
            href={pdf.report_uri}
            onClick={(e) => {
              e.stopPropagation();
            }}
            download
          >
            Generuj raport
          </a>
          <a href={pdf.uri} download onClick={(e) => e.stopPropagation()}>
            <div className='flex items-center gap-2'>
              <Image
                width={16}
                height={16}
                src='/images/download.png'
                alt='download icon'
              />
              <div>{`${pdf.filename.slice(0, 30)}${
                pdf.filename.length > 30 ? '...' : ''
              }`}</div>
            </div>
          </a>

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
