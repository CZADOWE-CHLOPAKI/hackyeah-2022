import { useState } from 'react';
import Dropzone from 'react-dropzone';

import Layout from '@/components/layout/Layout';

const HomePage = () => {
  const [files, setFiles] = useState<File[]>();

  return (
    <Layout>
      <div className='mx-auto flex flex-col '>
        <div>
          <p>Dodaj plik do druku</p>
          <p></p>
        </div>
        <Dropzone onDrop={(acceptedFiles) => setFiles(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <div
              className='grid h-60 w-[80vw] max-w-[1200px] cursor-crosshair  place-content-center border-4 border-dashed border-borders shadow-md'
              {...getRootProps()}
            >
              <input {...getInputProps()} />

              {!files && <div className='text-7xl'>Upuść pliki tutaj</div>}

              <div>
                {files?.map((file, key) => (
                  <div key={key}>{file.name}</div>
                ))}
              </div>
            </div>
          )}
        </Dropzone>
      </div>
    </Layout>
  );
};

export default HomePage;
