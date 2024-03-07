
//firebase
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { firebaseApp } from "../firebase/firebase";

//service
import { errorNotificacion } from './notifications.service';

const userAuth = {
    token: '',
    userName: '',
    email: ''
}

export const signInGoogle = async () => {
    try {

        const auth = getAuth(firebaseApp);
        const provider = new GoogleAuthProvider();
        const { user } = await signInWithPopup(auth, provider);

        if (user) {
            userAuth.token = user.accessToken;
            userAuth.userName = user.displayName
            userAuth.email = user.email;
            sessionStorage.setItem('user', JSON.stringify(userAuth));

            return userAuth;
        }

    } catch (error) {

        errorNotificacion();

    }
}

export const signInApple = async () => {
    try {

        const provider = new OAuthProvider('apple.com');
        const response = await signInWithPopup(getAuth(firebaseApp), provider);

        return response;

    } catch (error) {

        errorNotificacion();

    }
}