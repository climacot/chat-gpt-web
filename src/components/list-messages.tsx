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
          <div className="flex p-4 gap-4 border-b-[1px]">
            <Avatar />
            <p>{message.user}</p>
          </div>
          <div className="bg-gray-50 flex p-4 gap-4 border-b-[1px]">
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
