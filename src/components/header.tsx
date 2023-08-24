import { paths } from '@/utils/constants'
import Auth from './auth'
import Avatar from './avatar'
import Link from 'next/link'

function Header() {
  return (
    <header className="flex items-center justify-between border-b-[1px] bg-gray-50 px-4 py-3">
      <Link href={paths.home} className="rounded-md px-2 py-1 text-lg font-medium [&>span]:hover:bg-green-700">
        Chat
        <span className="mx-1 rounded-md bg-green-600 px-1 text-white">PGT</span>
        web
      </Link>
      <div className="flex items-center gap-4">
        <Auth />
        <Avatar />
      </div>
    </header>
  )
}

export default Header
