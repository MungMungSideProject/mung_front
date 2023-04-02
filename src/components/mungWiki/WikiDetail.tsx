import { useLocation } from 'react-router-dom';
import StarRating from './StarRating/StarRating';
import WikiComments from './WikiComment';

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

  const dogCharacter: Array<string> = [
    '지능',
    '길들이기',
    '활동성',
    '실내적응력',
  ];

  return (
    <>
      <div className="fixed h-screen w-full">
        <div className="m-auto mt-40 w-2/3">
          <div className="m-auto flex h-[250px] max-w-[700px] justify-center bg-white pt-4">
            <img
              src={dog.imageUrl}
              className="mr-20 h-[200px] w-[200px] gap-2 rounded-[15px] object-cover"
            />
            <div>
              <div className="flex items-end ">
                <p className="text-3xl">{dog.name}</p>
                <p>소형견</p>
              </div>
              <div className="mt-16">
                {dogCharacter.map((item) => (
                  <div key={item} className="my-1 w-[270px]">
                    <div className="flex items-center justify-between">
                      <div className="flex w-[220px] items-center justify-between">
                        <p className="text-2xl">{item}</p>
                        <div className="mr-3">
                          <StarRating />
                        </div>
                      </div>
                      <div>
                        <span className="mr-2 text-xl leading-6">5.0</span>
                        <span className="text text-stone-400">(30)</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <WikiComments />
        </div>
      </div>
    </>
  );
};

export default WikiDetail;
