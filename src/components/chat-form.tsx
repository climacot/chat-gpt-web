'use client'

import AiChat from './ai-chat'
import useChat from '@/hooks/useChat'

interface Props {
  id: string
}

function ChatForm({ id }: Props) {
  const { chat, error, isLoading } = useChat(id)

  if (isLoading) {
    return (
      <section className="flex justify-center items-center">
        <span>Chat is loading...</span>
      </section>
    )
  }

  if (error) {
    return (
      <section className="flex justify-center items-center">
        <span>{error.message}</span>
      </section>
    )
  }

  if (!chat) {
    return (
      <section className="flex justify-center items-center">
        <span>The chat does not exist</span>
      </section>
    )
  }

  return (
    <div className="grid grid-rows-chat overflow-hidden">
      <AiChat id={id} messages={chat.messages} />
    </div>
  )
}

export default ChatForm
