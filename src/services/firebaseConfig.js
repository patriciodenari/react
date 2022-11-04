import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD_XYrcW0vfxaCMLS-VzM4gWGtUKZbFyqM",
  authDomain: "atenti2.firebaseapp.com",
  projectId: "atenti2",
  storageBucket: "atenti2.appspot.com",
  messagingSenderId: "797148465970",
  appId: "1:797148465970:web:391ce04e23d828ee70e52b"
};


const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app);
export default dataBase;