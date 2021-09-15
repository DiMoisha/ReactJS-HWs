import { ADD_CHATES, ADD_CHAT, REMOVE_CHAT } from "./index";

const initialState = {
  chatItems: []
}

const filterById = (chatId) => ({ id }) => chatId !== id;

export const chatReducer = (state= initialState, action) => {
  switch (action.type) {
    case ADD_CHATES: {
      return {
        chatItems: action.payload,
      }
    }

    case ADD_CHAT: {
      return  {
        chatItems: [
          ...state.chatItems,
          action.payload,
        ],
      }
    }

    case REMOVE_CHAT: {
      return  {
        chatItems: state.chatItems.filter(filterById(action.payload)),
      }
    }

    default: {
      return state;
    }
  }
}