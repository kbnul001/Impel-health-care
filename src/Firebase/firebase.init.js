import firebaseConfig from "./firebase.config"
import { initializeApp } from "firebase/app";

const authInitializer = () => {
    initializeApp(firebaseConfig);
}

export default authInitializer;