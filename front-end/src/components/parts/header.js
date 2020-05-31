import React from 'react';
import {
  Link
} from 'react-router-dom';

import {getCurentUser} from '../../service/auth/login';

const Header = () => {
  const email = getCurentUser();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">MyBlog</a>
      <div className="collapse navbar-collapse show" >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link><span className="sr-only">(current)</span>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/snap">snap</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/snaps">Messagerie</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/logout">Logout</Link>
          </li>
        </ul>
          <span className="nav-link disabled" >{email}</span>
      </div>
    </nav>
  );
};

export default Header;