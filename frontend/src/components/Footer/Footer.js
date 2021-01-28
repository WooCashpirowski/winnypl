import React from "react";

const style = {
  textAlign: "center",
  borderTop: "1px solid var(--dark-red)",
  padding: "0.7rem",
  fontSize: "12px",
};

const Footer = () => {
  return (
    <footer style={style}>
      {" "}
      <a href="https://woocashpirowski.com" rel="noreferrer" target="_blank">
        Woo Cashpirowski
      </a>{" "}
      {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
