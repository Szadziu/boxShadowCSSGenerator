import styled from 'styled-components';

export const Item = styled.button.attrs(({ position }) => ({
  style: {
    left: position,
  },
}))`
  position: absolute;
  top: -50%;

  width: 40px;
  height: 60px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 5px 2px ${({ theme }) => theme.black};

  background-color: ${({ theme }) => theme.orange};
  color: ${({ theme }) => theme.white};

  font-weight: 700;

  cursor: grab;
`;
