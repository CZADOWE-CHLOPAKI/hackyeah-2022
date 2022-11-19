import { PdfOutcomeType } from '@/lib/types';

type PdfTileProps = {
  pdf: PdfOutcomeType;
  onChange: (pdf: PdfOutcomeType) => void;
};

const PdfTile = ({ onChange, pdf }: PdfTileProps) => {
  return (
    <button onClick={() => onChange(pdf)} className='h-8 w-8 bg-teal-400'>
      fname
    </button>
  );
};

export default PdfTile;
