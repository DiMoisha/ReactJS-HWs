import React from 'react';
import { Provider } from "react-redux";
import { createAppStore } from "../../../store";
import { fireEvent, render, act } from '@testing-library/react';
import { ChatInputFormContainer, ChatInputFormContainerTestIds } from "../index";
import { delay } from "../../../helpers/delay";
import { chatesApi } from "../../../api";

jest.mock('../../../api/endpoints.js')
jest.mock('../../../store/gists/selectors.js')
jest.mock('../../../api/request/chates.js')

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        push: jest.fn(),
    }),
}));

const Wrapper = store => (props) => <Provider {...props} store={store}/>

describe('ChatInputFormContainer', () => {

    it('добавление нового чата в БД', async () => {
        const title = 'test-chat-to-srv';
        const store = createAppStore();

        const component = render(<ChatInputFormContainer/>, {
            wrapper: Wrapper(store)
        });

        const field = component.queryByTestId(ChatInputFormContainerTestIds.titleField).querySelector('input');

        await act(async () => {
            fireEvent.change(field, {
                target: {
                    value: title,
                },
            })
        })

        await act(async () => {
            fireEvent.click(component.getByTestId(ChatInputFormContainerTestIds.submit));
        })

        await delay(1000);

        expect(chatesApi.create).toHaveBeenLastCalledWith(title);
    });
})