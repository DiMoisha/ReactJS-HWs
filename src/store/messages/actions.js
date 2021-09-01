export const ADD_MESSAGE = 'ADD_MESSAGE';

/**
 * @param {object} message
 * @param {number} message.id
 * @param {string} message.chatId
 * @param {string} message.dat
 * @param {string} message.author
 * @param {string} message.text
 * @param {boolean} message.isBot
 *
 * */
export const createAddMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: message,
})