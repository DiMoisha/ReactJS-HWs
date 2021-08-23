import React, { useState, useRef } from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

export const MessageInputForm = (props) => {
    const [author, setAuthor] = useState('Guest');
    const [text, setText] = useState('');
    const inputRef = useRef();

    const handleChangeAuthor = (event) => {
        setAuthor(event.target.value);
    }

    const handleChangeText = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        let message = { id: Date.now(), dat: new Date().toLocaleString('ru-RU'), author: author, text: text, isBot: false };
        props.onSubmit(message);
        setAuthor('Guest');
        setText('');
        inputRef.current.focus();
        event.preventDefault();
    }

    return (
        <form className={props.classes.msgInputForm} onSubmit={handleSubmit} noValidate autoComplete="off">
            <div className={props.classes.msgInputFormGroupControl}>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="msgInputAuthor" className={props.classes.msgInputFormLbl}>Автор:</InputLabel>
                    <OutlinedInput id="msgInputAuthor" className={props.classes.msgInputFormInput} value={author} onChange={handleChangeAuthor} />
                </FormControl>
            </div>
            <div className={props.classes.msgInputFormGroupControl}>
                <TextField
                    className={props.classes.msgInputFormInput}
                    id="msgInputText"
                    label="Введите сообщение:"
                    multiline
                    minRows={2}
                    maxRows={10}
                    value={text}
                    variant="outlined"
                    autoFocus
                    inputRef={inputRef}
                    onChange={handleChangeText}
                />
            </div>
            <Button type="submit" variant="contained" color="primary">
                Опубликовать
            </Button>
        </form>
    );
}