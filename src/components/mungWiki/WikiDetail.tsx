import { useParams } from 'react-router-dom';

const WikiDetail = () => {
  const params = useParams();
  const dogId = params.id;

  return (
    <>
      <div className="m-auto mt-40 flex w-fit">
        <div className="mr-20 h-[200px] w-[200px] gap-2 rounded-[15px] bg-slate-200"></div>
        <div className="pt-4">
          <p className="mb-16">이름</p>
          <div>
            <div>지능</div>
            <div>길들이기</div>
            <div>활동성</div>
            <div>실내 적응력</div>
          </div>
        </div>
      </div>
      <div className="m-auto mt-40 flex w-fit">상세설명</div>
    </>
  );
};

export default WikiDetail;
