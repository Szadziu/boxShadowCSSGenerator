import styled from 'styled-components';

export const Square = styled.div`
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  box-shadow: ${({ value }) => value.offsetX}px
    ${({ value }) => value.offsetY}px ${({ value }) => value.spread}px
    ${({ value }) => value.blur}px ${({ value }) => value.currentColor};
`;
