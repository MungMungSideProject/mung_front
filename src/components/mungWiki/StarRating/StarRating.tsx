import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
  const ratingArray: Array<boolean> = [false, false, false, false, false];

  const [ratingState, setRatingState] = useState(ratingArray);
  const [hoverValue, setHoverValue] = useState(null);

  // click시 0부터 반복하며 클릭된 별만큼 true로 바뀌도록
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
                text-4xl
                ${ratingState[i] && 'text-[#5F9DF7]'}
                ${hoverValue! > i ? 'text-accent/75' : 'text-slate-200'}
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

export default StarRating;
