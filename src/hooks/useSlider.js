import { useState } from "react";


const useSlider = (maxCounter) => {
  const [counter, setCounter] = useState(0);
  const [isTouched, setIsTouched] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const hoverHandler = () => {
    setIsHover(true);
  };
  const blurHandler = () => {
    setIsHover(false);
  };

  const clickHandlerRight = () => {
    setIsTouched(true);
    setCounter( (prev) => {
      return (prev - 1 + maxCounter) % maxCounter
    });
  };

  const clickHandlerLeft = () => {
    setCounter( (prev) => {
      return (prev + 1) % maxCounter
    });
  }

  return {
    counter,
    isTouched,
    isHover,
    clickHandlerRight,
    clickHandlerLeft,
    hoverHandler,
    blurHandler,
  }
}


export default useSlider;
