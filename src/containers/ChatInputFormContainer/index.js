import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { chatesApi } from "../../api";
import { useSimpleForm } from "../../hooks/useSimpleForm";
import { ChatInputForm } from "../../components/ChatInputForm";

export const ChatInputFormContainer = () => {
    const { push } = useHistory();
    const { setFieldValue, getFieldValue, resetForm } = useSimpleForm({});
    const [error, setError] = useState("");

    const handleChangeName = (event) => {
        setFieldValue('title', event.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const title = getFieldValue('title');

        try {
            await chatesApi.create(title);
            resetForm();
            push('/chates');
        } catch (err) {
            setError(err);
        }
    };

    return (
        <ChatInputForm error={ error } handleSubmit={ handleSubmit } getFieldValue={ getFieldValue } handleChangeName={ handleChangeName } />
    );
}