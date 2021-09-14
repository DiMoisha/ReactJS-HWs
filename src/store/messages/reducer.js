import { ADD_MESSAGES, ADD_MESSAGE } from "./index";

const initialState = {
  messageItems: [],
}

/**
 * @param {object} state
 * @param {object} state.messageItems
 *
 * @param {object} action
 * @param {string} action.type
 * @param {object} action.payload
 * @param {number} action.payload.id
 * @param {string} action.payload.chatId
 * @param {string} action.payload.dat
 * @param {string} action.payload.author
 * @param {string} action.payload.text
 * */
export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGES: {
      let messages = [];

      if (action.payload) {
        messages = [...action.payload];
      }

      return  { messageItems: messages,}
    }

    case ADD_MESSAGE: {
      const messages = [...state.messageItems];
      if (action.payload) {
        messages.push(action.payload);
      }

      return  { messageItems: messages,}
    }

    default: {
      return state;
    }
  }
}




