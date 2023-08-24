import Image from 'next/image'

function Footer() {
  return (
    <footer className="flex items-center justify-between border-t-[1px] bg-gray-50 p-4">
      <span>Team CodeGods 🎉</span>
      <div className="flex items-center gap-4">
        <a className="hover:underline" target="_blank" rel="noreferrer" href="https://github.com/climacot">
          By climacot
        </a>
        <Image width={30} height={30} alt="Github logo" src="/github.svg" />
      </div>
    </footer>
  )
}

export default Footer
