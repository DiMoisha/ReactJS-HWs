import React from 'react';
import { useSimpleForm } from "../../hooks/useSimpleForm";
import { chatesConnect } from "../../connects/chates";
import { ChatInputForm } from "../../components/ChatInputForm";

export const ChatInputFormContainerRender = ({ addChat }) => {
    const {setFieldValue, getFieldValue, resetForm} = useSimpleForm({});

    const handleChangeName = (event) => {
        setFieldValue('title', event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const chat = {
            id: Date.now().toString(),
            title: getFieldValue('title')
        }
        addChat(chat);

        resetForm();
    }

    return (
        <ChatInputForm handleSubmit={handleSubmit} getFieldValue={getFieldValue} handleChangeName={handleChangeName} />
    );
}

export const ChatInputFormContainer = chatesConnect(ChatInputFormContainerRender);