export const getGists = (state) => state.gists.gists || [];
export const getGistsError = (state) => state.gists.error;

export const gistsSelectors = {
  getGists,
  getGistsError,
}