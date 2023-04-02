import StarRating from './StarRating/StarRating';

const WikiComments = () => {
  const dogCharacter: Array<string> = [
    '지능',
    '길들이기',
    '활동성',
    '실내적응력',
  ];

  // className
  const flexCenter = 'flex items-center justify-center';

  return (
    <>
      <div className="m-auto mt-20 h-fit w-full max-w-[700px] rounded-[10px] border-2 border-solid border-slate-200">
        <ul
          className={`${flexCenter} h-16 gap-10 rounded-t-[7px] bg-slate-100 text-2xl`}
        >
          <li>상세설명</li>
          <li>평점/댓글 남기기</li>
        </ul>

        <div className="m-auto mt-16 grid w-[500px] grid-cols-2">
          {dogCharacter.map((item) => (
            <div
              key={item}
              className="m-auto my-1 flex w-[200px] items-center justify-between"
            >
              <p className="flex text-postContents">{item}</p>
              <div className="">
                <StarRating />
              </div>
            </div>
          ))}
        </div>

        <form className={`${flexCenter} mt-10 mb-8 w-full`}>
          <textarea className="mr-5 h-32 w-2/3 resize-none rounded-lg border-2 border-solid border-slate-200 p-3" />
          <button className="h-16 w-32 rounded-lg bg-black text-xl text-white">
            댓글 등록
          </button>
        </form>
      </div>
    </>
  );
};

export default WikiComments;
