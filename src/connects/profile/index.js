import { connect } from "react-redux";
import { getUserId, getUserName } from "../../store/profile";

const mapStateToProps = (state, { classes }) => ({
  userId: getUserId(state),
  userName: getUserName(state),
  classes: classes,
})

export const profileConnect = connect(mapStateToProps);