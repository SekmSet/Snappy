import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import {fetchLogin} from '../../service/auth/login';

const LoginPage = () => {
  const [error, setError] = useState('');
  const { handleSubmit, register, errors } = useForm();

  const history = useHistory();

  const onSubmit = async values => {
    const result = await fetchLogin(values.email, values.password);

    if (result.error) {
      setError(result.error);
      return;
    }

    localStorage.setItem('token', result.token);
    localStorage.setItem('email', result.email);
    history.push('/');
    window.location.reload();
  };

  return (
    <div>
      {error !== '' && error}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="email"
          ref={register({
            required: 'Required',
          })}
        />
        {errors.email && errors.email.message}

        <input
          name="password"
          type="password"
          ref={register({
            required: 'Required',
          })}
        />
        {errors.password && errors.password.message}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default LoginPage;
