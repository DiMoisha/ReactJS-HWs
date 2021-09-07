import { connect } from "react-redux";
import { profileSelectors, createChangeProfile } from "../../store/profile";

const mapStateToProps = (state, ownProps) => ({
  profile: profileSelectors.getProfile(state),
  classes: ownProps.classes,
})

const mapDispatchToProps = (dispatch) => ({
  changeProfile: (profile) => dispatch(createChangeProfile(profile)),
})

export const profileConnect = connect(mapStateToProps, mapDispatchToProps);