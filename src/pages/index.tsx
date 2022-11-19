import { useState } from 'react';
import Dropzone from 'react-dropzone';

const HomePage = () => {
  const [files, setFiles] = useState<File[]>();

  return (
    <div className='grid h-screen w-screen place-content-center bg-background'>
      <Dropzone onDrop={(acceptedFiles) => setFiles(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <div
            className='h-60 w-96  border-4 border-dashed border-borders'
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
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
