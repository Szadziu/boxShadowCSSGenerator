import styled from 'styled-components';

export const Item = styled.button.attrs(({ position }) => ({
    style: {
        left: position,
    },
}))`
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 20px;
    border: none;
    box-shadow: 0 0 1px 1px ${({ theme }) => theme.colors.white};

    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};

    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: 700;

    cursor: grab;

    @media (min-width: 1280px) {
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`;
