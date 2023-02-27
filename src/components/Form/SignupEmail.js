import React from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import styles from "./SignupEmail.module.css";

const SignupEmail = () => {
  return (
    <div className={styles.signupWrapper}>
      <form>
      <h3 className={styles.promotionMsg}>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className={styles.emailSignup}>
        {/* this can be moved to generic UI input to trigger on focus label position & size change */}
          <Input label="Email Address" input={{ id: "newUser_email" }} className={styles.signupInput}></Input>
        <Button className={styles.getStarted}>{`Get Started >`}</Button>
      </div>
    </form>
    </div>
  );


};

export default SignupEmail;
