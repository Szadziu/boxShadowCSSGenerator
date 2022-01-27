import styled from 'styled-components';

export const Item = styled.button`
  position: absolute;
  top: -50%;
  left: ${({ position }) => position + 'px'};

  width: 50px;
  height: 60px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 0 5px 2px ${({ theme }) => theme.violet};

  background-color: ${({ theme }) => theme.orange};
  color: ${({ theme }) => theme.black};

  cursor: grab;
`;
