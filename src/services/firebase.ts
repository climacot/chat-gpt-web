import { addDoc, collection, query, where, getDocs, getDoc, doc } from 'firebase/firestore'
import { auth, db, provider } from '@/lib/firebase'
import { collections } from '@/utils/constants'
import { IChat, IFirebaseChat, IFirebaseMessage, IMessage } from '@/utils/models'
import { signInWithPopup } from 'firebase/auth'

export const signIn = () => {
  return signInWithPopup(auth, provider)
}

export const signOut = () => {
  return auth.signOut()
}

export const addChat = async (chat: IFirebaseChat) => {
  return addDoc(collection(db, collections.chats.name), chat)
}

export const getChats = async (uid: string) => {
  const q = query(collection(db, collections.chats.name), where(collections.chats.fields.uid, '==', uid))
  const querySnapshot = await getDocs(q)
  const arr: string[] = []
  querySnapshot.forEach((doc) => arr.push(doc.id))
  return arr
}

export const getChat = async (id: string) => {
  const docRef = doc(db, collections.chats.name, id)
  const docSnap = await getDoc(docRef)
  if (!docSnap.exists()) return null
  const querySnapshot = await getDocs(
    collection(db, collections.chats.name, id, collections.chats.subCollections.messages.name)
  )
  const messages: IMessage[] = []
  querySnapshot.forEach((doc) => messages.push({ model: doc.data().model, user: doc.data().user, id: doc.id }))
  if (docSnap.exists()) return { ...docSnap.data(), messages, id: docSnap.id } as IChat
  return null
}

export const addMessage = async ({ id, message }: { id: string; message: IFirebaseMessage }) => {
  console.log({ id, message })
  return addDoc(collection(db, collections.chats.name, id, collections.chats.subCollections.messages.name), message)
}
