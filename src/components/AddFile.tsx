import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';

import { sendFile } from '@/lib/api';
import { changeFileName } from '@/lib/changeFileName';
import fileNameChecker from '@/lib/fileNameChecker';
import { CorrectedMapType, ErrorMapType, PdfResponse } from '@/lib/types';

import NameCorrectionModal, {
  ModalData,
} from '@/components/NameCorrectionModal';

type AddFileProps = {
  recivePdf: (pdf: Promise<PdfResponse>) => void;
};

const AddFile = ({ recivePdf }: AddFileProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploadReady, setUploadReady] = useState(false);
  const [errors, setErrors] = useState<ErrorMapType>({});
  const [modalData, setModalData] = useState<ModalData>();

  useEffect(() => {
    if (!uploadReady) return;
    files.map((file) => {
      recivePdf(sendFile(file));
    });
    setFiles([]);
  }, [errors, files, recivePdf, setFiles, uploadReady]);

  const checkErrors = useCallback(() => {
    if (!files) return;

    const newErrors: ErrorMapType = {};
    const correctedFileNames: CorrectedMapType = {};

    files.map((file) => {
      fileNameChecker(file.name);
      const { errors, corrected } = fileNameChecker(file.name);
      if (errors.length > 0) newErrors[file.name] = errors;
      correctedFileNames[file.name] = corrected;
    });

    for (const fname in newErrors) {
      const error = newErrors[fname];
      setModalData({
        error,
        fname,
        correctFName: correctedFileNames?.[fname] || '',
      });
      break;
    }

    setErrors(newErrors);
    setUploadReady(Object.keys(newErrors).length === 0 && files.length > 0);
  }, [files]);

  useEffect(() => {
    checkErrors();
  }, [checkErrors, files]);

  return (
    <div>
      <NameCorrectionModal
        data={modalData}
        onCancel={() => {
          setFiles(files.filter(({ name }) => name !== modalData?.fname));
        }}
        onNewName={(newName) => {
          const fileToChange = files.find(
            ({ name }) => name === modalData?.fname
          );

          if (!fileToChange) return;

          const newFile = changeFileName(fileToChange, newName);
          const other = files.filter(({ name }) => name !== modalData?.fname);

          setModalData(undefined);
          setFiles([...other, newFile]);
        }}
      />
      <div className=' mb-3 text-3xl font-semibold text-primary'>
        Dodaj plik:
      </div>
      <Dropzone onDrop={(acceptedFiles) => setFiles(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <div
            className='grid h-80 w-[80vw] max-w-[1200px] cursor-crosshair place-content-center rounded-md  border-2 border-primary bg-offWhite shadow-md'
            {...getRootProps()}
          >
            <input {...getInputProps()} />

            <div className='flex flex-col items-center gap-3.5'>
              <Image
                src='/images/submit.png'
                alt='submit icon png'
                width={140}
                height={140}
              />
              <div className='text-3xl'>Upuść pliki tutaj</div>
            </div>
          </div>
        )}
      </Dropzone>
    </div>
  );
};

export default AddFile;
