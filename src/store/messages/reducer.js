import { ADD_MESSAGES, ADD_MESSAGE } from "./index";

const initialState = {
  messageItems: {},
}

// /**
//  * @param {object} state
//  * @param {object} state.messageItems
//  *
//  * @param {object} action
//  * @param {string} action.type
//  * @param {object} action.payload
//  * @param {number} action.payload.id
//  * @param {string} action.payload.chatId
//  * @param {string} action.payload.dat
//  * @param {string} action.payload.author
//  * @param {string} action.payload.text
//  * */
export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGES: {
      return {
        messageItems: action.payload
      }
    }

    case ADD_MESSAGE: {
      return {
        ...state,
        messageItems: {
          ...state.messageItems,
          [action.payload.chatId]: action.payload.messages,
        },
      };
    }

    default: {
      return state;
    }
  }
}




