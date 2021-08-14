import React from 'react';
import './Message.css';

export const Message = (props) => {
    return (<p className="msg-text">{props.msgText}</p>);
}