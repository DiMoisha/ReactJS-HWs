import React, { useState, useRef } from 'react';
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useSimpleForm } from "../../hooks/useSimpleForm";
import { messagesApi } from '../../api';
import { getUserName } from "../../store/profile";

export const MessageInputForm = ({ chatId, classes }) => {
    const { setFieldValue, getFieldValue, resetForm } = useSimpleForm({});
    const [error, setError] = useState("");
    const userName = useSelector(getUserName);
    const inputRef = useRef();

    const handleChangeText = (event) => {
        setFieldValue('text', event.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const message = {
            dat: new Date().toLocaleString('ru-RU'),
            author: userName,
            text: getFieldValue('text')
        };

        try {
            await messagesApi.create(chatId, message);
            resetForm();
            inputRef.current.focus();
        } catch (err) {
            setError(err);
        }
    };

    return (
        <form className={ classes.msgInputForm } onSubmit={ handleSubmit } noValidate autoComplete="off">
            <div className={ classes.msgInputFormGroupControl }>
                <TextField
                    className={ classes.msgInputFormInput }
                    id="msgInputText"
                    label="Введите сообщение:"
                    multiline
                    minRows={ 2 }
                    maxRows={ 10 }
                    value={ getFieldValue('text') }
                    variant="outlined"
                    autoFocus
                    inputRef={ inputRef }
                    onChange={ handleChangeText }
                />
            </div>
            <div>
                { error && <p>{ error.toString() }</p> }
                <Button type="submit" variant="contained" color="primary" style={{ marginBottom: '20px', }}>
                    Отправить
                </Button>
            </div>
        </form>
    );
}

MessageInputForm.propTypes  = {
    chatId: PropTypes.string.isRequired,
}
