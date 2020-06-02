import React,  {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/context';

const LogoutPage = () => {
  const history = useHistory();
  const { logout } = useContext(UserContext);

  logout();
  history.push('/');

  return <div>logout</div>;
};

export default LogoutPage;
