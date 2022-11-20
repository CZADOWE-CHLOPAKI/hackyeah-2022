import { SinglePdfResponse } from '@/lib/types';

import PdfTile from '@/components/PdfTile';

type PdfTilesProps = {
  pdfs: SinglePdfResponse[];
};

const PdfTiles = ({ pdfs }: PdfTilesProps) => {
  if (pdfs.length === 0) return null;
  return (
    <div className='rounded-3xl border border-offGray bg-white '>
      {pdfs.map((pdf, idx) => (
        <div key={idx}>
          <PdfTile pdf={pdf} />
          {idx !== pdfs.length - 1 && (
            <div className='w-full border-t border-t-offGray' />
          )}
        </div>
      ))}
    </div>
  );
};

export default PdfTiles;
