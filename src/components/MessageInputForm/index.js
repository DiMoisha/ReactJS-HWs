import React, { useState } from 'react';
import './MessageInputForm.css';

export const MessageInputForm = ({ onSubmit }) => {
    const [author, setAuthor] = useState('Guest');
    const [text, setText] = useState('');

    const handleChangeAuthor = (event) => {
        setAuthor(event.target.value);
    }

    const handleChangeText = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        let message = { id: Date.now(), dat: new Date().toLocaleString('ru-RU'), author: author, text: text, isBot: false };
        onSubmit(message);
        setAuthor('Guest');
        setText('');
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className="msg-form">
            <div className="msg-form__groupcontrol">
                <label className="msg-form__lbl">Автор:<br />
                    <input type="text" value={author} onChange={handleChangeAuthor} className="msg-form__input" />
                </label>
            </div>
            <div className="msg-form__groupcontrol">
                <label className="msg-form__lbl">Введите сообщение:<br />
                    <textarea value={text} onChange={handleChangeText} rows="4" className="msg-form__input" />
                </label>
            </div>
            <button type="submit" className="msg-form__btn">Отправить</button>
        </form>
    );
}