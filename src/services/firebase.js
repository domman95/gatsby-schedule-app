import app from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: process.env.GATSBY_API_KEY,
    authDomain: process.env.GATSBY_AUTH_DOMAIN,
    databaseURL: process.env.GATSBY_DATABASE_URL,
    projectId: process.env.GATSBY_PROJECT_ID,
    storageBucket: process.env.GATSBY_STORAGE_BUCKET,
    messagingSenderId: process.env.GATSBY_MESSAGING_SENDER_ID,
    appId: process.env.GATSBY_APP_ID
  };

const Firebase = () => {
    app.initializeApp(firebaseConfig)

    const db = app.firestore();

    return db;
}
  
export default Firebase

