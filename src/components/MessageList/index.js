import PropTypes from 'prop-types';
import { Message } from "../Message";

export const MessageList = (props) => {
    const messagesList = props.messages.filter((message) => message.chatId === props.chatId);
    const messages = messagesList.map((message) => <Message classes={props.classes} key={message.id} id={message.id} chatId={message.chatId} dat={message.dat} author={message.author} text={message.text} />);

    return (
        <div className={props.classes.msgList}>
            {messages}
        </div>
    );
}

MessageList.propTypes = {
    id: PropTypes.number,
    chatId: PropTypes.string,
    dat: PropTypes.string,
    author: PropTypes.string,
    text: PropTypes.string
}