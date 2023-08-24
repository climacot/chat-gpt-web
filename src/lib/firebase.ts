// import { getAnalytics } from 'firebase/analytics'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { initializeApp, getApp, getApps } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
}

const app = getApps().length <= 0 ? initializeApp(firebaseConfig) : getApp()
export const db = getFirestore(app)
export const auth = getAuth(app)
// export const analytics = getAnalytics(app)
export const provider = new GoogleAuthProvider()
