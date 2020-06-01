import React from "react";
import { getCurentUser } from "../../service/auth/login";

const Footer = () => {
  const email = getCurentUser();

  return (
    <footer className="text-muted">
      <div className="container">
        <p> © By Les Pains Durs !</p>
      </div>
      <span className="logged-as"> Logedin as : {email}</span>
    </footer>
  );
};

export default Footer;
