import { connect } from "react-redux";
import { gistsSelectors, createGetAllGists } from "../../store/gists";

const mapStateToProps = (state) => ({
  gists: gistsSelectors.getGists(state),
  error: gistsSelectors.getGistsError(state),
  isloading: gistsSelectors.getGistsLoading(state),
})

const mapDispatchToProps = (dispatch) => ({
  getAllGists: () => dispatch(createGetAllGists()),
})

export const gistsConnect = connect(mapStateToProps, mapDispatchToProps);


