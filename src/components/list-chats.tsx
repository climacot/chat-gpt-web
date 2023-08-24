'use client'

import { paths } from '@/utils/constants'
import Link from 'next/link'
import useChats from '@/hooks/useChats'

function ListChats({ uid }: { uid: string }) {
  const { chats } = useChats(uid)

  return (
    <ul className="flex flex-col gap-2">
      {chats?.map((chat) => (
        <li key={chat} className="flex">
          <Link href={paths.chat(chat)} className="flex-1 rounded-md border px-2 py-1 hover:border-green-600">
            {chat}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default ListChats
