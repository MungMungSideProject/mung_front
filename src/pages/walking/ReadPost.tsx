import CarouselSquare from '@components/carousels/CarouselSquare';
import React from 'react';

const ReadPost = () => {
  const titleClassName = 'text-pageTitle font-bold text-black';
  const descriptionClassName = 'text-description font-bold text-black';

  const tempData = [
    new File(['file1'], 'file1.jpg', { type: 'image/jpeg' }),
    new File(['file2'], 'file2.jpg', { type: 'image/jpeg' }),
    new File(['file3'], 'file3.jpg', { type: 'image/jpeg' }),
  ];

  return (
    <div className="flex w-full  gap-10 px-baseX py-baseY">
      {/**
       * @dessription Image Section
       */}
      <div className="flex w-1/3 min-w-[400px] flex-col gap-y-8">
        <div className="flex aspect-square w-full cursor-pointer items-center justify-center  rounded-3xl">
          <CarouselSquare data={tempData} />
        </div>
      </div>
      {/**
       * @description Form Section
       */}
      <div className="flex w-2/3 flex-col p-5">
        <div>
          <h1 className={`${titleClassName} italic`}>제목</h1>
        </div>
        <div className="w-full text-readPostDescription">
          <p>dasdasdasdas</p>
        </div>
      </div>
    </div>
  );
};

export default ReadPost;
