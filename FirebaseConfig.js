import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyANOkXrwMl3tJ6wtsRmt-7ybh0qNZGogDU",
  authDomain: "my-todo-app-6d9ec.firebaseapp.com",
  projectId: "my-todo-app-6d9ec",
  storageBucket: "my-todo-app-6d9ec.appspot.com",
  messagingSenderId: "338072743901",
  appId: "1:338072743901:web:eb41c34ab92ddc7b571034",
  measurementId: "G-PHRR43WSZ2"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const db = getFirestore(FIREBASE_APP);
const storage = getStorage(FIREBASE_APP);

export { db, storage };
