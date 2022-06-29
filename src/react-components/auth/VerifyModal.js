import React from "react";
import PropTypes from "prop-types";
import { Spinner } from "../misc/Spinner";
import { Modal } from "../modal/Modal";
import { Column } from "../layout/Column";
import { FormattedMessage } from "react-intl";
import styles from "./VerifyModal.scss";
import success from "../../assets/images/customize/success.png";
export const VerificationStep = {
  verifying: "verifying",
  complete: "complete",
  error: "error"
};

export function VerifyingEmail() {
  return (
    <Column center padding grow className={styles.formSignIn}>
      <p className={styles.titleModal}>Email verification</p>
      <Spinner />
      <br />
      <b className={styles.verifing}>
        <FormattedMessage id="verify-modal.verifying-email" defaultMessage="Verifying your email..." />
      </b>
    </Column>
  );
}

export function EmailVerified({ origin }) {
  return (
    <Column center padding grow className={styles.formSignIn}>
      <p className={styles.titleModal}>Email verification</p>
      <img src={success} alt="success" className={styles.iconSuccess} />
      <b className={styles.successEmail}>
        <FormattedMessage id="verify-modal.verification-complete" defaultMessage="Verification successful!" />
      </b>
      {/* <p>
        <FormattedMessage
          id="verify-modal.close-window"
          defaultMessage="Please close this browser window and return to {origin}."
          values={{ origin }}
        />
      </p> */}
      <button className={styles.btn_1}>Start exploring</button>
      <button className={styles.btn_2}>Customise my profile</button>
    </Column>
  );
}

EmailVerified.propTypes = {
  origin: PropTypes.string.isRequired
};

export function VerificationError({ error }) {
  return (
    <Column center padding grow className={styles.formSignIn}>
      <p className={styles.titleModal}>Email verification</p>
      <b>
        <FormattedMessage id="verify-modal.error" defaultMessage="Error Verifying Email" />
      </b>
      <p>
        {(error && error.message) || (
          <FormattedMessage id="verify-modal.unknown-error" defaultMessage="Unknown Error" />
        )}
      </p>
    </Column>
  );
}

VerificationError.propTypes = {
  error: PropTypes.object
};

export function VerifyModal({ children }) {
  return (
    <Modal
      // title={<FormattedMessage id="verify-modal.title" defaultMessage="Email verification" />}
      disableFullscreen
      className={styles.modalCustomize}
    >
      {children}
    </Modal>
  );
}

VerifyModal.propTypes = {
  children: PropTypes.node
};
