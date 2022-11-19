import { useState } from 'react';

import { PdfOutcomeType } from '@/lib/types';

import AddFile from '@/components/AddFile';
import Layout from '@/components/layout/Layout';
import PdfTiles from '@/components/PdfTiles';
import PdfViewer from '@/components/PdfViewer';

const HomePage = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [chosenPdf, setChosenPdf] = useState<PdfOutcomeType>();

  return (
    <Layout>
      <div className='mx-auto flex flex-col '>
        <div>
          <p>Dodaj plik do druku</p>
          <p></p>
        </div>
        <AddFile files={files} setFiles={(f) => setFiles(f)} />
        <PdfTiles onChange={(pdf) => setChosenPdf(pdf)} pdfs={[]} />
        <PdfViewer pdf={files[0]} />
      </div>
    </Layout>
  );
};

export default HomePage;
