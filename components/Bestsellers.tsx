/* eslint-disable @next/next/no-img-element */
import fakeData from '../public/data/bestsellers.json';
import Card from './Card';

const Bestsellers = () => {
  return (
    <div>
      <img
        loading='lazy'
        src='/img/wave.svg'
        alt=''
        className='w-full object-cover'
      />
      <h2 className='text-center font-black text-4xl md:text-7xl my-12'>
        Bestsellers
      </h2>

      <div className='mx-5 sm:mx-16'>
        <div className='bg-gray p-10 rounded-[2rem] gap-8 max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {fakeData.slice(0, 5).map((bestseller) => (
            <Card
              key={bestseller.id}
              id={bestseller.id}
              image={bestseller.image}
              name={bestseller.name}
              price={bestseller.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;
