import { FC } from "react";

interface IGalleryCard {
  imageLink: string;
  description: string;
}

const GalleryCard: FC<IGalleryCard> = ({ imageLink, description }) => {
  return (
    <div className="py-2">
      <img
        src={imageLink}
        alt={description}
        className="w-full aspect-ratio h-[20.8rem] object-cover"
      />
      <p>{description}</p>
    </div>
  );
};

export default GalleryCard;
