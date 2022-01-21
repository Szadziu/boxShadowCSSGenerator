import styled from 'styled-components';

export const Panel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40%;
  height: 30%;
  background-color: ${({ theme }) => theme.blue};
`;
