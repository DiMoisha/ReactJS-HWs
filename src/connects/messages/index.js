import { connect } from "react-redux";
import { getMessages } from "../../store/messages";

const mapStateToProps = (state, ownProps) => ({
  messages: getMessages(ownProps.chatId)(state),
  classes: ownProps.classes,
})

export const messagesConnect = connect(mapStateToProps);