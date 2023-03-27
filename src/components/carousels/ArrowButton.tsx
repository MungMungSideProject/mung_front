import React, { ButtonHTMLAttributes } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

type Size = 'sm' | 'md' | 'lg';
type Direction = 'prev' | 'next';
type Color = 'black' | 'white';

/**
 * @type size {string} - 크기를 결정
 * @type direction {string} - 이전, 다음 화살표 방향
 * @type color {string} - color 지정
 */

interface ArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: Size;
  direction: Direction;
  color: Color;
}

const ArrowButton = ({
  size,
  direction,
  color,
  ...props
}: ArrowButtonProps) => {
  return (
    <button {...props}>
      {direction === 'prev' ? (
        <IoIosArrowBack size={size} color={color} />
      ) : (
        <IoIosArrowForward size={size} color={color} />
      )}
    </button>
  );
};

export default ArrowButton;
