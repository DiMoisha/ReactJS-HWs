import {CHANGE_PROFILE} from "./actions";

const initialState = {
  profile: {
    showName: false,
    name: 'Alex'
  },
}

export const profileReducer = (state= initialState, action) => {
  switch (action.type) {
    case CHANGE_PROFILE: {
      return  {
        profile: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}