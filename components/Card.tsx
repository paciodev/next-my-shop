import Image from 'next/image';
import React from 'react';
import Currency from 'react-currency-formatter';

type Props = {
  id: number;
  image: string;
  name: string;
  price: number;
};

const Card = ({ id, image, name, price }: Props) => {
  // SORRY FOR THIS I AM BAD IN TYPESCRIPT
  return (
    <div
      className={`bg-white p-5 rounded-2xl ${id !== 0 && 'hidden'} ${
        id === 1
          ? 'sm'
          : id === 2
          ? 'md'
          : id === 3
          ? 'lg'
          : id === 4
          ? 'xl'
          : ''
      }:block`}
    >
      <div className='relative w-full h-56'>
        <Image
          src={image}
          alt={`Image of ${name}`}
          layout='fill'
          objectFit='cover'
        />
      </div>
      <p className='text-center text-xl font-extrabold mt-2'>{name}</p>
      <p className='text-center text-3xl font-extrabold text-accent'>
        <Currency quantity={price} currency='USD' />
      </p>
      <button className='bg-accent w-full py-2 rounded-lg mt-1 font-bold transition-transform hover:scale-105 active:scale-95'>
        Add to Basket
      </button>
    </div>
  );
};

export default Card;
