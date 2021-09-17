import { connect } from "react-redux";
import { getChates } from "../../store/chates";

const mapStateToProps = (state, { classes }) => ({
  chatItems: getChates(state),
  classes: classes,
})

export const chatesConnect = connect(mapStateToProps);