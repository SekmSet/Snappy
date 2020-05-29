import { useHistory } from 'react-router-dom';

const LogoutPage = () => {
  const history = useHistory();

  localStorage.removeItem('token');
  localStorage.removeItem('email');
  history.push('/');
  window.location.reload();

  return null;
};

export default LogoutPage;
