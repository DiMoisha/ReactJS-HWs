import { auth } from "../firebase";
import { db } from "../firebase";

export const profileApi = {
    login: (email, password) => auth.signInWithEmailAndPassword(email, password),

    logout: () => auth.signOut(),

    registration: (email, password) => auth.createUserWithEmailAndPassword(email, password),

    initAuth: (onAuth) => auth.onAuthStateChanged(onAuth),

    update: (userId, name) => db.ref(`profile`).child(userId).set({ name }),

    getName: (userId, userNameDef, callback) => {
        const profileRef = db.ref('profile').child(userId);

        profileRef
            .child('name')
            .on('value', (snapshot) => {
                callback(snapshot.val())
            });

        profileRef
            .child('name')
            .get()
            .then((snapshot) => {
                let name = snapshot.val();

                if (name == null || name === '') {
                    name = userNameDef;
                    profileRef.set({ name });
                }
            });
    }
}