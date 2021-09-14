import { chatesApi } from "../../api";

export const ADD_CHATES = 'ADD_CHATES';
export const ADD_CHAT = 'ADD_CHAT';
export const REMOVE_CHAT = 'REMOVE_CHAT';

export const createAddChates = (chatItems) => ({
  type: ADD_CHATES,
  payload: chatItems,
})

/**
 * @param {object} chatItem
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

export const initChatesTracking = (dispatch) => {
    chatesApi.getList((chatItems) => {
      dispatch(createAddChates(chatItems));
    })

    chatesApi.getAdded((chat) => {
        dispatch(createAddChat(chat));
    })
}