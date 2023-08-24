import { auth } from '@/lib/firebase'
import { createContext, useContext, useEffect, useState } from 'react'
import type { User } from 'firebase/auth'

const UserContext = createContext<User | null>(null)

interface Props {
  children: React.ReactNode
}

export function UserProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user)
    })
  }, [])

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

export const useUser = () => {
  return useContext(UserContext)
}
