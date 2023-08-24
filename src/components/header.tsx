import { paths } from '@/utils/constants'
import Auth from './auth'
import Avatar from './avatar'
import Link from 'next/link'

function Header() {
  return (
    <header className="bg-gray-50 border-b-[1px] p-4 flex items-center justify-between">
      <Link href={paths.home}>
        <h1>Chat GPT web</h1>
      </Link>
      <div className="flex items-center gap-4">
        <Auth />
        <Avatar />
      </div>
    </header>
  )
}

export default Header
