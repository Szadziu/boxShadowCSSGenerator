import styled from "styled-components";

export const Panel = styled.div`
  position: absolute;
  top: 20%;
  left: 5%;

  width: 500px;
  height: 400px;
  background-color: ${({ theme }) => theme.blue};
`;
