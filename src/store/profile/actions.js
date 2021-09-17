import { profileApi } from "../../api";

export const SET_NAME = 'SET_NAME';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const createSetName = (name) => ({
  type: SET_NAME,
  payload: name,
})

export const createLoginUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
})

export const createLogoutUser = () => ({
  type: LOGOUT_USER
})

export const initAuthAction = (dispatch) => {
  profileApi.initAuth((user) => {
    if (user) {
      dispatch(createLoginUser(user))
      profileApi.getName(user.uid, user.email, (name) => dispatch(createSetName(name)))
    } else {
      dispatch(createLogoutUser())
    }
  })
}