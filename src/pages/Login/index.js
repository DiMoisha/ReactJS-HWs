import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { profileApi } from '../../api/request/profile';
import { Button, Divider } from "@material-ui/core";
import Box from "@material-ui/core/Box";

export const Login = ({ classes }) => {
  const { push } = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await profileApi.login(email, password);
      push('/home');
    } catch (err) {
      setError(err);
    }
  };

  return (
    <Box component="main" className={ classes.appContent } >
      <h2>Авторизуйтесь</h2>
      <form onSubmit={ handleSubmit } className={ classes.loginForm } autoComplete="off">
        <p>Заполните форму ниже, чтобы войти в свою учетную запись на ChatBook</p>
        <div className={ classes.loginFormGroupControl }>
          <input
            className={ classes.loginFormInput }
            placeholder="Email"
            name="email"
            type="email"
            onChange={ handleEmailChange }
            value={ email }
          />
        </div>
        <div className={ classes.loginFormGroupControl }>
          <input
            className={ classes.loginFormInput }
            placeholder="Password"
            name="password"
            onChange={ handlePassChange }
            value={ password }
            type="password"
          />
        </div>
        <div>
          {error && <p className={ classes.error }>{ error.toString() }</p>}
          <Button type="submit" variant="contained" color="primary">
            Войти
          </Button>
        </div>
      </form>
      <Divider />
      <div className={ classes.textCenter }>
        <h3>Если у вас нет аккаунта на ChatBook - вам сюда:</h3>
        <b><Link className={ classes.btn1 } to="/signup">Регистрация</Link></b>
      </div>
    </Box>
  );
}