import ImageDetail from '@/components/ImageDetail';
import { Photo } from '@/lib/types';
import { getPhoto } from '@/lib/unsplash';
import { FC } from 'react';

interface PhotoDetailPageProps {
  params: {
    id: string;
  };
}
const PhotoDetailPage: FC<PhotoDetailPageProps> = async ({ params }) => {
  const response = await getPhoto(params.id);
  const photo = (await response.json()) as Photo;

  return <ImageDetail photo={photo} />;
};

export default PhotoDetailPage;
