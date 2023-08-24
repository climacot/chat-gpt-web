'use client'

import { useUser } from '@/hooks/useUser'
import { signIn, signOut } from '@/services/firebase'
import Button from './common/button'

function Auth() {
  const user = useUser()
  return user ? <Button onClick={signOut}>Cerrar sesión</Button> : <Button onClick={signIn}>Iniciar sesión</Button>
}

export default Auth
