import { Photo } from '@/lib/types';
import Image from 'next/image';
import { FC } from 'react';

interface ImageDetailProps {
  photo: Photo;
}
const ImageDetail: FC<ImageDetailProps> = ({ photo }) => {
  return (
    <div>
      <h1 className='font-bold text-2xl text-center my-10'>
        {photo.alt_description}
      </h1>
      <Image
        src={photo.urls.regular}
        width={1000}
        height={600}
        alt={photo.alt_description}
        className='object-cover mx-auto'
      />
    </div>
  );
};

export default ImageDetail;
