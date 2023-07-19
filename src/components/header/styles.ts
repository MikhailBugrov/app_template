import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  padding: 0 260px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: linear-gradient(#010101, #464341);

  @media (max-width: 1200px) {
    padding: 0 120px;
  }

  @media (max-width: 991px) {
    padding: 0 80px;
  }

  @media (max-width: 767px) {
    height: 60px;
  }

  @media (max-width: 575px) {
    padding: 0 20px;
  }
`;

export const Logo = styled.img`
  height: 36px;
  cursor: pointer;

  @media (max-width: 767px) {
    height: 20px;
  }
`;

export const PhoneNumber = styled.a`
  text-decoration: none;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Manrope;
  font-size: 24px;
  font-weight: 500;
  color: #fff;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const PhoneNumberImage = styled.img`
  display: flex;
  align-items: center;
`;

export const PhoneNumberImageLink = styled.a`
  @media (min-width: 768px) {
    display: none;
  }
`;