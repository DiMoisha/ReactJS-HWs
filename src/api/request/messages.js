import { db } from '../firebase';

export const messagesApi = {
    create: (chatId, message) => {
        return db.ref('messages')
            .child(chatId)
            .push(message)
            .then((ref) => ref.get())
            .then((snapshot) => {
                const messages = [];
                const snapEntries = Object.entries(snapshot.val());

                snapEntries.forEach(([key, value]) => {
                    messages.push({
                        id: key,
                        ...value,
                    });
                });

                return({
                    chatId: snapshot.key,
                    messages: messages,
                })
            })
    },

    getList: (callback) => {
        db.ref('messages')
            .on('value', (snapshot) => {
                let messageItems = {}

                snapshot.forEach((snap) => {
                    const chatId = snap.key;
                    const messages = [];

                    const snapEntries = Object.entries(snap.val());

                    snapEntries.forEach(([key, value]) => {
                        messages.push({
                            id: key,
                            ...value,
                        });
                    });

                    messageItems = {
                    ...messageItems,
                      [chatId]: messages,
                    }
                })
                callback(messageItems)
            })
    },

    getAdded: (callback) => {
        db.ref('messages')
            .on('child_added', (snapshot) => {
                const messages = [];
                const snapEntries = Object.entries(snapshot.val());

                snapEntries.forEach(([key, value]) => {
                    messages.push({
                        id: key,
                        ...value,
                    });
                });

                callback({
                    chatId: snapshot.key,
                    messages: messages,
                })
            })
    },
}