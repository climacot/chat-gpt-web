'use client'

import { useUser } from '@/hooks/useUser'
import AddChat from './add-chat'
import ListChats from './list-chats'

function Aside() {
  const user = useUser()

  return (
    <aside className="bg-gray-50 border-r-[1px] p-4 flex flex-col gap-4 overflow-y-scroll">
      <AddChat />
      {user ? <ListChats uid={user.uid} /> : null}
    </aside>
  )
}

export default Aside
