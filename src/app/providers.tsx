'use client'

import { UserProvider } from '@/hooks/useUser'

interface Props {
  children: React.ReactNode
}

function Providers({ children }: Props) {
  return <UserProvider>{children}</UserProvider>
}

export default Providers
