import React, {useState, useEffect} from "react";
import Logo from "../../components/UI/Logo";
import styles from "./Login.module.css";
import LoginBody from "./LoginBody";
import LoginBackground from "./LoginBackground";

// TODO: fix logo by using an actual SVG as the sizing needs to be different from Home's logo sizing

const Login = () => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [isScreenLarge, setIsScreenLarge] = useState(window.screen.width > 740);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.screen.width);
      setIsScreenLarge(window.screen.width > 740)
    };
    window.addEventListener("resize", handleResize);
    console.log(screenWidth, isScreenLarge);
    return () => window.removeEventListener("resize", handleResize);
  },[isScreenLarge, screenWidth])

  return (
    <div className={styles["login-wrapper"]}>
      {isScreenLarge && <LoginBackground />}
      <div className={styles.loginHeader}>
        <Logo className={styles.loginLogo}/>
      </div>
      <LoginBody />
    </div>
  );
};

export default Login;
