import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { profileApi } from "../../api/request/profile";
import Box from "@material-ui/core/Box";
import { Button, Divider } from "@material-ui/core";

export const SignUp = ({ classes }) => {
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
      setError(null);
      try {
        await profileApi.registration(email, password);
        push('/login');
      } catch (err) {
        setError(err);
      }
    };

  return (
      <Box component="main" className={ classes.appContent } >
        <h2>Зарегистрируйтесь</h2>
        <form onSubmit={ handleSubmit } className={ classes.loginForm } autoComplete="off">
          <p>Заполните форму ниже, чтобы создать учетную запись на ChatBook</p>
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
              Зарегистрироваться
            </Button>
          </div>
        </form>
        <Divider />
        <div className={ classes.textCenter }>
          <h3>Если у вас уже есть аккаунт на ChatBook - вам сюда:</h3>
          <b><Link className={ classes.btn1 } to="/login">Авторизация</Link></b>
        </div>
      </Box>
  );
}