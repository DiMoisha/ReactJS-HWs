import React from 'react';
import PropTypes from "prop-types";
import { Message } from "../Message";
import { messagesConnect } from "../../connects/messages";

export const MessageListRender = ({messageItems, ...rest}) => {
    const messages = messageItems?.map((message) =>
        <Message classes={rest.classes}
                 key={message.id}
                 id={message.id}
                 dat={message.dat}
                 author={message.author}
                 text={message.text}
        />);

    return (
        <div className={rest.classes.msgList}>
            {messages}
        </div>
    );
}

MessageListRender.propTypes = {
    messageItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        chatId: PropTypes.string,
        dat: PropTypes.string,
        author: PropTypes.string,
        text: PropTypes.string
    }))
 }

export const MessageList = messagesConnect(MessageListRender);