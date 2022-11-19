import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type PdfViewerProps = {
  pdf: File;
};

const PdfViewer = ({ pdf }: PdfViewerProps) => {
  const [pageIdx, setPageIdx] = useState(1);
  const [pageNums, setPageNums] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, 10000, 10000);
    ctx.globalAlpha = 0.2;
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(500, 100, 25, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }, [pageIdx, pageNums]);

  return (
    <div className='my-4 flex flex-col gap-4'>
      <Document
        className='grid w-full place-content-center'
        file={pdf}
        onLoadSuccess={(pdf) => setPageNums(pdf.numPages)}
      >
        <div className='relative'>
          <canvas
            width={1000}
            height={1000 * 1.41428571429}
            ref={canvasRef}
            className='absolute z-10 grid h-full w-full place-content-center'
          />

          <Page
            className='relative'
            pageNumber={pageIdx}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </div>
      </Document>

      <div className='flex justify-between'>
        <button
          onClick={() => {
            if (pageIdx !== 1) setPageIdx(pageIdx - 1);
          }}
        >
          pooprzednia strona
        </button>

        <button
          onClick={() => {
            if (pageIdx !== pageNums) setPageIdx(pageIdx + 1);
          }}
        >
          nastepna strona
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;
