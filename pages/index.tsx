import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className='h-screen bg-slate-900 grid place-content-center'>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1 className='text-4xl font-bold text-white'>
        Hello Next.js with Redux and TailwindCSS
      </h1>
    </div>
  );
};

export default Home;
