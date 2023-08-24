'use client'

import { useUser } from '@/hooks/useUser'
import ChatForm from '@/components/chat-form'

interface Props {
  params: {
    id: string
  }
}

function ChatPage({ params }: Props) {
  const user = useUser()

  if (!user) {
    return (
      <section className="flex items-center justify-center">
        <span>Debes iniciar sesión para iniciar un conversación</span>
      </section>
    )
  }

  return <ChatForm id={params.id} />
}

export default ChatPage
