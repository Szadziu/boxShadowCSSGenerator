import styled from 'styled-components';

export const Panel = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 45%;
  height: 70%;
  box-shadow: 0 0 10px 2px black;
  border-radius: 20px;

  background-color: ${({ theme }) => theme.white};
`;
