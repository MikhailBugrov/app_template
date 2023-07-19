import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 130px;

  @media (max-width: 1660px) {
    gap: 90px;
  }

  @media (max-width: 1200px) {
    gap: 30px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 25px;
  font-family: OrchideaPro;
  font-size: 48px;
  font-weight: 500;
  line-height: 53px;

  @media (max-width: 991px) {
    font-size: 35px;
    line-height: 48px;
  }

  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 20px;
  }
`;

export const Description = styled.p`
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 23px;
`;

export const ImageTop = styled.img`
  object-fit: cover;
  width: calc(100% + 260px);
  margin-left: -260px;
  height: 100%;
  max-height: 480px;

  @media (max-width: 1660px) {
    width: calc(100% + 160px);
    margin-left: -160px;
  }

  @media (max-width: 1200px) {
    width: calc(100% + 90px);
    margin-left: -90px;
  }

  @media (max-width: 991px) {
    width: calc(100% + 70px);
    margin-left: -70px;
  }

  @media (max-width: 767px) {
    max-height: 370px;
    width: calc(100% + 120px);
    margin-left: -60px;
  }

  @media (max-width: 575px) {
    width: calc(100% + 40px);
    margin-left: -20px;
  }
`;

export const ImageBottom = styled.img`
  object-fit: cover;
  object-position: 10% 10%;
  width: 100%;
  max-height: 411px;

  @media (max-width: 767px) {
    max-height: 360px;
    width: calc(100% + 120px);
    margin-left: -60px;
  }

  @media (max-width: 575px) {
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