import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {profileConnect} from "../../connects/profile";

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

export const ProfileRender = ({profile, classes, changeProfile}) => {
    const { goBack, push } = useHistory();
    const locClasses = useStyles();

    return (
        <Box component="main" className={classes.appContent}>
            <Box>
                <Typography component="h1"
                            variant="h3"
                            color="primary"
                            className={locClasses.heading}
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
                    checked={profile.showName}
                    value={profile.showName}
                    onChange={(event) => {
                        changeProfile({showName: !profile.showName, name: profile.name});
                    }}
                />
                <span>Показывать имя:</span>
                <br />
                {profile.showName && <div><b>{profile.name}</b></div>}
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

export const Profile = profileConnect(ProfileRender);