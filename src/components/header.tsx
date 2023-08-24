import { paths } from '@/utils/constants'
import Auth from './auth'
import Avatar from './avatar'
import Link from 'next/link'

function Header() {
  return (
    <header className="flex items-center justify-between border-b-[1px] bg-gray-50 p-4">
      <Link href={paths.home}>
        <h1>Chat PGT web</h1>
      </Link>
      <div className="flex items-center gap-4">
        <Auth />
        <Avatar />
      </div>
    </header>
  )
}

export default Header
