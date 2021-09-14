import { messagesApi } from "../../api";

export const ADD_MESSAGES = 'ADD_MESSAGES';
export const ADD_MESSAGE = 'ADD_MESSAGE';

export const createAddMessages = (messageItems) => ({
  type: ADD_MESSAGES,
  payload: messageItems,
})

/**
 * @param {object} messageItem
 * @param {string} messageItem.dat
 * @param {string} messageItem.author
 * @param {string} messageItem.text
 *
 * */
export const createAddMessage = (messageItem) => ({
  type: ADD_MESSAGE,
  payload: messageItem,
})

export const initMessagesTracking = (chatId) => (dispatch) => {
  messagesApi.getList(chatId,(messageItems) => {
    dispatch(createAddMessages(messageItems));
  })

  messagesApi.getAdded(chatId,(message) => {
    dispatch(createAddMessage(message));
  })
}