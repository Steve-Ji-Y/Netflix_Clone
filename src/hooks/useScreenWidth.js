import { useState, useEffect } from "react";

const useScreenWidth = (width) => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [isScreenLarge, setIsScreenLarge] = useState(window.screen.width > width);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.screen.width);
      setIsScreenLarge(window.screen.width > width);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isScreenLarge, screenWidth, width]);

  return isScreenLarge;
};

export default useScreenWidth;
