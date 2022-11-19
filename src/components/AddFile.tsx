import Image from 'next/image';
import { useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';

import fileNameChecker from '@/lib/fileNameChecker';
import { CorrectedMapType, ErrorMapType } from '@/lib/types';

const AddFile = () => {
  const [files, setFiles] = useState<File[]>();
  const [correctedFileNames, setCorrectedFileNames] =
    useState<CorrectedMapType>();
  const [errors, setErrors] = useState<ErrorMapType>({});

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

    setErrors(newErrors);
    setCorrectedFileNames(newCorrectedFileNames);
  }, [files]);

  return (
    <div>
      <div className=' mb-3 text-4xl font-semibold text-primary'>
        Dodaj plik:
      </div>
      <Dropzone onDrop={(acceptedFiles) => setFiles(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <div
            className='grid h-80 w-[80vw] max-w-[1200px] cursor-crosshair place-content-center rounded-md  border-4 border-primary bg-offWhite shadow-md'
            {...getRootProps()}
          >
            <input {...getInputProps()} />

            {!files && (
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

            <div>
              {files?.map((file, key) => (
                <div key={key}>
                  <div>{file.name}</div>
                  <div>
                    {errors[file.name]?.map(({ name }, idx) => (
                      <div key={idx} className='text-red-600'>
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Dropzone>
    </div>
  );
};

export default AddFile;
