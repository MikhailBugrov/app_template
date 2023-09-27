import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 130px;

  @media (max-width: 1660px) {
    gap: 80px;
  }

  @media (max-width: 1200px) {
    gap: 30px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h3`
  margin-bottom: 25px;
  font-family: OrchideaPro;
  font-size: 48px;
  font-weight: 500;

  @media (max-width: 1200px) {
    font-size: 41px;
  }

  @media (max-width: 991px) {
    font-size: 28px;
  }

  @media (max-width: 767px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const Description = styled.p`
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 23px;

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  @media (max-width: 991px) {
    font-size: 14px;
  }
`;

export const ImageTop = styled.img`
  object-fit: cover;
  width: calc(100% + 100px);
  max-height: 480px;
  margin-left: -100px;

  @media (max-width: 767px) {
    max-height: 370px;
    width: calc(100% + 40px);
    margin-left: -20px;
  }
`;

export const ImageBottom = styled.img`
  object-fit: cover;
  object-position: 10% 10%;
  max-height: 410px;
  width: calc(100% + 100px);
  margin-right: -100px;

  @media (max-width: 767px) {
    max-height: 360px;
    width: calc(100% + 40px);
    margin-left: -20px;
  }
`;

export const Box = styled.div<{
  $isMobileOrder?: boolean;
  $isMobileMargin?: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    order: ${({ $isMobileOrder }) => ($isMobileOrder ? 2 : 'unset')};
    margin-bottom: ${({ $isMobileMargin }) => ($isMobileMargin ? '16px' : '0')};
  }
`;
