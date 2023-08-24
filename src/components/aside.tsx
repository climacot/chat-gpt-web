'use client'

import { useUser } from '@/hooks/useUser'
import AddChat from './add-chat'
import ListChats from './list-chats'

function Aside() {
  const user = useUser()

  return (
    <aside className="flex flex-col gap-4 overflow-y-scroll border-r-[1px] bg-gray-50 p-4">
      <AddChat />
      {user ? <ListChats uid={user.uid} /> : null}
    </aside>
  )
}

export default Aside
