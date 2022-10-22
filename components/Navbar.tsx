import { UserIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex items-center'>
      {/* Left side */}
      <div className='flex items-center ml-10 py-5 mr-auto'>
        <div className='mr-14 hidden lg:inline-block'>
          {/* <Image /> - logo */}
          <p className='font-black text-6xl'>LOGO</p>
        </div>
        <ul className='space-x-10 hidden md:flex'>
          <li>
            <a
              href='#'
              className='tailwind-nav-link text-accent hidden lg:inline-block'
            >
              Bestsellers
            </a>
          </li>
          <li>
            <a href='#' className='tailwind-nav-link -ml-10 lg:ml-0'>
              Hoodies
            </a>
          </li>
          <li>
            <a href='#' className='tailwind-nav-link'>
              T-shirts
            </a>
          </li>
          <li>
            <a href='#' className='tailwind-nav-link'>
              Jackets
            </a>
          </li>
          <li>
            <a href='#' className='tailwind-nav-link'>
              Trousers
            </a>
          </li>
        </ul>
      </div>

      {/* Right side */}
      <div className='flex flex-1 md:flex-none items-center justify-center my-5 py-5 rounded-2xl mr-10 space-x-5 bg-accent md:bg-transparent'>
        <Link href='/user'>
          <UserIcon className='h-10 transition-all hover:scale-110 md:hover:scale-100 md:hover:text-accent cursor-pointer' />
        </Link>
        <Link href='/basket'>
          <ShoppingCartIcon className='h-10 transition-all hover:scale-110 md:hover:scale-100 md:hover:text-accent cursor-pointer' />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
