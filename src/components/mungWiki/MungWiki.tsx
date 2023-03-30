import { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsStar } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Pagination from '../pagination/Pagination';
import { getWiki } from '@/apis/api/wiki';

export interface DogListType {
  id: number;
  name: string;
  imageUrl: string;
}

const MungWiki = () => {
  const [dogList, setdogList] = useState<DogListType[]>([]);

  const [limit, setLimit] = useState(10); // 한 페이지에 보여줄 데이터 개수
  const [page, setPage] = useState(1); // 페이지 초기값 1
  const offset: number = (page - 1) * limit; // 게시물의 첫 위치 번호 찾기

  useEffect(() => {
    const getWikiList = async () => {
      const data = await getWiki();
      if (data) {
        setdogList(data);
      }
    };
    getWikiList();
  }, []);

  return (
    <>
      <div className="fixed h-screen w-full">
        <div className="m-auto mt-40 w-2/3 ">
          <form className="relative m-auto w-fit">
            <input
              className="h-[40px] w-[300px] rounded-full border-2 border-solid border-black pl-7 text-xl"
              placeholder="검색어를 입력해주세요"
            />
            <button className="absolute right-7 top-3.5 ">
              <FiSearch className="h-[20px] w-[20px] cursor-pointer text-black" />
            </button>
          </form>
          <div>
            <label className="mt-20 flex w-full justify-end text-xl">
              <select>
                <option>이름순</option>
                <option>소형견</option>
                <option>중형견</option>
                <option>대형견</option>
              </select>
            </label>
            <div className="mx-6 mb-20 grid h-[400px] w-full grid-cols-5 gap-5 pt-20">
              {/* ex) 1번째 페이지엔 0부터 9까지의 게시물 보여주기 */}
              {dogList.slice(offset, offset + limit).map((item, id) => (
                <div
                  key={id}
                  className="relative h-fit w-fit text-center text-xl"
                >
                  <BsStar className="absolute top-3 right-3 cursor-pointer text-white opacity-70 active:fill-black" />
                  {/* 해당 id에 맞는 state props로 */}
                  <Link to={`/wiki/${id}`} state={{ dogList: item }}>
                    <img
                      src={item.imageUrl}
                      className="h-[140px] min-h-[100px] w-[140px] cursor-pointer gap-2 rounded-[10px] bg-slate-200 object-cover"
                      alt="image"
                    />
                    <p className="mt-3 mb-7">{item.name}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <Pagination
            total={dogList.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </div>
      </div>
    </>
  );
};

export default MungWiki;
// 견종에 대한 기본 적 정보가 적혀있는 Mung Wiki (임시 이름) 재민, 가영
