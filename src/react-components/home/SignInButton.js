import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import styles from "./SignInButton.scss";
import { Button } from "../input/Button";
import user from "../../assets/images/customize/user.png";
export const SignInButton = ({ mobile, showLogin }) => {
  // console.log("re-render click", onHandleClick);
  const [stateShowLogin, setStateShowLogin] = useState(false);
  const handleClick = () => {
    setStateShowLogin(!stateShowLogin);
    showLogin(stateShowLogin);
  };
  return (
    <Button
      className={mobile ? styles.mobileSignIn : styles.SignInButtonPc}
      // thick
      // preset="signin"
      as="a"
      href="/signin"
    >
      <img src={user} alt={user} className={styles.icon} />
      <FormattedMessage id="sign-in-button" defaultMessage="Login / Register" />
    </Button>
  );
};
SignInButton.propTypes = {
  mobile: PropTypes.bool
};
