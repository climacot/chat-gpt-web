'use client'

import { useUser } from '@/hooks/useUser'
import { signIn, signOut } from '@/services/firebase'

function Auth() {
  const user = useUser()

  return user ? <button onClick={signOut}>Cerrar sesión</button> : <button onClick={signIn}>Iniciar sesión</button>
}

export default Auth
