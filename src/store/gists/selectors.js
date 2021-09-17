export const getGists = (state) => state.gists.gists || [];
export const getGistsError = (state) => state.gists.error;
export const getGistsLoading = (state) => state.gists.isLoading || false;

export const gistsSelectors = {
  getGists,
  getGistsError,
  getGistsLoading,
}