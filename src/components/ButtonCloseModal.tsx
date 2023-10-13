'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const ButtonCloseModal = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.back()}
      className='absolute top-4 right-4 cursor-pointer'
    >
      X
    </div>
  );
};

export default ButtonCloseModal;
