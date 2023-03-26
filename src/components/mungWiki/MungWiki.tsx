import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Pagination from '../pagination/Pagination';

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
    {
      id: 7,
      img: '',
      name: '닥스훈트',
    },
    {
      id: 8,
      img: '',
      name: '말티푸',
    },
    {
      id: 9,
      img: '',
      name: '비숑프리제',
    },
    {
      id: 10,
      img: '',
      name: '스피츠',
    },
    {
      id: 11,
      img: '',
      name: '시츄',
    },
  ]);

  const [limit, setLimit] = useState(10); // 한 페이지에 보여줄 데이터 개수
  const [page, setPage] = useState(1); // 페이지 초기값 1
  const offset: number = (page - 1) * limit; // 게시물의 첫 위치 번호 찾기

  return (
    <>
      <div className="m-auto mt-40 w-fit">
        <form className="relative m-auto w-fit ">
          <input
            className="h-[40px] w-[300px] rounded-full border-2 border-solid border-black pl-7 text-xl"
            placeholder="검색어를 입력해주세요"
          />
          <button className="absolute right-7 top-3.5 ">
            <FiSearch className="h-[20px] w-[20px] cursor-pointer text-black" />
          </button>
        </form>
        <div className="mx-6 my-20 grid h-[400px] w-[700px] grid-cols-5 gap-10 pt-20">
          {/* ex) 1번째 페이지엔 0부터 9까지의 게시물 보여주기 */}
          {dogList.slice(offset, offset + limit).map((item, id) => (
            <div key={id} className="h-fit w-fit text-center text-xl">
              <Link to={`/wikiDetail/${id}`}>
                <div className="h-[120px] w-[120px] cursor-pointer gap-2 rounded-[15px] bg-slate-200"></div>
                <p className="mt-3">{item.name}</p>
              </Link>
            </div>
          ))}
        </div>
        <Pagination
          total={dogList.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </div>
    </>
  );
};

export default MungWiki;
// 견종에 대한 기본 적 정보가 적혀있는 Mung Wiki (임시 이름) 재민, 가영
