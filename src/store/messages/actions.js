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
export const createAddMessageWithThunk = (message) => (dispatch, getState) => {
  dispatch(createAddMessage(message));

  if (!message.isBot) {
    const botRequest = {
      id: Date.now(),
      chatId: message.chatId,
      dat: new Date().toLocaleString('ru-RU'),
      author: 'bot',
      text: `${message.author}, ваше сообщение опубликовано!`,
      isBot: true
    };
    setTimeout(() => dispatch(createAddMessage(botRequest)), 1500);
  }
}




