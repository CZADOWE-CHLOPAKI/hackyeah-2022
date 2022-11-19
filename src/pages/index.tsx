import AddFile from '@/components/AddFile';
import Layout from '@/components/layout/Layout';

const HomePage = () => {
  return (
    <Layout>
      <div className='mx-auto flex flex-col '>
        <div>
          <p>Dodaj plik do druku</p>
          <p></p>
        </div>
        <AddFile />
      </div>
    </Layout>
  );
};

export default HomePage;
