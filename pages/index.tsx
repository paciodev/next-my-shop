import type { NextPage } from 'next';
import Head from 'next/head';
import Bestsellers from '../components/Bestsellers';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <div className='h-screen overflow-x-hidden snap-y snap-mandatory overflow-y-scroll z-0 font-main'>
      <Head>
        <title>Pacio&apos;s clothes store</title>
      </Head>

      <main className='h-screen snap-start bg-dark text-white relative'>
        <Navbar />
        <Hero />
      </main>

      <section className='min-h-screen snap-start text-dark'>
        <Bestsellers />
      </section>
    </div>
  );
};

export default Home;
