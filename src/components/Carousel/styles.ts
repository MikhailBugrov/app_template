import styled from 'styled-components';

export const Box = styled.div`
  margin: 160px 0;

  @media (max-width: 767px) {
    margin: 70px 0;
  }
`;

export const ImageCarousel = styled.img`
  object-fit: cover;
  width: 280px;
  height: 420px;
`;
