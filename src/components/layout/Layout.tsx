import Image from 'next/image';
import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className=' h-screen w-screen bg-background font-primary'>
      <div>
        <Image
          alt='MF logo'
          src='/images/MF_logo.png'
          width={358}
          height={164}
        />
      </div>
      <div className='grid min-h-full w-full  bg-background'>{children}</div>
    </div>
  );
}
