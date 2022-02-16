import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 15%;
  margin: 5px 50px;
`;

export const PropertyName = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;

  @media (min-width: 3840px) {
    font-size: 5rem;
  }
`;

export const Slider = styled.div`
  position: relative;

  width: 50%;
  height: 30px;
  border-radius: 20px;

  background-color: ${({ theme }) => theme.black};
`;
