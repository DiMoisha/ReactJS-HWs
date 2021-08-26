import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

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

export const Profile = (props) => {
  const { goBack, push } = useHistory();
  const classes = useStyles();

  return (
    <Box component="main" className={props.classes.appContent}>
      <Box>
        <Typography component="h1"
          variant="h3"
          color="primary"
          className={classes.heading}
        >
          Ваш профиль на ChatBOOK
        </Typography>
      </Box>
      <Divider />
      <div>
        <button onClick={goBack}>
          Назад
        </button>
        <button onClick={() => push('/chates')}>
          Ваши чаты
        </button>
      </div>
    </Box>
  );
};