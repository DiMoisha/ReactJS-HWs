export const ADD_CHAT = 'ADD_CHAT';
export const REMOVE_CHAT = 'REMOVE_CHAT';

/**
 * @param {object} chatItem
 * @param {string} chatItem.id
 * @param {string} chatItem.title
 * */
export const createAddChat = (chatItem) => ({
  type: ADD_CHAT,
  payload: chatItem,
})

export const createRemoveChat = (chatId) => ({
  type: REMOVE_CHAT,
  payload: chatId,
})