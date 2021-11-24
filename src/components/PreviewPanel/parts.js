import styled from "styled-components";

export const Panel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 20%;
  right: 10%;

  width: 500px;
  height: 400px;
  background-color: ${({ theme }) => theme.blue};
`;
