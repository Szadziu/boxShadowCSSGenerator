import styled from 'styled-components';

export const Box = styled.div.attrs(({ value }) => ({
    style: {
        boxShadow: `${value.offsetX}px ${value.offsetY}px ${value.spread}px ${value.blur}px ${value.currentColor}`,
    },
}))`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 200px;
    height: 200px;

    background-color: ${({ theme }) => theme.colors.primary};

    @media (min-width: 1280px) {
        width: 300px;
        height: 300px;
    }
`;
