import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-height: 70px;
    margin: ${({ theme }) => theme.margin.s} ${({ theme }) => theme.margin.xxl};
`;

export const PropertyName = styled.h2`
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-transform: uppercase;

    @media (min-width: 1280px) {
        font-size: ${({ theme }) => theme.fontSize.xxl};
    }
`;

export const Slider = styled.div`
    position: relative;

    width: 50%;
    height: 20px;
    border-radius: ${({ theme }) => theme.borderRadius.s};

    background-color: ${({ theme }) => theme.colors.accent_2};
`;
