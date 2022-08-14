import styled from 'styled-components';

export const Text = styled.h1`
    width: 100%;

    color: ${({ theme }) => theme.colors.black};

    font-size: ${({ theme }) => theme.fontSize.xxl};
    text-transform: uppercase;
    text-align: center;
`;
