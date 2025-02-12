const { TextEncoder } = require('util');

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBu-VX3ZZ1O3kDgHr3NKeybFOzzq_7SraI",
  authDomain: "task81dis.firebaseapp.com",
  projectId: "task81dis",
  storageBucket: "task81dis.appspot.com",
  messagingSenderId: "679940073377",
  appId: "1:679940073377:web:812218014aea7ca5af8de0"
};

const app = initializeApp(firebaseConfig); 


const db = getFirestore(app);
const storage = getStorage(app);


export { db, storage };

