import React from 'react';
import PropTypes from 'prop-types';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import { ChatItem } from '../ChatItem';

export const ChatList = (props) => {
    const chates = props.chates.map((chat) => <ChatItem classes={props.classes} key={chat.id} name={chat.name} />);

    return (
        <List 
            component="nav"
            aria-labelledby="chat-list-subheader"
            subheader={
            <ListSubheader inset component="div" id="chat-list-subheader">
                Ваши чаты:
            </ListSubheader>
            }
            className={props.classes.chatList}
        >
            {chates}
        </List>
    );
}

ChatList.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string
}