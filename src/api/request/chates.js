import { db } from '../firebase';

export const chatesApi = {
  create: (title) => {
    return db.ref('chates').push({ title })
      .then((ref) => ref.get())
      .then((snapshot) => ({
        id: snapshot.key,
        ...snapshot.val(),
      }))
  },

  delete: (id) => db.ref('chates').child(id).remove(),

  getList: (callback) => {
    db.ref('chates')
      .on('value', (snapshot) => {
        const chatItems = []
        snapshot.forEach((snap) => {
            chatItems.push({
            id: snap.key,
            ...snap.val(),
          })
        })
        callback(chatItems)
      })
  },

  getAdded: (callback) => {
    db.ref('chates')
      .on('child_added', (snapshot) => {
        callback({
          id: snapshot.key,
          ...snapshot.val(),
        })
      })
  },
}