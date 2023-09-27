import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import './swiper.css';
import { carouselData } from './carouselData';
import { Heading } from '../HeadingStyle';
import { Box, ImageCarousel } from './styles';
import { CarouselProps } from './types';

const Carousel: React.FC<CarouselProps> = ({ title }) => {
  return (
    <Box>
      <Heading $isMobileMargin>{title}</Heading>
      <Swiper
        slidesPerView="auto"
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="swiperCarousel">
        {carouselData.map((image, index) => (
          <SwiperSlide key={index} className="slideCarousel">
            <ImageCarousel src={`${process.env.PUBLIC_URL}/images/carousel/${image}`} alt={`${image}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
