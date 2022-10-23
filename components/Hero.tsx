import Image from 'next/image';

const Hero = () => {
  return (
    <div className='relative flex flex-1 items-center h-screen'>
      <div className='ml-10 -mt-20 relative z-40'>
        <h2 className='text-accent text-9xl font-black'>PACIO&apos;S</h2>
        <h1 className='text-9xl font-black'>MEGA STORE</h1>
        <p className='-mt-2 animate-pulse'>
          Test shop - nothing will be delivered
        </p>
      </div>

      <div className='absolute bottom-0 right-0 w-[398px] h-[735px]'>
        <Image src='/img/model.png' alt='' layout='fill' objectFit='contain' />
      </div>

      <div className='absolute top-0 left-0 w-screen h-screen flex items-center opacity-10 z-10'>
        <p className='text-[400px] font-black ml-20'>LOGO</p>
      </div>
    </div>
  );
};

export default Hero;
