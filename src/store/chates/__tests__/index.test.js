import { initialState, chatReducer } from "../reducer";
import { createChat} from "../../../entities/Chat";
import { createAddChat, createRemoveChat } from "../actions";

describe('Тест редюсера - chatReducer', () => {

    it('вызов редьюсера без экшена вернет initialState', () => {
        const result = chatReducer();

        expect(result).toEqual(initialState)
    })

    it('новый чат добавляется в конец списка', () => {
        const result = chatReducer(undefined, createAddChat(createChat('id-test','test-chat')));

        expect(result).toEqual({
            chatItems: [
                {
                    id: 'id-test',
                    title: 'test-chat',
                }
            ]
        })
    })

    it('чат удаляется из списка',() => {
        const chates = Array.from({
            length: 5,
        }).map((_, index) => createChat(`id-${index + 1}`, `chat-${index + 1}`))

        const chatesResult = Array.from({
            length: 4,
        }).map((_, index) => createChat(`id-${index + 1}`, `chat-${index + 1}`))

        const result = chatReducer({ chatItems: chates }, createRemoveChat('id-5'));

        expect(result).toEqual({
            chatItems: chatesResult
        })
    })

})