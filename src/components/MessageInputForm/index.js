import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { useSimpleForm } from "../../hooks/useSimpleForm";
import { store } from "../../store";
import { messagesConnect } from "../../connects/messages";
import { useDidUpdate } from '../../hooks/useDidUpdate';

export const MessageInputFormRender = ({ chatId, classes, addMessage }) => {
    const {setFieldValue, getFieldValue, resetForm} = useSimpleForm({});

    const showName = store.getState().profile.profile.showName;
    const [userName, setUserName] = useState(store.getState().profile.profile.name);

    const inputRef = useRef();

    const handleChangeAuthor = (event) => {
        setUserName(event.target.value);
    }

    const handleChangeText = (event) => {
        setFieldValue('text', event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let message = { id: Date.now(),
            chatId: chatId,
            dat: new Date().toLocaleString('ru-RU'),
            author: userName,
            text: getFieldValue('text'),
            isBot: false };

        addMessage(message);
        resetForm();
        inputRef.current.focus();
    }

    useDidUpdate(() => {
        const lastItem = store.getState().messages.lastMessageItem;

        if (lastItem && lastItem.chatId === chatId && !lastItem.isBot) {
            const botRequest = {
                id: Date.now(),
                chatId: chatId,
                dat: new Date().toLocaleString('ru-RU'),
                author: 'bot',
                text: `${lastItem.author}, ваше сообщение опубликовано!`,
                isBot: true
            };

            const id = window.setTimeout(() => {
                addMessage(botRequest);
            }, 1500);

            return () => clearInterval(id);
        }
    }, [store.getState().messages.lastMessageItem])

    return (
        <form className={classes.msgInputForm} onSubmit={handleSubmit} noValidate autoComplete="off">
            {showName &&
                <div className={classes.msgInputFormGroupControl}>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="msgInputAuthor" className={classes.msgInputFormLbl}>Автор:</InputLabel>
                        <OutlinedInput id="msgInputAuthor" className={classes.msgInputFormInput} value={userName} onChange={handleChangeAuthor} />
                    </FormControl>
                </div>
            }
            <div className={classes.msgInputFormGroupControl}>
                <TextField
                    className={classes.msgInputFormInput}
                    id="msgInputText"
                    label="Введите сообщение:"
                    multiline
                    minRows={2}
                    maxRows={10}
                    value={getFieldValue('text')}
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

MessageInputFormRender.propTypes  = {
    chatId: PropTypes.string.isRequired,
}

export const MessageInputForm = messagesConnect(MessageInputFormRender);