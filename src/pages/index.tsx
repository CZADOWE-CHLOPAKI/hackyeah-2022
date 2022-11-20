import { useState } from 'react';

import { PdfResponse, SinglePdfResponse } from '@/lib/types';

import AddFile from '@/components/AddFile';
import Functionality from '@/components/Functionality';
import Layout from '@/components/layout/Layout';
import PdfTiles from '@/components/PdfTiles';

const HomePage = () => {
  const [pdfs, setPdfs] = useState<SinglePdfResponse[]>([]);

  const recivePdf = async (pdfResponse: Promise<PdfResponse>) => {
    const pdf = await pdfResponse;
    setPdfs((pdfs) => [...pdfs, ...pdf.data]);
  };

  return (
    <Layout>
      <div className='mx-auto mb-8 flex flex-col gap-16'>
        <Functionality />
        <AddFile recivePdf={recivePdf} />
        <PdfTiles pdfs={pdfs} />
      </div>
    </Layout>
  );
};

export default HomePage;
