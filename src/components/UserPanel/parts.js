import styled from 'styled-components';

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40vw;
  height: 60vh;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px 2px black;
  border-radius: 20px;
`;

export const ColorPicker = styled.input`
  align-self: flex-end;
  margin: 0 20px 20px 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 70px;
  height: 70px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  &::-webkit-color-swatch {
    border-radius: 50%;
    border: none;
    box-shadow: 0 0 10px 2px black;
  }
`;

export const TextPicker = styled.input`
  width: 60%;
  align-self: center;
  background-color: cadetblue;
`;
