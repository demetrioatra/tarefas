import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDvfdWoaSFOvrbXhbhynXdIShynApJp0HM",
    authDomain: "teste-d2ea8.firebaseapp.com",
    projectId: "teste-d2ea8",
    storageBucket: "teste-d2ea8.appspot.com",
    messagingSenderId: "99879836082",
    appId: "1:99879836082:web:c7beef00e53d215546ecab",
    measurementId: "G-68PLZSP7PZ"
}

const app = initializeApp(firebaseConfig)
const banco = getFirestore(app)

export { banco }