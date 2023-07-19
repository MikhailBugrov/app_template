import styled from 'styled-components';

export const Box = styled.div`
  margin: 160px 0;

  @media (max-width: 767px) {
    margin: 70px 0;
  }
`;

export const ImageCarouselContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  margin: 0 -330px 0 -260px;
  padding: 0 330px 0 260px;

  &::-webkit-scrollbar {
    display: none; 
  }

  @media (max-width: 1660px) {
    margin: 0 -160px;
    padding: 0 160px;
  }

  @media (max-width: 1200px) {
    margin: 0 -90px;
    padding: 0 90px;
  }

  @media (max-width: 991px) {
    margin: 0 -70px;
    padding: 0 70px;
  }

  @media (max-width: 767px) {
    margin: 0 -60px;
    padding: 0 60px;
  }

  @media (max-width: 575px) {
    margin: 0 -20px;
    padding: 0 20px;
  }
`;

export const ImageCarousel = styled.img<{ $isLast?: boolean }>`
  object-fit: cover;
  width: 320px;
  height: 489px;
  white-space: nowrap;
  margin-right: ${({ $isLast }) => ($isLast ? '0' : '40px')};

  @media (max-width: 767px) {
    width: 225px;
    height: 344px;
    margin-right: ${({ $isLast }) => ($isLast ? '0' : '28px')};
  }
`;