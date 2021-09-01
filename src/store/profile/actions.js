export const CHANGE_PROFILE = 'CHANGE_PROFILE';

/**
 * @param {object} profile
 * @param {boolean} profile.showName
 * @param {string} profile.name
 * */
export const createChangeProfile = (profile) => ({
  type: CHANGE_PROFILE,
  payload: profile,
})