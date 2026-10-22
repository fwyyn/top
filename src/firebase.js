import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const cfg = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

// Without a config the app runs in demo mode: everything works, but data
// lives only in the open browser tab.
export const configured = Boolean(cfg.apiKey && cfg.projectId)
const app = configured ? initializeApp(cfg) : null
export const db = app ? getFirestore(app) : null
export const auth = app ? getAuth(app) : null
