import React from 'react';
import { Route } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { Chat } from "../Chat";
import { ChatMenu } from '../../components/ChatMenu';

export const Chates = ({ classes }) => {
  return (
    <>
      <Route exact path='/chates'>
        <ChatMenu isBtnChatMenu={ false } classes={ classes } />
      </Route>
      <Route path='/chates/:chatId'>
        <ChatMenu isBtnChatMenu={ true } classes={ classes } />
        <Box component="main" className={ classes.appContent }>
          <Chat classes={classes} />
        </Box>
      </Route>
    </>
  );
};