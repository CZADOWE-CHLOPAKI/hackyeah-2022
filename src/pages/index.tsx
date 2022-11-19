import { useState } from 'react';
import Dropzone from 'react-dropzone';

const HomePage = () => {
  const [files, setFiles] = useState<File[]>();

  return (
    <div className='grid h-screen w-screen place-content-center bg-background font-primary'>
      <div>
        <p>Dodaj plik do druku</p>
        <p></p>
      </div>
      <Dropzone onDrop={(acceptedFiles) => setFiles(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <div
            className='grid h-60 w-96 cursor-crosshair  place-content-center border-4 border-dashed border-borders shadow-md'
            {...getRootProps()}
          >
            <input {...getInputProps()} />

            {!files && <div className='text-7xl'>+</div>}

            <div>
              {files?.map((file, key) => (
                <div key={key}>{file.name}</div>
              ))}
            </div>
          </div>
        )}
      </Dropzone>
    </div>
  );
};

export default HomePage;
