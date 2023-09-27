import styled from 'styled-components';

export const Heading = styled.h2<{ $isMobileMargin?: boolean }>`
  font-family: OrchideaPro;
  font-size: 48px;
  font-weight: 500;
  line-height: 64px;
  margin-bottom: 120px;

  @media (max-width: 991px) {
    font-size: 35px;
    line-height: 48px;
    margin-bottom: 80px;
  }

  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 31px;
    margin-bottom: ${({ $isMobileMargin }) => ($isMobileMargin ? '56px' : '64px')};
  }
`;
