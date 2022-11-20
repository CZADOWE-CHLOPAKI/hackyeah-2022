import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import { SinglePdfResponse } from '@/lib/types';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type PdfViewerProps = {
  pdf: SinglePdfResponse;
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
        className='flex w-full  '
        file={pdf.uri}
        onLoadSuccess={(pdf) => setPageNums(pdf.numPages)}
      >
        <div className='relative ml-8 '>
          <canvas
            width={1000}
            height={1000 * 1.41428571429}
            ref={canvasRef}
            className='absolute z-10  h-full w-full bg-teal-600/70'
          />

          <div className='absolute z-20 h-full w-full'>
            <div className='relative top-1/2 my-auto flex w-full -translate-y-1/2 justify-between px-2'>
              <Image
                onClick={() => {
                  if (pageIdx !== 1) setPageIdx(pageIdx - 1);
                }}
                alt='strzalka W lewo'
                src='/images/arrow-right_black.png'
                width={40}
                height={40}
                className='rotate-180 cursor-pointer'
              ></Image>

              <Image
                onClick={() => {
                  if (pageIdx !== pageNums) setPageIdx(pageIdx + 1);
                }}
                alt='strzalka W Prawo'
                className='cursor-pointer'
                src='/images/arrow-right_black.png'
                width={40}
                height={40}
              ></Image>
            </div>
          </div>

          <div className='flex flex-col'>
            <Page
              className='relative border'
              pageNumber={pageIdx}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </div>
        </div>
      </Document>
    </div>
  );
};

export default PdfViewer;
