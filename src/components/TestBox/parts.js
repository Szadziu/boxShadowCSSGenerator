import styled from 'styled-components';

export const Box = styled.div.attrs(({ value }) => ({
  style: {
    boxShadow: `${value.offsetX}px ${value.offsetY}px ${value.spread}px ${value.blur}px ${value.currentColor}`,
  },
}))`
  display: flex;
  flex-direction: column;
  align-self: center;
  border-radius: 20px;
  width: 40vh;
  height: 40vh;

  background-color: ${({ theme }) => theme.beige};
`;
