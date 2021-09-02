import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: 'center',
    margin: '20px 10px',
  },
  toolbarHome: {
    flexDirection: 'column',
    justifyContent: 'center',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(2),
    flexShrink: 0,
  },
}));

export const Home = (props) => {
  const classes = useStyles();

  return (
    <Box component="main" className={props.classes.appContent}>
      <Box>
        <Typography component="h1"
          variant="h3"
          color="primary"
          noWrap
          className={classes.heading}
        >
          Ваш ChatBOOK
        </Typography>
      </Box>
      <Box>
        <Toolbar component="nav" variant="dense" className={classes.toolbarHome}>
          <Link
            component={RouterLink}
            color="inherit"
            noWrap
            key="1"
            variant="body2"
            to="/chates"
            title="Перейти на страницу чатов"
            className={classes.toolbarLink}
          >
            Ваши чаты на <b>ChatBOOK</b>
          </Link>
          <Link
            component={RouterLink}
            color="inherit"
            noWrap
            key="2"
            variant="body2"
            to="/profile"
            title="Перейти на страницу профиля"
            className={classes.toolbarLink}
          >
            Ваш профиль на <b>ChatBOOK</b>
          </Link>
        </Toolbar>
      </Box>
    </Box>
  );
};