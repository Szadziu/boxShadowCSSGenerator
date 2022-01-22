import styled from 'styled-components';

export const Panel = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-around;
  width: 40vw;
  height: 60vh;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px 2px black;
  border-radius: 20px;
`;

export const ColorPicker = styled.input`
  position: absolute;
  right: 0;
  bottom: 0;
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

export const CopyButton = styled.button`
  position: relative;
  width: 50px;
  height: 20px;
  margin-top: 5%;
  margin-left: 20%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const CopyInfo = styled.span`
  position: absolute;
  top: 50%;
  right: -105%;
`;
