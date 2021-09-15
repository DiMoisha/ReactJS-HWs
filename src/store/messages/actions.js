import { messagesApi } from "../../api";

export const ADD_MESSAGES = 'ADD_MESSAGES';
export const ADD_MESSAGE = 'ADD_MESSAGE';

/**
 * @param {object} messageItems
 *
 * */
export const createAddMessages = (messageItems) => ({
  type: ADD_MESSAGES,
  payload: messageItems,
})

/**
 * @param {object} messageItem
 * @param {string} messageItem.chatId
 * @param {array} messageItem.messages
 *
 * */
export const createAddMessage = (messageItem) => ({
  type: ADD_MESSAGE,
  payload: messageItem,
})

export const initMessagesTracking = (dispatch) => {
  messagesApi.getList((messageItems) => {
    dispatch(createAddMessages(messageItems));
  })

  messagesApi.getAdded((message) => {
    dispatch(createAddMessage(message));
  })
}