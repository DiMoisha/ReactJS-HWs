import React, { useState } from 'react';
import Box from "@material-ui/core/Box";
import { Link, useHistory } from 'react-router-dom';
import { profileApi } from "../../api";
import { profileConnect } from '../../connects/profile';
import { Button, Divider } from "@material-ui/core";

// В профиле нет смысла делать треккинг,
// т.к. профиль сугубо индивидуален
// Конкретный пользователь меняет свои данные

export const ProfileRender = ({ userId, userName, classes }) => {
    const { push } = useHistory();
    const [newName, setNewName] = useState(userName);
    const [error, setError] = useState("");

    const handleNameChange = (e) => {
        setNewName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await profileApi.update(userId, newName)
        } catch (err) {
            setError(err);
        }
    };

    const handleLogout = async (e) => {
        e.preventDefault();

        try {
            await profileApi.logout();
            push('/home');
        } catch (err) {
            setError(err);
        }
    };

    return (
        <Box component="main" className={classes.appContent}>
            <h2>Ваш профиль на ChatBook</h2>
            <form onSubmit={ handleSubmit } className={ classes.profileForm } autoComplete="off">
                <div className={ classes.profileGroupControl }>
                    <label>Ваше имя</label>
                    <br/>
                    <input
                        className={ classes.profileInput }
                        placeholder="your name"
                        name="username"
                        type="text"
                        onChange={ handleNameChange }
                        value={ newName }
                    />
                </div>
                <div>
                    {error && <p className={ classes.error }>{ error.toString() }</p>}
                    <Button type="submit" variant="contained" color="primary">
                        Сохранить
                    </Button>
                </div>
            </form>
            <Divider/>
            <div className={ classes.textCenter }>
                <button onClick={handleLogout} className={ classes.btn1 }><b>Выйти&nbsp;&raquo;</b></button>
            </div>
            <Divider style={{ height: 20, }} />
            <div className={ classes.textCenter }>
                <b><Link className={ classes.btn1 } to="/chates">&laquo;&nbsp;Чаты</Link></b>
            </div>
            <Divider style={{ height: 20, }} />
            <div className={ classes.textCenter }>
                <b><Link className={ classes.btn1 } to="/lesson8">Домашка № 8</Link></b>
            </div>
        </Box>
    );
};

export const Profile = profileConnect(ProfileRender);