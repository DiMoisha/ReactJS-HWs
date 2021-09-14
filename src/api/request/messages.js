import { db } from '../firebase';

export const messagesApi = {
    create: (chatId, message) => {
        return db.ref('messages')
            .child(chatId)
            .push(message)
            .then((ref) => ref.get())
            .then((snapshot) => ({
                id: snapshot.key,
                ...snapshot.val(),
            }))
    },

    getList: (chatId, callback) => {
        db.ref('messages')
            .child(chatId)
            .on('value', (snapshot) => {
                const messageItems = []
                snapshot.forEach((snap) => {
                    messageItems.push({
                        id: snap.key,
                        ...snap.val(),
                    })
                })
                callback(messageItems)
            })
    },

    getAdded: (chatId, callback) => {
        db.ref('messages')
            .child(chatId)
            .on('child_added', (snapshot) => {
                callback({
                    id: snapshot.key,
                       ...snapshot.val(),
                    })
                })
    },
}