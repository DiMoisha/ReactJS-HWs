import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { ChatList } from '../../components/ChatList';
import { ChatInputFormContainer } from '../../containers/ChatInputFormContainer';

export const ChatMenu = ({ isBtnChatMenu, classes }) => {
    return (
        <Drawer
            variant="permanent"
            className={clsx(!isBtnChatMenu ? classes.chatMenu : classes.btnChatMenu)}
            classes={{ paper: classes.chatMenuPaper }}
        >
            <Divider />
            <ChatList classes={classes} />
            <Divider />
            <ChatInputFormContainer />
            <Divider />
        </Drawer>
    );
};
