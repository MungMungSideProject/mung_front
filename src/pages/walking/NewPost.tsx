import InputBase from '@components/inputs/InputBase';
import React from 'react';
import { IoImagesOutline } from 'react-icons/io5';

const NewPost = () => {
  const pageTitleClassName = 'text-pageTitle font-bold text-black';
  const formItemTitleClassName = 'text-formItemTitle font-bold text-black';
  return (
    <div className="flex h-screen w-full flex-col gap-10 px-baseX py-baseY">
      <h1 className={`${pageTitleClassName}`}>게시글 등륵</h1>
      <div className="flex w-full ">
        {/**
         * @description Image Section
         */}
        <div className="box-border flex w-1/3 flex-col  p-10">
          <div className="flex aspect-square w-full cursor-pointer items-center justify-center">
            <IoImagesOutline
              className="h-1/2 w-1/2"
              opacity={0.8}
              color="gray"
            />
          </div>
        </div>
        {/**
         * @description Form Section
         */}
        <div className="flex w-2/3 flex-col p-5">
          <form className="flex w-full flex-col">
            <InputBase placeholder="제목" />
            <InputBase placeholder="제목" />
            <InputBase placeholder="제목" />
            <InputBase placeholder="제목" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
