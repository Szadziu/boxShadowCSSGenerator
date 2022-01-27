import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  border-radius: 20px;
  width: 300px;
  height: 300px;
  box-shadow: ${({ value }) => value.offsetX}px
    ${({ value }) => value.offsetY}px ${({ value }) => value.spread}px
    ${({ value }) => value.blur}px ${({ value }) => value.currentColor};

  background-color: ${({ theme }) => theme.violet};
`;
