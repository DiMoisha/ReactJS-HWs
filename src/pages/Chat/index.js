import React from 'react';
import { useParams, Redirect } from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { MessageList } from '../../components/MessageList';
import { MessageInputForm } from '../../components/MessageInputForm';
import { store } from "../../store";

export const Chat = ({ classes }) => {
  const { chatId } = useParams();
  const currentChat = store.getState().chates.chatItems?.find(({ id }) => id === chatId);

  if (!currentChat) {
    return <Redirect to="/chates" />
  } else {
    return (
      <>
        <Typography component="h1"
          variant="h6"
          color="inherit"
          noWrap
        >
          {currentChat.title}
        </Typography>
        <MessageList classes={classes} chatId={chatId} />
        <Divider />
        <MessageInputForm classes={classes} chatId={chatId} />
      </>
    );
  }
};