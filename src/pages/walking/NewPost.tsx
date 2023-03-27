import BaseButton from '@components/buttons/BaseButton';
import CarouselSquare from '@components/carousels/CarouselSquare';
import InputBase from '@components/inputs/InputBase';
import TextAreaBase from '@components/textAreas/TextAreaBase';
import React, { ChangeEvent, useState } from 'react';
import { IoImagesOutline } from 'react-icons/io5';

interface PostProps {
  title: string;
  content: string;
}

const NewPost = () => {
  const pageTitleClassName = 'text-pageTitle font-bold text-black';
  const formItemTitleClassName = 'text-formItemTitle font-bold text-black';

  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [postData, setPostData] = useState<PostProps>({
    title: '',
    content: '',
  });

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFiles(e.target.files);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPostData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <form className="flex  w-full flex-col gap-10 px-baseX py-baseY">
        <h1 className={`${pageTitleClassName}`}>게시글 등륵</h1>
        <div className="flex w-full justify-between gap-12">
          {/**
           * @description Image Section
           */}
          <div className="box-border flex w-1/3 min-w-[300px] flex-col gap-y-8 ">
            <input
              className="hidden"
              type={'file'}
              id="imageInput"
              name="imageInput"
              multiple
              onChange={handleFileInput}
              accept="image/*"
            />
            <label className="w-full" htmlFor="imageInput">
              <div className="flex aspect-square w-full cursor-pointer items-center justify-center  rounded-3xl">
                {selectedFiles ? (
                  <CarouselSquare data={Array.from(selectedFiles)} />
                ) : (
                  <IoImagesOutline
                    className="h-1/2 w-1/2"
                    opacity={0.8}
                    color="gray"
                  />
                )}
              </div>
            </label>
          </div>
          {/**
           * @description Form Section
           */}
          <div className="flex w-2/3 flex-col p-5">
            <div className="flex w-full flex-col gap-6">
              <InputBase
                label="제목"
                fullWidth
                type={'text'}
                name="title"
                value={postData.title}
                onChange={handleInputChange}
              />
              <TextAreaBase
                label="내용입력"
                name="content"
                fullWidth
                value={postData.content}
                onChange={handleInputChange}
              />
              <div className="flex w-full items-center justify-between">
                <BaseButton variant="default" size="xl">
                  확인
                </BaseButton>
                <BaseButton variant="default" size="xl">
                  취소
                </BaseButton>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default NewPost;
