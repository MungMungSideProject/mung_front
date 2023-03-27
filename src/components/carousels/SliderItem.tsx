import React from 'react';

interface SliderItemProps {
  url: string;
}

const SliderItem = ({ url }: SliderItemProps) => {
  return (
    <div className="items-cente relative flex aspect-square w-full justify-center overflow-hidden rounded-3xl">
      <img
        alt="산책 사진"
        src={url}
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
};

export default SliderItem;
