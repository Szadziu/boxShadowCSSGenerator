import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.green};
`;
