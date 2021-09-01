const getMessages = (state) => state.messages.messageItems || {};

const getMessage = (state, chatId) => getMessages(state)[chatId];

export const messagesSelectors = {
  getMessages,
  getMessage
}