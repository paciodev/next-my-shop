import Hero from './Hero';
import Navbar from './Navbar';

const Main = () => {
  return (
    <main className='h-screen snap-start bg-dark text-white relative'>
      <Navbar />
      <Hero />
    </main>
  );
};

export default Main;
