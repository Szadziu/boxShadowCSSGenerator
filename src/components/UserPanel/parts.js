import styled from 'styled-components';

export const ActionButtonsWrapper = styled.div`
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 ${({ theme }) => theme.margin.xl};
`;

export const ColorPickerWrapper = styled.div`
    width: 150px;
    height: 40px;
`;

export const ColorPicker = styled.input`
    position: relative;

    width: 100%;
    height: 100%;
    border: none;
    padding: 0;

    cursor: pointer;
    appearance: none;
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: ${({ theme }) => theme.letterSpacing.m};

    &::-webkit-color-swatch {
        border: none;
        padding: 0;
        margin: 0;
        outline: none;
    }

    &::-webkit-color-swatch-wrapper {
        padding: 0;
    }

    &::before {
        content: 'set color';

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);

        font-size: ${({ theme }) => theme.fontSize.s};
        font-family: 'Bebas Neue', cursive;
        padding: ${({ theme }) => `${theme.padding.xs} ${theme.padding.s}`};
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`;

export const CopyButton = styled.button`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 100%;

    letter-spacing: ${({ theme }) => theme.letterSpacing.m};

    border: none;
    background-color: ${({ theme }) => theme.colors.accent_2};
    color: ${({ theme }) => theme.colors.white};

    font-size: ${({ isTextCopied }) => (isTextCopied ? '0' : '14px')};
    text-transform: uppercase;
    font-family: 'Bebas Neue', cursive;

    cursor: pointer;
`;

export const TextPicker = styled.input`
    height: 30px;
    border: none;
    box-shadow: 0 0 2px 0 black;
    margin: 0 ${({ theme }) => theme.margin.xl};
    padding: ${({ theme }) => `${theme.padding.xs} ${theme.padding.m}`};

    outline: none;
    letter-spacing: ${({ theme }) => theme.letterSpacing.m};

    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.secondary};

    font-weight: 700;
`;

export const CopyInfo = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    color: ${({ theme }) => theme.colors.enabled};
    font-size: ${({ theme }) => theme.fontSize.s};
`;
