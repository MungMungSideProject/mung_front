/**  This code is used to create a card that displays information about an article. The card is divided into two halves.
 * The first half is for the image, which is loaded using a placeholder until the image loads.
 *  The second half is for the title, description, author, and date of the article.
 */

interface ArticleCardProps {
  imageUrl: string;
  title: string;
  description: string;
  author: string;
  date: string;
}

import { useState } from 'react';

const ArticleCard = ({
  imageUrl,
  title,
  description,
  author,
  date,
}: ArticleCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="relative flex aspect-square h-full w-full cursor-pointer flex-col overflow-hidden rounded-3xl shadow-sm">
      <div className="relative h-1/2 w-full overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-400"></div>
          </div>
        )}
        <img
          alt=""
          src={imageUrl ? imageUrl : 'https://source.unsplash.com/random?q=50'}
          className={`absolute inset-0 h-full w-full object-cover ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleImageLoad}
        />
      </div>
      <div className="flex h-1/2 w-full flex-col items-stretch p-3">
        <div className="flex h-full w-full flex-col gap-2 overflow-hidden">
          <h1 className="text-xl xl:text-3xl">{title ? title : 'Title'}</h1>
          <p className="text-base text-slate-400 xl:text-lg">
            {description
              ? description.length > 30
                ? description.substring(0, 50) + '...'
                : description
              : 'description section'}
          </p>
        </div>
        <div className="flex h-1/3 w-full items-center justify-between">
          <p className="text-base text-slate-400 xl:text-lg">
            {author ? author : 'author section'}
          </p>
          <p className="text-base text-slate-400 xl:text-lg">
            {date ? date : 'date section'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
