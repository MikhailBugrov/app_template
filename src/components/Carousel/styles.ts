import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Box = styled.div`
  margin: 160px 0;

  @media (max-width: 767px) {
    margin: 70px 0;
  }
`;

export const ImageCarousel = styled.img<{ $isLast?: boolean }>`
  object-fit: cover;
  width: 280px;
  height: 420px;
`;

export const StyledSwiper = styled(Swiper)`
  width: calc(100% + 200px);
  margin: 0 -100px;
  padding-left: 100px;
  user-select: none;

  @media (max-width: 767px) {
    width: calc(100% + 40px);
    margin: 0 -20px;
    padding-left: 20px;
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  max-width: 300px;
`;
