import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { ChatList } from '../../components/ChatList';
import { ChatInputForm } from '../../components/ChatInputForm';

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
            <ChatInputForm  />
            <Divider />
        </Drawer>
    );
};
