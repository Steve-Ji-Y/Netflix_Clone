import React, {useState, useEffect} from "react";
import Logo from "../../components/UI/Logo";
import styles from "./Signup.module.css";
import SignupBody from "./SignupBody";
import SignupBackground from "./SignupBackground";

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
    return () => window.removeEventListener("resize", handleResize);
  },[isScreenLarge, screenWidth])

  return (
    <div className={styles["login-wrapper"]}>
      {isScreenLarge && <SignupBackground />}
      <div className={styles.loginHeader}>
        <Logo className={styles.loginLogo}/>
      </div>
      <SignupBody />
    </div>
  );
};

export default Login;
