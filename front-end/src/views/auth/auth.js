import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { fetchLogin } from "../../service/auth/login";
import { fetchRegister } from "../../service/auth/register";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import UserContext from '../../context/context';

const AuthPage = () => {
  const { setAuth } = useContext(UserContext);
  const [error, setError] = useState('');
  const [login, setlogin] = useState(true);
  const { handleSubmit, register, errors } = useForm();

  const loginSubmit = async (values) => {
    const result = await fetchLogin(values.email, values.password);

    if (result.error) {
      setError(result.error);
      return;
    }

    setAuth(result);
  };

  const registerSubmit = async (values) => {
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
  };

  return (
    <div className="form-container">
      {error !== "" && error}
      <div className="left-container">
        <h3 className="status-phrase">
          {login ? "Create an account" : "Arleady have an account ?"}
        </h3>
        <Button> {login ? "Register" : "Login"}</Button>
      </div>
      <div className="right-container">
        <form className="form">
          <div className="text-fields">
            <TextField
              className="email-input"
              required
              name="email"
              label="Email"
              placeholder="example@example.com"
              inputRef={register({
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "invalid email address",
                },
              })}
            />

            {errors.email && errors.email.message}
            <TextField
              className="password-input"
              required
              label="Required"
              name="password"
              type="password"
              inputRef={register({
                required: "Required",
              })}
            />
          </div>
          {errors.password && errors.password.message}
          <div className="validation">
            {login && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit(loginSubmit)}
              >
                Login
              </Button>
            )}
            {!login && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit(registerSubmit)}
              >
                Register
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default AuthPage;
