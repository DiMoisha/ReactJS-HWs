export const getChates = (state) => state.chates.chatItems || [];
export const getChatById = (id) => (state) => state.chates.chatItems.find((chat) => chat.id === id);