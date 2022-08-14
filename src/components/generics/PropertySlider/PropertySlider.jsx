import { useState, useRef, useEffect } from 'react';
import DraggableItem from '../../DraggableItem';
import * as P from './parts';

const DRAGGABLE_WIDTH = 30;

const PropertySlider = ({
    name,
    min,
    max,
    onChange = () => {},
    value,
    setValue,
}) => {
    const sliderRef = useRef(null);
    const [position, setPosition] = useState(value);

    const setChoosenPosition = (e) => {
        const { left, width } = sliderRef.current.getBoundingClientRect();

        if (e.clientX < left || e.clientX > left + width) return;

        const mouseX = e.clientX - left;
        const step = width / (max - min);
        const newValue = mouseX / step + min;

        setPosition(mouseX - DRAGGABLE_WIDTH / 2);
        setValue(Math[newValue > 0 ? 'ceil' : 'floor'](newValue));
    };

    const setStartPosition = () => {
        const { width } = sliderRef.current.getBoundingClientRect();
        const step = width / (max - min);
        setValue(value);

        let newPosition;

        if (value === 0 && min < 0) {
            newPosition = width / 2;
        } else if (value < 0) {
            newPosition = width / 2 - step * Math.abs(value);
        } else {
            newPosition = step * value;
        }

        setPosition(newPosition - DRAGGABLE_WIDTH / 2);
    };

    useEffect(() => {
        setStartPosition();
    }, []);

    useEffect(() => {
        onChange(value);
    }, [value]);

    return (
        <>
            <P.Wrapper>
                <P.PropertyName>{name}</P.PropertyName>
                <P.Slider ref={sliderRef} onClick={setChoosenPosition}>
                    <DraggableItem
                        min={min}
                        max={max}
                        position={position}
                        setPosition={setPosition}
                        setChoosenPosition={setChoosenPosition}
                        setStartPosition={setStartPosition}
                        setValue={setValue}
                        value={value}
                    />
                </P.Slider>
            </P.Wrapper>
        </>
    );
};

export default PropertySlider;
