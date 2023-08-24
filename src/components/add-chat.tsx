'use client'

import { addChat } from '@/services/firebase'
import { IFirebaseChat } from '@/utils/models'
import { mutateChats } from '@/utils/mutates'
import { useState } from 'react'
import { useUser } from '@/hooks/useUser'
import Button from './common/button'

function AddChat() {
  const [loading, setLoading] = useState(false)
  const user = useUser()

  const handleClick = async (uid: string) => {
    const chat: IFirebaseChat = {
      name: '',
      uid,
    }

    setLoading(true)
    return addChat(chat)
      .then((docRef) => mutateChats({ uid, chat: docRef.id }))
      .catch(() => {})
      .finally(() => setLoading(false))
  }

  return user ? (
    <Button isLoading={loading} disabled={loading} onClick={() => handleClick(user.uid)}>
      Nuevo chat
    </Button>
  ) : (
    <span>Debes iniciar sesión para crear chats</span>
  )
}

export default AddChat
