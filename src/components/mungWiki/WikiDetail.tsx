import { useLocation } from 'react-router-dom';
import StarRating from './StarRating/StarRating';

export interface listDetailType {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  IQ: number;
  tameLevel: number;
  activity: number;
  adaptability: number;
}

const WikiDetail = () => {
  // path와 state props로 받아옴
  const location = useLocation();
  const dog = location.state.dogList;
  console.log(dog);
  console.log(location);

  return (
    <>
      <div className="m-auto mt-40 w-2/3">
        <div className="flex justify-center pt-4">
          <img
            src={dog.imageUrl}
            className="mr-20 h-[200px] w-[200px] gap-2 rounded-[15px] object-cover"
          />
          <div>
            <span className="text-3xl">{dog.name}</span>
            <span>소형견</span>
            <div className="mt-10">
              <ul className="flex w-[180px] justify-between">
                <li>지능</li>
                <li>
                  <StarRating />
                  <span className="pl-2">4.9 (30)</span>
                </li>
              </ul>
              <ul className="flex w-[180px] justify-between">
                <li>길들이기</li>
                <li>
                  <StarRating />
                  <span className="pl-2">4.9 (30)</span>
                </li>
              </ul>
              <ul className="flex w-[180px] justify-between">
                <li>활동성</li>
                <li>
                  <StarRating />
                  <span className="pl-2">4.9 (30)</span>
                </li>
              </ul>
              <ul className="flex w-[180px] justify-between">
                <li>실내 적응력</li>
                <li>
                  <StarRating />
                  <span className="pl-2">4.9 (30)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto mt-20 w-2/3 ">
        <ul className="flex justify-center gap-10">
          <li>{dog.description}</li>
          <li>댓글</li>
          <li>평점/댓글 남기기</li>
        </ul>
      </div>
    </>
  );
};

export default WikiDetail;
