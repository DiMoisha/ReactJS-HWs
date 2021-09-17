import { API_URL_PUBLIC } from "../../api";


export const GET_GISTS_LOADING = "GISTS::GET_GISTS_LOADING";
export const GET_GISTS_REQUEST = "GISTS::GET_GISTS_REQUEST";
export const GET_GISTS_SUCCESS = "GISTS::GET_GISTS_SUCCESS";
export const GET_GISTS_FAILURE = "GISTS::GET_GISTS_FAILURE";

export const getGistsLoading = (isLoading) => ({
  type: GET_GISTS_LOADING,
  payload: isLoading,
});

export const getGistsRequest = () => ({
  type: GET_GISTS_REQUEST,
});

export const getGistsSuccess = (data) => ({
  type: GET_GISTS_SUCCESS,
  payload: data,
});

export const getGistsFailure = (error) => ({
  type: GET_GISTS_FAILURE,
  payload: error,
});

export const createGetAllGists = () => async (dispatch, getState) => {
  dispatch(getGistsRequest());
  dispatch(getGistsSuccess(null));
  dispatch(getGistsFailure(null));
  dispatch(getGistsLoading(true));

  try {
    const response = await fetch(API_URL_PUBLIC);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const result = await response.json();

    dispatch(getGistsSuccess(result));
  } catch (e) {
    console.dir(e);
    dispatch(getGistsFailure(e.message))
  }

  dispatch(getGistsLoading(false))
}