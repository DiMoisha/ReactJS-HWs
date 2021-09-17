import React from 'react';
import { useHistory } from 'react-router-dom';
import Box from "@material-ui/core/Box";
import { Divider, IconButton, Typography } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import InputIcon from '@material-ui/icons/Input';

export const Home = ({ classes }) => {
    const { push } = useHistory();

    return (
        <Box component="main" className={ classes.appContent }>
            <Typography component="h2"
                        variant="h3"
                        color="inherit"
                        noWrap
                        className={ classes.title }
            >
                Ваш ChatBook
            </Typography>
            <Divider/>
            <IconButton
                edge="end"
                color="inherit"
                title="Авторизация на ChatBook"
                onClick={() => push('/login')}
                className={ classes.appBarButton }
            >
                <InputIcon/>
                <>&nbsp;Авторизация</>
            </IconButton>
            <IconButton
                edge="end"
                color="inherit"
                title="Зарегистрировать аккаунт на ChatBook"
                onClick={() => push('/signup')}
                className={ classes.appBarButton }
            >
                <PersonIcon/>
                <>&nbsp;Регистрация</>
            </IconButton>
        </Box>
    );
};