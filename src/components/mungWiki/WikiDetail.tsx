import { useLocation } from 'react-router-dom';

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
  const location = useLocation();
  const dog = location.state.dogList;
  console.log(dog);
  console.log(location);

  return (
    <>
      <div className="m-auto mt-40 flex w-fit">
        <img
          src={dog.imageUrl}
          className="mr-20 h-[200px] w-[200px] gap-2 rounded-[15px] bg-slate-200 object-cover"
        />
        <div className="pt-4">
          <p className="mb-16">
            {dog.id}
            {dog.name}
          </p>
          <div>
            <div>지능: {dog.IQ}</div>
            <div>길들이기: {dog.tameLevel}</div>
            <div>활동성: {dog.activity}</div>
            <div>실내 적응력: {dog.adaptability}</div>
          </div>
        </div>
      </div>
      <div className="m-auto mt-40 flex w-fit">{dog.description}</div>
    </>
  );
};

export default WikiDetail;
