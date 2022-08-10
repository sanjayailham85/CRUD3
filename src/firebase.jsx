import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,

  authDomain: 'crud3-73d22.firebaseapp.com',

  projectId: 'crud3-73d22',

  storageBucket: 'crud3-73d22.appspot.com',

  messagingSenderId: '1032151788812',

  appId: '1:1032151788812:web:b5e464e587ee56122fad29',

  measurementId: 'G-2GQMYF9WVV',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const db = getFirestore(app);

export const auth = getAuth();
