import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import {fetchLogin} from '../../service/auth/login';
import {fetchRegister} from '../../service/auth/register';

const AuthPage = () => {
  const [error, setError] = useState('');
  const { handleSubmit, register, errors } = useForm();

  const history = useHistory();

  const loginSubmit = async values => {
    const result = await fetchLogin(values.email, values.password);

    if (result.error) {
      setError(result.error);
      return;
    }

    localStorage.setItem('token', result.token);
    localStorage.setItem('email', result.email);
    //history.push('/');
    window.location.reload();
  };

  const registerSubmit = async values => {
    const params = {
      email: values.email,
      password: values.password,
    };
    const result = await fetchRegister(params);

    if (result.error) {
      setError(result.error);
      return;
    }

    await loginSubmit(params);
  }

  return (
    <div>
      {error !== '' && error}
      <form>
        <input
          name="email"
          ref={register({
            required: 'Required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'invalid email address'
            }
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

        <button onClick={handleSubmit(loginSubmit)}>Login</button>
        <button onClick={handleSubmit(registerSubmit)}>Register</button>
      </form>
    </div>
  );
};
export default AuthPage;
