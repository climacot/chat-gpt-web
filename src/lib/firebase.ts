// import { getAnalytics } from 'firebase/analytics'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { initializeApp, getApp, getApps } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyA4dWw4zyUylzxu0c8WZN9qUBKY-UI3VKc',
  appId: '1:678296368060:web:7110a063e52b6a0d0771b9',
  authDomain: 'chat-gpt-web-f24e5.firebaseapp.com',
  measurementId: 'G-ZQ9KL1D00K',
  messagingSenderId: '678296368060',
  projectId: 'chat-gpt-web-f24e5',
  storageBucket: 'chat-gpt-web-f24e5.appspot.com',
}

const app = getApps().length <= 0 ? initializeApp(firebaseConfig) : getApp()
export const db = getFirestore(app)
export const auth = getAuth(app)
// export const analytics = getAnalytics(app)
export const provider = new GoogleAuthProvider()
