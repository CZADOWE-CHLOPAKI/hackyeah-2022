import Image from 'next/image';
import { useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';

import { sendFile } from '@/lib/api';
import fileNameChecker from '@/lib/fileNameChecker';
import { CorrectedMapType, ErrorMapType } from '@/lib/types';

import NameCorrectionModal from '@/components/NameCorrectionModal';

type AddFileProps = {
  files: File[];
  addFiles: (files: File[]) => void;
};

const AddFile = ({ files, addFiles }: AddFileProps) => {
  const [correctedFileNames, setCorrectedFileNames] =
    useState<CorrectedMapType>();
  const [errors, setErrors] = useState<ErrorMapType>({});
  const [modalData, setModalData] = useState<>();

  useEffect(() => {
    if (!files) return;

    const newErrors: ErrorMapType = {};
    const newCorrectedFileNames: CorrectedMapType = {};

    files.map((file) => {
      fileNameChecker(file.name);
      const { errors, corrected } = fileNameChecker(file.name);
      newErrors[file.name] = errors;
      newCorrectedFileNames[file.name] = corrected;
    });

    files.map((file) => {
      sendFile(file);
    });

    setErrors(newErrors);
    setCorrectedFileNames(newCorrectedFileNames);
  }, [files]);

  useEffect(() => {
    for (const fname in errors) {
      const error = errors[fname];
      setModalData({
        error,
        fname,
        correctFName: correctedFileNames?.[fname] || '',
      });
      break;
    }
  }, [correctedFileNames, errors]);

  return (
    <div>
      <NameCorrectionModal data={modalData} />
      <div className=' mb-3 text-4xl font-semibold text-primary'>
        Dodaj plik:
      </div>
      <Dropzone onDrop={(acceptedFiles) => addFiles(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <div
            className='grid h-80 w-[80vw] max-w-[1200px] cursor-crosshair place-content-center rounded-md  border-4 border-primary bg-offWhite shadow-md'
            {...getRootProps()}
          >
            <input {...getInputProps()} />

            {files.length === 0 && (
              <div className='flex flex-col items-center gap-3.5'>
                <Image
                  src='/images/submit.png'
                  alt='submit icon png'
                  width={184}
                  height={186}
                />
                <div className='text-4xl'>Upuść pliki tutaj</div>
              </div>
            )}
          </div>
        )}
      </Dropzone>
    </div>
  );
};

export default AddFile;
