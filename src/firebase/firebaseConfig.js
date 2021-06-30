import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP__API_KEY,
  authDomain: process.env.REACT_APP__AUTH_DOMAIN,
  projectId: process.env.REACT_APP__PROJECT_ID,
  storageBucket: process.env.REACT_APP__STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP__MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP__APP_ID,
  measurementId: process.env.REACT_APP__MEASUREMENT_ID,
}

firebase.initializeApp(firebaseConfig)

export const cloudFirestore = firebase.firestore()
