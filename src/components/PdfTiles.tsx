import { PdfOutcomeType } from '@/lib/types';

import PdfTile from '@/components/PdfTile';

type PdfTilesProps = {
  pdfs: PdfOutcomeType[];
  onChange: (pdf: PdfOutcomeType) => void;
};

const PdfTiles = ({ onChange, pdfs }: PdfTilesProps) => {
  return (
    <div>
      {pdfs.map((pdf, idx) => (
        <PdfTile key={idx} pdf={pdf} onChange={onChange} />
      ))}
    </div>
  );
};

export default PdfTiles;
