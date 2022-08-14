import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;

    width: calc(50% - 10px);
    max-width: 650px;
    height: 70%;
    box-shadow: 0 0 1px 0 ${({ theme }) => theme.colors.black};

    background-color: ${({ theme }) => theme.colors.white};
`;
