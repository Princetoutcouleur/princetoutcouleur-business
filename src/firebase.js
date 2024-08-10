import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC111xUu15Ft26_e-utpWFj1Ax9TYuUuiY",
  authDomain: "my-blog-db-efbe1.firebaseapp.com",
  projectId: "my-blog-db-efbe1",
  storageBucket: "my-blog-db-efbe1.appspot.com",
  messagingSenderId: "140451059583",
  appId: "1:140451059583:web:aeb18f2bddf9048490ac4a",
  measurementId: "G-404GNET57V"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
