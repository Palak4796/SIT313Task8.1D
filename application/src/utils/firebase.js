import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { TextEncoder } from 'util'; // Consistent ES module import

const firebaseConfig = {
  apiKey: "",
  authDomain: ""
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const app = initializeApp(firebaseConfig); 

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };


