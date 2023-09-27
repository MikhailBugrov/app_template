import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import { carouselData } from './carouselData';
import { Heading } from '../HeadingStyle';
import { Box, ImageCarousel, StyledSwiper, StyledSwiperSlide } from './styles';
import { CarouselProps } from './types';

const Carousel: React.FC<CarouselProps> = ({ title }) => {
  return (
    <Box>
      <Heading $isMobileMargin>{title}</Heading>
      <StyledSwiper slidesPerView="auto" modules={[Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false }}>
        {carouselData.map((image, index) => (
          <StyledSwiperSlide key={index}>
            <ImageCarousel src={`${process.env.PUBLIC_URL}/images/carousel/${image}`} alt={`${image}`} />
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
    </Box>
  );
};

export default Carousel;
