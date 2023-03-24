import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

interface list {
  total: number;
  limit: number;
  page: number;
  setPage: Function;
}

const Pagination = ({ total, limit, page, setPage }: list): JSX.Element => {
  // 총 페이지 = (총 게시물 수 / 페이지당 나타낼 게시물 수) 반올림
  const numPages = Math.ceil(total / limit);

  // 이전페이지
  const prevPage = () => {
    setPage(page - 1);
  };

  // 다음페이지
  const nextPage = () => {
    setPage(page + 1);
  };

  console.log(page);
  return (
    <>
      <div className="m-auto mt-28 flex w-fit">
        <button onClick={prevPage} disabled={page === 1}>
          <GrFormPrevious className="h-[20px] w-[20px]" />
        </button>
        <div className="mx-4 text-xl">
          {Array(numPages)
            .fill(null)
            .map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className="h-[30px] w-[30px]"
                aria-current={page === i + 1 && 'page'}
              >
                {i + 1}
              </button>
            ))}
        </div>
        <button onClick={nextPage} disabled={page === numPages}>
          <GrFormNext className="h-[20px] w-[20px]" />
        </button>
      </div>
    </>
  );
};

export default Pagination;
