import { mobileInfo } from '../../constants/constants';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import * as P from './parts';

const Wrapper = ({ children }) => {
    const { width, height } = useWindowDimensions();
    const isDesktopScreen = width >= 800 && height >= 600;

    return (
        <>
            {isDesktopScreen ? (
                <P.Container>{children}</P.Container>
            ) : (
                <P.MobileScreen>{mobileInfo}</P.MobileScreen>
            )}
        </>
    );
};

export default Wrapper;
