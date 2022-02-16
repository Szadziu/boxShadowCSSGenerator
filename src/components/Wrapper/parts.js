import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.white};
`;

export const MobileScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  background-color: cadetblue;

  font-size: 1.2rem;
  text-align: center;
  color: ${({ theme }) => theme.white};

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;
