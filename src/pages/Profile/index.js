import React, { useCallback, useState } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { profileStore } from "../../store/index";
import { toggleShowName } from "../../store/profile/actions";

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

  const [dummy, setDummy] = useState();
  const { showName, name } = profileStore.getState();
  const dispatch = profileStore.dispatch;

  const setShowName = useCallback(() => {
    dispatch(toggleShowName);
    setDummy({});
  }, [dispatch]);

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
        <br />
        <br />
        <input
          type="checkbox"
          checked={showName}
          value={showName}
          onChange={setShowName}
        />
        <span>Показывать имя:</span>
        {showName && <div><b>{name}</b></div>}
        <br />
        <br />
      </div>
      <Divider />
      <br />
      <br />
      <div>
        <button onClick={goBack}>
          Назад
        </button>
        <br />
        <br />
        <button onClick={() => push('/chates')}>
          Ваши чаты
        </button>
      </div>
    </Box>
  );
};



