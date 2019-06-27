import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  function logOut() {
    localStorage.setItem("token", "");
  }
  return (
    <>
      <div className="footer-container">
        <p className="logo-text">BCF</p>
        <p className="copyright">
          Copyright {"\u00A9"} 2019. All rights reserved.
        </p>
        <div className="logOut" onClick={logOut}>
          Log Out
        </div>
      </div>
    </>
  );
};

export default Footer;
