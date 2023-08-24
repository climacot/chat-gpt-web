'use client'

import { IMessage } from '@/utils/models'
import { useEffect, useRef } from 'react'
import Avatar from './avatar'
import Gpt from './gpt'

function ListMessages({ messages }: { messages: IMessage[] }) {
  const ref = useRef<HTMLUListElement>(null)

  useEffect(() => {
    ref.current?.scrollTo({
      top: ref.current?.scrollHeight,
      behavior: 'instant',
    })
  }, [])

  return (
    <ul ref={ref} className="overflow-y-scroll">
      {messages.map((message) => (
        <li key={message.id}>
          <div className="flex gap-4 border-b-[1px] p-4">
            <Avatar />
            <p>{message.user}</p>
          </div>
          <div className="flex gap-4 border-b-[1px] bg-gray-50 p-4">
            <div>
              <Gpt />
            </div>
            <p>{message.model}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ListMessages
