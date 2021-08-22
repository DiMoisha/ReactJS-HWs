import { Message } from "../Message";

export const MessageList = (props) => {
    const messages = props.messages.map((message) => <Message key={message.id} dat={message.dat} author={message.author} text={message.text} />);

    return (
        <div className="msg-list">
            {messages}
        </div>
    );
}