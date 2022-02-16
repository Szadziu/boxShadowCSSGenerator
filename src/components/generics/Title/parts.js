import styled from 'styled-components';

export const Text = styled.h1`
  width: 100%;
  height: 10%;
  text-transform: uppercase;

  color: ${({ theme }) => theme.black};

  font-size: 2rem;
  text-align: center;

  @media (min-width: 1920px) {
    font-size: 3rem;
  }
  @media (min-width: 3840px) {
    font-size: 5rem;
  }
`;
