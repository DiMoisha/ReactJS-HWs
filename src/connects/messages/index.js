import { connect } from "react-redux";
import { messagesSelectors, createAddMessage, createAddMessageWithThunk } from "../../store/messages";

const mapStateToProps = (state, {chatId, classes}) => ({
  messageItems: messagesSelectors.getMessage(state, chatId),
  chatId: chatId,
  classes: classes,
})

const mapDispatchToProps = (dispatch) => ({
  addMessage: (message) => dispatch(createAddMessage(message)),
  addMessageWithThunk: (message) => dispatch(createAddMessageWithThunk(message)),
})

export const messagesConnect = connect(mapStateToProps, mapDispatchToProps);