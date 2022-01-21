import { createContext, useState } from 'react';

const BoxShadowContext = createContext();

export const BoxShadowContextProvider = ({ children }) => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [spread, setSpread] = useState(0);
  const [blur, setBlur] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [currentColor, setCurrentColor] = useState('black');
  console.log(offsetX);
  return (
    <BoxShadowContext.Provider
      value={{
        offsetX,
        setOffsetX,
        offsetY,
        setOffsetY,
        spread,
        setSpread,
        blur,
        setBlur,
        opacity,
        setOpacity,
        currentColor,
        setCurrentColor,
      }}
    >
      {children}
    </BoxShadowContext.Provider>
  );
};

export default BoxShadowContext;

// początek dżdżownicy Emilii
// -----|
//      |
//      |
//      |-------:
// koniec dżdżownicy Emilii
