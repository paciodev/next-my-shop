import type { NextPage } from 'next';
import Head from 'next/head';
import Main from '../components/Main';

const Home: NextPage = () => {
  return (
    <div className='h-screen overflow-x-hidden snap-y snap-mandatory overflow-y-scroll z-0 font-main'>
      <Head>
        <title>Pacio&apos;s clothes store</title>
      </Head>

      <Main />

      <div className='h-screen grid place-content-center snap-start'>
        <h1>COKOLWIEK</h1>
      </div>
      {/* Store */}
      {/* ... */}
    </div>
  );
};

export default Home;
