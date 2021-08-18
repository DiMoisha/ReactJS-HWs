import './Message.css';

export const Message = (props) => {
    return (
        <div className="msg-item">
            <p className="msg-item__top">
                <span className="msg-item__dat">{props.dat}</span>
                <span className="msg-item__author">{props.author}</span>
            </p>
            <p className="msg-item__text">
                {props.text}
            </p>
        </div>
    );
}