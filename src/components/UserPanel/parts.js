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
  right: 1rem;
  bottom: 1rem;

  width: 70px;
  height: 70px;
  border: none;
  align-self: flex-end;

  background-color: transparent;

  cursor: pointer;
  appearance: none;

  &::-webkit-color-swatch {
    border-radius: 50%;
    border: none;
    box-shadow: 0 0 10px 2px black;
  }

  &::before {
    position: absolute;
    top: 95%;
    left: 5%;

    text-align: center;
    font-size: 1rem;
    font-family: 'Bebas Neue', cursive;

    content: 'set color';

    @media (min-width: 1920px) {
      top: 30%;
      left: -150%;
      font-size: 1.5rem;
    }
    @media (min-width: 3840px) {
      font-size: 3.5rem;
    }
  }

  @media (min-width: 3840px) {
    width: 150px;
    height: 150px;
  }
`;

export const TextPicker = styled.input`
  width: 60%;
  height: 5%;
  align-self: flex-start;
  border: none;
  box-shadow: 0 0 10px 2px black;
  border-radius: 5px;
  padding: 0 20px;
  margin-left: 2rem;

  background-color: ${({ theme }) => theme.beige};

  font-weight: 700;

  @media (min-width: 1920px) {
    font-size: 1.2rem;
  }
  @media (min-width: 3840px) {
    font-size: 2.4rem;
  }
`;

export const CopyButton = styled.button`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 20px;
  margin-left: 2rem;
  padding: 15px 30px;

  font-weight: 700;
  text-transform: uppercase;

  cursor: pointer;

  @media (min-width: 1920px) {
    width: 100px;
    height: 40px;
    font-size: 1.5rem;
  }
  @media (min-width: 3840px) {
    width: 200px;
    height: 80px;
    font-size: 2.5rem;
  }
`;

export const CopyInfo = styled.span`
  position: absolute;
  top: 25%;
  right: -150%;
`;
