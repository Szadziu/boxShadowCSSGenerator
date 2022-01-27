import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 15%;
  margin: 5px 20px;
`;

export const PropertyName = styled.h2`
  text-transform: uppercase;
`;

export const Slider = styled.div`
  position: relative;

  width: 60%;
  height: 30px;
  border-radius: 20px;

  background-color: ${({ theme }) => theme.black};
`;
