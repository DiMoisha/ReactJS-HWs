import { connect } from "react-redux";
import { gistsSelectors, createGetAllGists } from "../../store/gists";

const mapStateToProps = (state, { classes }) => ({
  gists: gistsSelectors.getGists(state),
  error: gistsSelectors.getGistsError(state),
  isloading: gistsSelectors.getGistsLoading(state),
  classes: classes,
})

const mapDispatchToProps = (dispatch) => ({
  getAllGists: () => dispatch(createGetAllGists()),
})

export const gistsConnect = connect(mapStateToProps, mapDispatchToProps);


