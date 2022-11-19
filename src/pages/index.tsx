import Dropzone from 'react-dropzone';

const HomePage = () => {
  return (
    <div className='grid h-screen w-screen place-content-center'>
      <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <div className='' {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        )}
      </Dropzone>
    </div>
  );
};

export default HomePage;
