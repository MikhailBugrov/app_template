import styled from 'styled-components';

export const PagesContainer = styled.div`
  min-height: 100vh;
  margin: 300px 330px 160px 260px;

  @media (max-width: 1660px) {
    margin: 280px 160px 160px;
  }

  @media (max-width: 1200px) {
    margin: 260px 90px 140px;
  }

  @media (max-width: 991px) {
    margin: 230px 70px 120px;
  }

  @media (max-width: 767px) {
    margin: 160px 60px 100px;
  }

  @media (max-width: 575px) {
    margin: 130px 20px 80px;
  }
`;