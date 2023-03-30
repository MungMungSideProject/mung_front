import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarReview = () => {
  const ratingArray: Array<boolean> = [false, false, false, false, false];

  const [ratingState, setRatingState] = useState(ratingArray);
  const [hoverValue, setHoverValue] = useState(null);

  // 클릭된 별들은 true로
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
              onClick={() => RatingClick(i)}
              onMouseOver={() => handleMouseOver(i)}
              onMouseLeave={handleMouseLeave}
              className={`text-3xl text-slate-200
              ${ratingState[i] && 'text-accent'}
              ${hoverValue! > i ? 'text-accent/75' : 'text-slate-200'}
              `}
            />
          </button>
        );
      })}
    </>
  );
};

export default StarReview;
