import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowButton from './ArrowButton';
import SliderItem from './SliderItem';

interface CarouselSquareProps {
  data: File[];
}

const CarouselSquare = ({ data }: CarouselSquareProps) => {
  const setting = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 700,
    slideToShow: 1,
    slideToScroll: 1,
    arrows: true,

    prevArrow: <ArrowButton direction="prev" size="md" color="black" />,
    nextArrow: <ArrowButton direction="next" size="md" color="black" />,
  };

  return (
    <Slider className="w-full" {...setting}>
      {data &&
        data.map((item: File, index: number) => (
          <SliderItem key={index} url={URL.createObjectURL(item)} />
        ))}
    </Slider>
  );
};

export default CarouselSquare;
