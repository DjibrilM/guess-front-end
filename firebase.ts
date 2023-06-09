import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect, signInWithPopup } from "firebase/auth";




const firebaseConfig = {
    apiKey: "AIzaSyBAQOHRDm-B8DRQOOb4m6F6pRgeiTLQHOo",
    authDomain: "guess-84146.firebaseapp.com",
    projectId: "guess-84146",
    storageBucket: "guess-84146.appspot.com",
    messagingSenderId: "441754777456",
    appId: "1:441754777456:web:3438cd93def98faefd81b5",
    measurementId: "G-LMCDHP2GQJ"
};


const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
auth.languageCode = 'it';

export const signinWithPopup = (loginResult: Function, loginError: Function) => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential: any = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            loginResult(user);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            loginError(error);
            // ...
        });

}




