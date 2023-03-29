import React, { useEffect, useState } from 'react';
import ArticleCard from '@components/cards/ArticleCard';
import { getWalking } from '@/apis/api/walking';
import { Link } from 'react-router-dom';

interface Walkingdog {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  date: string;
  voted: number;
}

const IndexWalking = () => {
  const pageTitleClassName = 'text-3xl font-bold text-black';
  const pageFilterClassName = 'text-xl xl:text-2xl font-bold text-black';
  const [posts, setPosts] = useState<Walkingdog[] | undefined>(undefined);

  useEffect(() => {
    const getWalkingdog = async () => {
      const data = await getWalking();
      if (data) {
        setPosts(data);
      }
    };
    getWalkingdog();
  }, []);

  return (
    <div className="flex h-wholeScreen w-full flex-col gap-8  bg-defaultBg px-baseX py-baseY">
      <div className="flex w-full items-center justify-between">
        <h1 className={pageTitleClassName}>산책인증</h1>
        <div
          className={`flex w-1/5 items-center justify-between ${pageFilterClassName}`}
        >
          <div className="cursor-pointer hover:text-accent">
            <Link to={'/walking/newpost'}>
              <h3>글쓰기</h3>
            </Link>
          </div>
          <div className="cursor-pointer hover:text-accent">
            <h3>최신순</h3>
          </div>
          <div className="cursor-pointer hover:text-accent">
            <h3>인기순</h3>
          </div>
        </div>
      </div>

      {posts && (
        <div className="row-auto grid h-fit w-full grid-cols-4 gap-5">
          {posts.map((item: Walkingdog, index: number) => {
            return (
              <Link to={`/walking/posts/${item.id}`} key={index}>
                <ArticleCard
                  key={index}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  author={item.author}
                  date={item.date}
                  voted={item.voted}
                />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default IndexWalking;
