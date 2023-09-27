import styled from 'styled-components';

export const FooterContainer = styled.footer`
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  padding: 150px 260px 0;
  background-color: #141414;

  @media (max-width: 1200px) {
    padding: 150px 120px 0;
  }

  @media (max-width: 575px) {
    padding: 150px 60px 0;
  }
`;

export const TextFooter = styled.p`
  font-family: Manrope;
  font-size: 14px;
  color: #fff;
  text-align: center;
`;