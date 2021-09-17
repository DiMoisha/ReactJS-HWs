import React from 'react';
import clsx from 'clsx';
import { Route, useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';

export const Header = ({ classes, appHeading }) => {
  const { push } = useHistory();

  return (
    <AppBar className={ classes.appBar } >
      <Toolbar className={ classes.toolbar }>
        <Route path='/chates/:chatId'>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            title="Ваши чаты"
            onClick={() => push('/chates')}
            className={ clsx(classes.chatMenuButton, classes.appBarButton) }
          >
            <MenuIcon />
          </IconButton>
        </Route>
        <IconButton
          edge="start"
          color="inherit"
          title="Перейти на главную страницу"
          onClick={() => push('/')}
          className={ classes.appBarButton }
        >
          <HomeIcon />
        </IconButton>
        <Typography component="span"
          variant="h6"
          color="inherit"
          noWrap
          className={ classes.appTitle }
        >
          {appHeading}
        </Typography>
        <IconButton
            edge="end"
            color="inherit"
            title="Перейти в свой Профиль"
            onClick={() => push('/profile')}
            className={ classes.appBarButton }
        >
          <PersonIcon/>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}