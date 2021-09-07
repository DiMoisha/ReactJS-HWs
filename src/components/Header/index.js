import React from 'react';
import clsx from 'clsx';
import { Route, useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';

export const Header = ({ classes, appHeading }) => {
  const { push } = useHistory();

  return (
    <AppBar className={classes.appBar} >
      <Toolbar className={classes.toolbar}>
        <Route path='/chates/:chatId'>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            title="Ваши чаты"
            onClick={() => push('/chates')}
            className={clsx(classes.chatMenuButton, classes.appBarButton)}
          >
            <MenuIcon />
          </IconButton>
        </Route>
        <IconButton
          edge="start"
          color="inherit"
          title="Перейти на главную страницу"
          onClick={() => push('/')}
          className={classes.appBarButton}
        >
          <HomeIcon />
        </IconButton>
        <Typography component="span"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.appTitle}
        >
          {appHeading}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}