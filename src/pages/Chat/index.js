import React, { useEffect } from 'react';
import { useParams, Redirect } from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { MessageList } from '../../components/MessageList';
import { MessageInputForm } from '../../components/MessageInputForm';
import { useSelector } from "react-redux";
import { getChatById } from "../../store/chates";

export const Chat = ({ classes }) => {
  const { chatId } = useParams();
  const currentChat = useSelector(getChatById(chatId));

  if (!currentChat) {
    return (<Redirect to="/chates" />);
  } else {
    return (
      <>
        <Typography component="h1"
          variant="h6"
          color="inherit"
          noWrap
        >
          { currentChat.title }
        </Typography>
        <MessageList chatId={ chatId } classes={ classes } />
        <Divider />
        <MessageInputForm chatId={ chatId } classes={ classes } />
      </>
    );
  }
};