import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { getOutcomeFromErrors } from '@/lib/getOutcomeFromErrors';
import { PdfResponse, SinglePdfResponse } from '@/lib/types';

import AddFile from '@/components/AddFile';
import Functionality from '@/components/Functionality';
import Guide from '@/components/Guide';
import Layout from '@/components/layout/Layout';
import PdfTiles from '@/components/PdfTiles';
import Results from '@/components/Results';

const HomePage = () => {
  const [pdfs, setPdfs] = useState<SinglePdfResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState({
    ok: 0,
    corrected: 0,
    error: 0,
  });

  useEffect(() => {
    const newCount = {
      ok: 0,
      corrected: 0,
      error: 0,
    };
    for (const pdf of pdfs) {
      newCount[getOutcomeFromErrors(pdf.errors)] += 1;
    }
    setCount(newCount);
  }, [pdfs]);

  const recivePdf = async (pdfResponse: Promise<PdfResponse>) => {
    setLoading(true);
    const pdf = await pdfResponse;

    setPdfs((pdfs) => [...pdfs, ...pdf.data]);
    setLoading(false);
  };

  return (
    <Layout>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
      <div className='mx-auto mb-8 flex flex-col gap-16'>
        <Guide />
        <Functionality />
        <AddFile recivePdf={recivePdf} loading={loading} />
        {pdfs.length > 1 && !loading && (
          <Results
            count={count.corrected + count.error + count.ok}
            corrected={count.corrected}
            ok={count.ok}
            error={count.error}
          />
        )}
        <PdfTiles pdfs={pdfs} />
      </div>
    </Layout>
  );
};

export default HomePage;
