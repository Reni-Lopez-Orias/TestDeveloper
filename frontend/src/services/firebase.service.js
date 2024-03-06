import Swal from 'sweetalert2'

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { firebaseApp } from "../firebase/firebase";

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
        console.log(error);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: 'Something went wrong!',
        });
    }
}

export const signInApple = async () => {
    try {
        const provider = new OAuthProvider('apple.com');
        const response = await signInWithPopup(getAuth(firebaseApp), provider);
        return response;
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: 'Something went wrong!',
        });
    }
}