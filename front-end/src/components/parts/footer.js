import React, {useContext} from "react";
import UserContext from '../../context/context'

const Footer = () => {
    const {email} = useContext(UserContext);

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
