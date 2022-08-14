import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 10px;

    width: 100vw;
    max-width: 1600px;
    height: 100vh;
    margin: 0 auto;

    background-color: ${({ theme }) => theme.colors.white};
`;

export const MobileScreen = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    background-color: ${({ theme }) => theme.colors.disabled};
    color: ${({ theme }) => theme.colors.white};

    font-size: ${({ theme }) => theme.fontSize.l};
    text-align: center;
`;
