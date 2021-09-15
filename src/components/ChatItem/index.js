import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChatIcon from '@material-ui/icons/Chat';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { chatesApi } from "../../api";

export const ChatItem = (props) => {
    return (
        <>
            <ListItem className={ props.classes.chatItem } component={ RouterLink } to={ props.to }>
                <ListItemIcon>
                    <ChatIcon />
                </ListItemIcon>
                <ListItemText
                    classes={{
                        primary: props.classes.chatItemText,
                    }}
                    primary={ props.title } />
                <IconButton
                    title={`Удалить чат "${props.title}"`}
                    onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        chatesApi.delete(props.id);
                    }}
                >
                    <DeleteForeverIcon />
                </IconButton>
            </ListItem>
        </>
    );
}

ChatItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string
}