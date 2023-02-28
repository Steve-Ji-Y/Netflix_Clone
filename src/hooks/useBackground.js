import { useState, useEffect } from "react";

const useBackground = () => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [isScreenLarge, setIsScreenLarge] = useState(window.screen.width > 740);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.screen.width);
      setIsScreenLarge(window.screen.width > 740);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isScreenLarge, screenWidth]);

  return isScreenLarge;
};

export default useBackground;
