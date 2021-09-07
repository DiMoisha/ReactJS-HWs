import {ADD_CHAT, REMOVE_CHAT} from "./index";

const initialState = {
  chatItems: [
    { id: "chat0", title: "GreekBrains группа" },
    { id: "chat1", title: "Работа-коллеги" },
    { id: "chat2", title: "Валентин Петрович" },
    { id: "chat3", title: "Людмила" },
    { id: "chat4", title: "Евгений-автослесарь" },
    { id: "chat5", title: "Окна Rehau на Василеостровской" },
    { id: "chat6", title: "Одноклассники шк. № 28" },
    { id: "chat7", title: "Дима Баринов" },
  ],
}

const filterById = (chatId) => ({id}) => chatId !== id;

export const chatReducer = (state= initialState, action) => {
  switch (action.type) {
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