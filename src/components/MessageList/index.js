import PropTypes from 'prop-types';
import { Message } from "../Message";

export const MessageList = (props) => {
    const messages = props.messages.map((message) => <Message classes={props.classes} key={message.id} id={message.id} dat={message.dat} author={message.author} text={message.text} />);

    return (
        <div className={props.classes.msgList}>
            {messages}
        </div>
    );
}

MessageList.propTypes = {
    id: PropTypes.number,
    dat: PropTypes.string,
    author: PropTypes.string,
    text: PropTypes.string
}