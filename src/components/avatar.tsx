'use client'

import { useUser } from '@/hooks/useUser'
import Image from 'next/image'

function Avatar() {
  const user = useUser()

  return user ? (
    <Image
      alt={user?.displayName ?? ''}
      className="rounded-full"
      height={30}
      priority
      src={user?.photoURL ?? ''}
      width={30}
    />
  ) : null
}

export default Avatar
