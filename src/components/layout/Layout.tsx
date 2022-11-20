import Image from 'next/image';
import * as React from 'react';

const UsefullLinks = () => {
  return (
    <div className='mb-10 mt-4 w-full'>
      <div className='flex gap-14 text-xl font-light '>
        <a
          href='https://mc.bip.gov.pl/ogloszenia/minimalne-wymagania-techniczne-dla-wydrukow-dokumentow-elektronicznych-realizowanych-w-zakresie-publicznej-uslugi-hybrydowej.html'
          className='hover:text-[#E04F5F]'
        >
          Wymagania Operatora Wyznaczonego
        </a>
        <a href='' className='hover:text-[#E04F5F]'>
          Wzór dokumentu
        </a>
      </div>
      <div className='mt-4  w-full border-b-2 border-b-red lg:w-2/3' />
    </div>
  );
};

const Header = () => {
  return (
    <div className='my-2 flex  items-center justify-between'>
      <div className='text-gray'>
        <div className='text-6xl font-semibold'>Korektex</div>
        <div>tester dokumentów</div>
      </div>
      <div></div>
      <div></div>
      <div className='flex gap-2 '>
        <div className='bg-[F3F4F6] text-black text-black hover:bg-black hover:font-bold hover:text-yellow-400'>
          Wersja
          <br /> kontrastowa
        </div>

        <Image
          src='/images/high_contrast.svg'
          alt='high contrast'
          width={40}
          height={40}
        />
      </div>
      {/* <div className='flex'>
        <button className='w-12 border py-3'>ENG</button>
        <button className='w-12 border py-3'>PL</button>
      </div> */}
      <Image alt='MF logo' src='/images/MF_logo.png' width={232} height={100} />
    </div>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=' flex  w-screen flex-col items-center bg-offWhite font-primary text-xl font-light'>
      <div className='w-[80vw] max-w-[1200px]'>
        <Header />
        <UsefullLinks />
        <div className='bg-background grid min-h-full  w-full'>{children}</div>
      </div>
      <footer className='w-full'>
        <div className='p4 w-full border-b-2 border-b-red p-3'></div>
        <Image
          src='/images/kas.png'
          alt='Krajowa Administracja Skarbowa'
          width={330}
          height={74}
          className='p-5'
        ></Image>
      </footer>
    </div>
  );
}
