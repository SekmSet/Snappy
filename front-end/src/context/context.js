import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UserContext = React.createContext(undefined);

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [email, setEmail] = useState(localStorage.getItem('email'));
  const [isAuth, setIsAuth] = useState(token !== null && email !== null);

  const setAuth = ({ token, email }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
    setToken(token);
    setEmail(email);
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    setToken('');
    setEmail('');
    setIsAuth(false);
  };

  const data = {
    token,
    email,
    isAuth,
    setAuth,
    logout
  };

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  );
};

export const UserConsumer = UserContext.Consumer;
export default UserContext;

UserProvider.propTypes = {
  children: PropTypes.element.isRequired
};
