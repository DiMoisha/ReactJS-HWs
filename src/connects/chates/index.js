import { connect } from "react-redux";
import { chatesSelectors, createAddChat, createRemoveChat } from "../../store/chates";

const mapStateToProps = (state, {classes}) => ({
  chatItems: chatesSelectors.getChates(state),
  classes: classes,
})

const mapDispatchToProps = (dispatch) => ({
  addChat(chatItem) {
    return dispatch(createAddChat(chatItem));
  },
  removeChat(chatId) {
    return dispatch(createRemoveChat(chatId));
  }
})

export const chatesConnect = connect(mapStateToProps, mapDispatchToProps);