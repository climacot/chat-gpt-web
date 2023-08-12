import { Navbar } from "@/components";
import Link from "next/link";

function Logo() {
  return (
    <Link
      href="/"
      className="bg-white rounded-full w-8 h-8 flex items-center justify-center"
    >
      <span className="text-primary-500 font-bold">IA</span>
    </Link>
  );
}

function Header() {
  return (
    <header className="bg-black/90 flex items-center justify-between p-4">
      <div className="flex gap-2 items-center">
        <Logo />
        <span className="text-white">Chat GPT web</span>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
