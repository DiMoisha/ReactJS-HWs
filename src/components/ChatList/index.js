import React from 'react';
import PropTypes from 'prop-types';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import { ChatItem } from '../ChatItem';
import { chatesConnect } from "../../connects/chates";

export const ChatListRender = ({ chatItems, classes }) => {
    const chatList = chatItems.map(({ id, title }) =>
            <ChatItem classes={ classes }
                      key={ id }
                      id={ id }
                      to={ `/chates/${id}` }
                      title={ title }
            />);

    return (
        <List
            component="nav"
            aria-labelledby="chat-list-subheader"
            subheader={
                <ListSubheader inset component="div" id="chat-list-subheader">
                    Ваши чаты:
                </ListSubheader>
            }
            className={ classes.chatList }
        >
            { chatList }
        </List>
    );
}

ChatListRender.propTypes = {
    chatItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
    })),
    addChat: PropTypes.func,
    removeChat: PropTypes.func
}

export const ChatList = chatesConnect(ChatListRender);