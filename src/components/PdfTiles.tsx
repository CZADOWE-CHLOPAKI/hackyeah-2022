import { PdfOutcomeType } from '@/lib/types';

import PdfTile from '@/components/PdfTile';

type PdfTilesProps = {
  pdfs: PdfOutcomeType[];
};

const PdfTiles = ({ pdfs }: PdfTilesProps) => {
  return (
    <div className='rounded-3xl border border-offGray bg-white '>
      {pdfs.map((pdf, idx) => (
        <>
          <PdfTile key={idx} pdf={pdf} />
          {idx !== pdfs.length - 1 && (
            <div className='w-full border-t border-t-offGray' />
          )}
        </>
      ))}
    </div>
  );
};

export default PdfTiles;
