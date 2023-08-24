'use client'

import { paths } from '@/utils/constants'
import Link from 'next/link'
import useChats from '@/hooks/useChats'

function ListChats({ uid }: { uid: string }) {
  const { chats } = useChats(uid)

  return (
    <ul>
      {chats?.map((chat) => (
        <li key={chat}>
          <Link href={paths.chat(chat)}>{chat}</Link>
        </li>
      ))}
    </ul>
  )
}

export default ListChats
