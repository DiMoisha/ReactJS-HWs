import {ADD_MESSAGE} from "./actions";

const initialState = {
  messageItems: {},
  lastMessageItem: {},
}

/**
 * @param {object} state
 * @param {object} state.messageItems
 * @param {object} state.lastMessageItem
 *
 * @param {object} action
 * @param {string} action.type
 * @param {object} action.payload
 * @param {number} action.payload.id
 * @param {string} action.payload.chatId
 * @param {string} action.payload.dat
 * @param {string} action.payload.author
 * @param {string} action.payload.text
 * @param {boolean} action.payload.isBot
 * */
export const messageReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_MESSAGE: {
      const {chatId} = action.payload;

      if (state.messageItems.hasOwnProperty(chatId)) {
        state.messageItems[chatId] = [
          ...state.messageItems[chatId],
          action.payload,
        ]
      } else {
        state.messageItems[chatId] = [action.payload];
      }

      state.lastMessageItem = action.payload;

      return  {
        messageItems: {
          ...state.messageItems,
        },
        lastMessageItem: state.lastMessageItem
      }
    }
    default: {
      return state;
    }
  }
}