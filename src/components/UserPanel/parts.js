import styled from 'styled-components';

export const Panel = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 45%;
  height: 70%;
  box-shadow: 0 0 10px 2px black;
  border-radius: 20px;

  background-color: ${({ theme }) => theme.white};
`;

export const ColorPicker = styled.input`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 70px;
  height: 70px;
  border: none;
  align-self: flex-end;
  margin: 0 20px 20px 0;

  background-color: transparent;

  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

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

  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 20px;
  margin-top: 5%;
  margin-left: 20%;
  padding: 15px 30px;

  font-weight: 700;
  text-transform: uppercase;

  cursor: pointer;
`;

export const CopyInfo = styled.span`
  position: absolute;
  top: 50%;
  right: -105%;
`;
