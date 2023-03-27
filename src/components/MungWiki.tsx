import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

interface dogData {
  id: number;
  img: string;
  name: string;
}

const MungWiki = () => {
  const [dogList, setdogList] = useState<dogData[]>([
    {
      id: 1,
      img: '',
      name: '말티푸',
    },
    {
      id: 2,
      img: '',
      name: '포메라니안',
    },
    {
      id: 3,
      img: '',
      name: '웰시코기',
    },
    {
      id: 4,
      img: '',
      name: '슈나우저',
    },
    {
      id: 5,
      img: '',
      name: '리트리버',
    },
    {
      id: 6,
      img: '',
      name: '랙돌',
    },
  ]);

  return (
    <>
      <div className="m-auto mt-40 w-[1000px]">
        <form className="relative m-auto w-fit ">
          <input
            className="h-[40px] w-[300px] rounded-full border-2 border-solid border-black pl-7 text-xl"
            placeholder="검색어를 입력해주세요"
          />
          <buttom className="absolute right-7 top-3.5 ">
            <FiSearch className="h-[20px] w-[20px] cursor-pointer text-black" />
          </buttom>
        </form>
        <div className="mt-20 grid grid-cols-5 gap-10 pt-20">
          {dogList.map((item) => (
            <>
              <div key={item.id} className="w-[180px] text-center text-xl">
                <div className="h-[180px] w-[180px] cursor-pointer rounded-[15px] bg-slate-200"></div>
                <p className="mt-3 mb-10">{item.name}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default MungWiki;
// 견종에 대한 기본 적 정보가 적혀있는 Mung Wiki (임시 이름) 재민, 가영
