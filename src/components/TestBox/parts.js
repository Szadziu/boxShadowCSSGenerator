import styled from 'styled-components';

export const Box = styled.div`
  background-color: #5dcb73;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 300px;
  height: 300px;
  box-shadow: ${({ value }) => value.offsetX}px
    ${({ value }) => value.offsetY}px ${({ value }) => value.spread}px
    ${({ value }) => value.blur}px ${({ value }) => value.currentColor};
`;
