import React from 'react';
import PropTypes from "prop-types";
import { Message } from "../Message";
import { messagesConnect } from "../../connects/messages";

export const MessageListRender = ({ messages, classes }) => {
    return (
        <div className={ classes.msgList }>
            { messages?.map((message) =>
            <Message classes={ classes }
                     key={ message.id }
                     id={ message.id }
                     dat={ message.dat }
                     author={ message.author }
                     text={ message.text }
            />) }
        </div>
    );
}

MessageListRender.propTypes = {
    messageItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        dat: PropTypes.string,
        author: PropTypes.string,
        text: PropTypes.string
    }))
 }

export const MessageList = messagesConnect(MessageListRender);