import { connect } from "react-redux";
import { getMessages } from "../../store/messages";

const mapStateToProps = (state, ownProps) => ({
  messageItems: getMessages(state),
  chatId: ownProps.chatId,
  classes: ownProps.classes,
})

export const messagesConnect = connect(mapStateToProps);