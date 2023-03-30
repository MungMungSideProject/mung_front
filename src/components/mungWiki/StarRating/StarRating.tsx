import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarReview = () => {
  const ratingArray: Array<boolean> = [false, false, false, false, false];

  const [ratingState, setRatingState] = useState(ratingArray);
  const [hoverValue, setHoverValue] = useState(null);

  const RatingClick = (idx: number) => {
    const tempRatingState = [...ratingState];

    for (let i = 0; i < 5; i++) {
      tempRatingState[i] = i <= idx ? true : false;
    }
    setRatingState(tempRatingState);
  };

  // Hover handler
  const handleMouseOver = (value: any) => {
    setHoverValue(value + 1);
  };

  // 벗어나면 null값
  const handleMouseLeave = () => {
    setHoverValue(null);
  };

  return (
    <>
      {[0, 1, 2, 3, 4].map((i: number) => {
        return (
          <button key={i}>
            <FaStar
              className={`
                text-3xl
                ${ratingState[i] && 'text-[#5F9DF7]'}
                ${hoverValue! > i ? 'text-accent' : 'text-slate-200'}
                `}
              onMouseOver={() => {
                handleMouseOver(i);
              }}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                RatingClick(i);
              }}
            />
          </button>
        );
      })}
    </>
  );
};

export default StarReview;
