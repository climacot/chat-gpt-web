'use client'

import { addChat } from '@/services/firebase'
import { IFirebaseChat } from '@/utils/models'
import { mutateChats } from '@/utils/mutates'
import { useUser } from '@/hooks/useUser'

function AddChat() {
  const user = useUser()

  const handleClick = async (uid: string) => {
    const chat: IFirebaseChat = {
      name: '',
      uid,
    }

    return addChat(chat)
      .then((docRef) => mutateChats({ uid, chat: docRef.id }))
      .catch((error) => {
        console.log(error)
      })
  }

  return user ? (
    <button onClick={() => handleClick(user.uid)}>Nuevo chat</button>
  ) : (
    <span>Debes iniciar sesión para crear chats</span>
  )
}

export default AddChat
