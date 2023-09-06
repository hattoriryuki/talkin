import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIz0PDSu38VjBhkgrQeqBBJYyd0W-gJ7o",
  authDomain: "talkin-app-49247.firebaseapp.com",
  projectId: "talkin-app-49247",
  storageBucket: "talkin-app-49247.appspot.com",
  messagingSenderId: "460467298002",
  appId: "1:460467298002:web:094a12a907c40f202f570b",
  measurementId: "G-CV6GFY747F"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
