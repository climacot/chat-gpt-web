'use client'

import { useUser } from '@/hooks/useUser'
import Image from 'next/image'

function Avatar() {
  const user = useUser()

  return user ? (
    <Image
      alt={user?.displayName ?? ''}
      className="rounded-full"
      height={40}
      priority
      src={user?.photoURL ?? ''}
      width={40}
    />
  ) : null
}

export default Avatar
