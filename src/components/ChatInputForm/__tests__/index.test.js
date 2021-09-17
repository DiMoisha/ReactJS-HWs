import React from 'react';
import { render, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ChatInputForm, ChatInputFormTestIds } from "../index";
//import userEvent from '@testing-library/user-event';

describe('ChatInputForm', () => {
    it('вызов метода onSubmit по клику на кнопку', () => {
        const error = 'error test';
        const handleSubmit = jest.fn();
        const getFieldValue = jest.fn();
        const handleChangeName = jest.fn();

        const component = render(
            <ChatInputForm error={ error }
                           handleSubmit={ handleSubmit }
                           getFieldValue={ getFieldValue }
                           handleChangeName={ handleChangeName } />
        );

        const button = component.queryByTestId(ChatInputFormTestIds.submit);

        act(() => {
            fireEvent.click(button);
        })

        expect(handleSubmit).toBeCalled();
    });

    it('ввод данных в поле "Имя чата"', () => {
        const title = 'test-chat'
        const error = 'error test';
        const handleSubmit = jest.fn();
        const getFieldValue = jest.fn();
        const handleChangeName = jest.fn();

        const component = render(
            <ChatInputForm error={ error }
                           handleSubmit={ handleSubmit }
                           getFieldValue={ getFieldValue }
                           handleChangeName={ handleChangeName } />
        );

        const field = component.queryByTestId(ChatInputFormTestIds.titleField).querySelector('input');

        act(() => {
            fireEvent.change(field, {
                target: {
                    value: title,
                },
            })
        })

        expect(field).toHaveValue(title)
    })
})