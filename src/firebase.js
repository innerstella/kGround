import * as firebase from "firebase/app";
import * as auth from "firebase/auth";
import "firebase/firestore";

import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useRecoilState } from "recoil";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
export const firbaseInstance = firebase;
export const fbase = firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const authService = auth.getAuth(fbase);

// google auth
export const signInGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const authentication = auth.getAuth();

    auth.signInWithRedirect(authentication, provider);

    await auth.setPersistence(authentication, auth.browserSessionPersistence);

    const result = await auth.getRedirectResult(authentication);
    return result; // 이 부분은 비동기 작업이 완료된 후에 실행됩니다.
  } catch (error) {
    console.error("Error during Google sign-in:", error);
    throw error;
  }
};
// return auth
//   .setPersistence(authService, auth.browserSessionPersistence)
//   .then(() => {
//     return auth
//       .signInWithPopup(authService, provider)
//       .then((res) => {
//         return res;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });

// db
export const dbService = getFirestore(fbase);
