import { useState } from "react";

export const useMessageList = (initialMessageList) => {

  const [messageList, setMessageList] = useState(initialMessageList);
  
  const addNewItem = (message) => {
    setMessageList([...messageList, message]);
  }

  return [messageList, setMessageList, addNewItem];
}