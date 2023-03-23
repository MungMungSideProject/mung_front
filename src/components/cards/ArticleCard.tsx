import React from 'react';

const ArticleCard = () => {
  const paddingClass = '';

  return (
    <div
      className={`flex aspect-square h-full w-full  cursor-pointer flex-col overflow-hidden rounded-3xl shadow-sm`}
    >
      <div className="relative h-1/2 w-full">
        <img
          alt=""
          src="https://source.unsplash.com/random?q=50"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex h-1/2 w-full flex-col gap-5 text-ellipsis p-5">
        <h1 className="text-3xl">이름</h1>
        <p className=" text-lg text-slate-400">
          컨텐츠 추가설명컨텐츠 추가설명컨텐츠 추가설명컨텐츠 추가설명컨텐츠
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
