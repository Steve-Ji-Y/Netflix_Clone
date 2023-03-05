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
    setTimeout(() => {
      setCounter((prev) => {
        return (prev + 1) % maxCounter;
      });
    }, 300);
  };

  const clickHandlerLeft = () => {

    setTimeout(() => {
      setCounter((prev) => {
        return (prev - 1 + maxCounter) % maxCounter;
      });
    }, 300);
  };

  return {
    counter,
    isTouched,
    isHover,
    clickHandlerRight,
    clickHandlerLeft,
    hoverHandler,
    blurHandler,
  };
};

export default useSlider;
