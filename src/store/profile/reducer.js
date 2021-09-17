import {LOGIN_USER, LOGOUT_USER, SET_NAME} from "./actions";

const initialState = {
    user: null,
    name: ''
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME: {
      return {
        user: state.user,
        name: action.payload,
      }}

    case LOGIN_USER:
      return  {
        user: action.payload,
        name: state.name,
      }

    case LOGOUT_USER:
      return {
        user: null,
        name: '',
      }

    default:
      return state;
  }
}