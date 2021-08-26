import React from 'react';
import { useParams, Redirect } from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { useDidUpdate } from '../../hooks/useDidUpdate'
import { MessageList } from '../../components/MessageList';
import { MessageInputForm } from '../../components/MessageInputForm';

export const Chat = ({ chates, classes, messages, setNewMessage }) => {
  const { chatId } = useParams();

  const currentChat = chates?.find(({ id }) => id === chatId);

  useDidUpdate(() => {
    let i = messages.length - 1;
    if (i >= 0 && !messages[i].isBot) {
      let message = { id: Date.now(), chatId: chatId, dat: new Date().toLocaleString('ru-RU'), author: 'bot', text: `${messages[i].author}, ваше сообщение опубликовано!`, isBot: true };
      const id = window.setTimeout(() => {
        setNewMessage(message);
      }, 1500);

      return () => clearInterval(id);
    }
  }, [messages])

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
          {currentChat.name}
        </Typography>
        <MessageList classes={classes} chatId={chatId} messages={messages} />
        <Divider />
        <MessageInputForm classes={classes} chatId={chatId} onSubmit={setNewMessage} />
      </>
    );
  }
};