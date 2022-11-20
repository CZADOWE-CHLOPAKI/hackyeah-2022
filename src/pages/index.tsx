import { useState } from 'react';

import AddFile from '@/components/AddFile';
import Functionality from '@/components/Functionality';
import Layout from '@/components/layout/Layout';
import PdfTiles from '@/components/PdfTiles';
import PdfViewer from '@/components/PdfViewer';

const HomePage = () => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <Layout>
      <div className='mx-auto flex flex-col '>
        <Functionality />
        <AddFile files={files} setFiles={setFiles} />
        <PdfTiles
          pdfs={[
            { fname: 'dupka.pdf', outcome: 'error', url: '' },
            { fname: 'dupka.pdf', outcome: 'corrected', url: '' },
            {
              fname:
                'dupsjhsjhshjhhhhhhhvajhdgasjhdjhkasbvdjhkabsvjdbsajhdkabjdsbvashjshjska.pdf',
              outcome: 'ok',
              url: '',
            },
            { fname: 'dupka.pdf', outcome: 'corrected', url: '' },
            { fname: 'dupka.pdf', outcome: 'corrected', url: '' },
          ]}
        />
        {!!files?.[0] && <PdfViewer pdf={files[0]} />}
      </div>
    </Layout>
  );
};

export default HomePage;
