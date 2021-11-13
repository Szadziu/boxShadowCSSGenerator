import styled from "styled-components";

export const Item = styled.button`
  position: absolute;
  top: -50%;
  left: ${({ position }) => position + "px"};

  width: 50px;
  height: 60px;
  background-color: rosybrown;
  border-radius: 20px;

  color: white;
  cursor: grab;
`;
