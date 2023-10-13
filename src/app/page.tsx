import Box from '@/components/Box';
import { Photo } from '@/lib/types';
import { getPhotos } from '@/lib/unsplash';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const response = await getPhotos();
  const photos = (await response.json()) as Photo[];

  return (
    <div className='grid md:grid-cols-3 place-items-center gap-4'>
      {photos.map((photo) => (
        <div key={photo.id} className='shadow-xl rounded-md'>
          <Link href={`/photo/${photo.id}`}>
            <Image
              src={photo.urls.regular}
              width={600}
              height={600}
              alt={photo.alt_description}
              className='h-80 object-cover rounded-md'
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
