import React from 'react';
import { Route } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { Chat } from "../Chat";
import { ChatMenu } from '../../components/ChatMenu';

export const Chates = (props) => {
  return (
    <>
      <Route exact path='/chates'>
        <ChatMenu isBtnChatMenu={false} classes={props.classes} chates={props.chates} handleRemove={props.handleRemove} onSubmit={props.onSubmit} />
      </Route>
      <Route path='/chates/:chatId'>
        <ChatMenu isBtnChatMenu={true} classes={props.classes} chates={props.chates} handleRemove={props.handleRemove} onSubmit={props.onSubmit} />
        <Box component="main" className={props.classes.appContent}>
          <Chat classes={props.classes}
            chates={props.chates}
            messages={props.messages}
            setNewMessage={props.setNewMessage} />
        </Box>
      </Route>
    </>
  );
};