import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChatIcon from '@material-ui/icons/Chat';

export const ChatItem = (props) => {
    return (
        <ListItem className={props.classes.chatItem}>
            <ListItemIcon>
                <ChatIcon />
            </ListItemIcon>
            <ListItemText 
                classes={{
                    primary: props.classes.chatItemText,
                  }}
                primary={props.name} />
        </ListItem>
    )
}

ChatItem.propTypes = {
    name: PropTypes.string
}