import React, { useContext, useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { fetchLogin } from "../../service/auth/login";
import { fetchRegister } from "../../service/auth/register";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { TweenMax } from "gsap";
import UserContext from '../../context/context';

const AuthPage = () => {
  const { setAuth } = useContext(UserContext);
  const [error, setError] = useState('');
  const [login, setlogin] = useState(true);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
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

  /**
   * FIRST ANIMATION WHEN WE ENTER THE SCREEN
   */
  useEffect(() => {
    TweenMax.fromTo(leftRef.current, 2, { y: 18, x: -1200 }, { y: 25, x: 0 });
    TweenMax.fromTo(rightRef.current, 2, { y: -500 }, { y: 25 });
  }, []);
  /**
   * SECOND ANIMATION WHEN WE CLICK ON LOGIN or REGISTER
   */
  const animate = () => {
    //ANIMATIONS
    if (login) {
      TweenMax.fromTo(
        leftRef.current,
        0.5,
        { x: 0 },
        { x: rightRef.current.offsetWidth },
      );
      TweenMax.fromTo(
        rightRef.current,
        0.5,
        { x: 0 },
        { x: -leftRef.current.offsetWidth },
      );
    } else {
      TweenMax.fromTo(
        leftRef.current,
        0.5,
        { x: rightRef.current.offsetWidth },
        { x: 0 },
      );
      TweenMax.fromTo(
        rightRef.current,
        0.5,
        { x: -leftRef.current.offsetWidth },
        { x: 0 },
      );
    }
    //change login state
    setlogin(!login);
  };
  return (
    <div className="form-container">
      {error !== "" && error}
      <div className="left-container" ref={leftRef}>
        <div className="status-container">
          <h2 className="status-phrase">
            {login
              ? "Create an account instead ?"
              : "Arleady have an account ?"}
          </h2>
          <div className="status-change">
            <Button onClick={animate}>{login ? "Register" : "Login"}</Button>
          </div>
        </div>
      </div>
      <div className="right-container" ref={rightRef}>
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
              <div className="login-valid">
                <p>*by logging in you accept the terms of snappy.</p>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit(loginSubmit)}
                >
                  Login
                </Button>
              </div>
            )}
            {!login && (
              <div className="register-valid">
                <p>*by registering you accept the terms of snappy.</p>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit(registerSubmit)}
                >
                  Register
                </Button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default AuthPage;
