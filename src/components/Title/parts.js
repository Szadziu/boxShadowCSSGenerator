import styled from 'styled-components';

export const Text = styled.h1`
  width: 100%;
  height: 10%;
  text-transform: uppercase;

  color: ${({ theme }) => theme.black};

  font-size: 2rem;
  text-align: center;
`;
