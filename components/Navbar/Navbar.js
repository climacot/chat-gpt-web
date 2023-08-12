import Link from "next/link";

function NavLink({ children, href }) {
  return (
    <Link className="text-white font-medium hover:underline" href={href}>
      {children}
    </Link>
  );
}

const navItems = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Cuenta",
    href: "/account",
  },
];

function Navbar() {
  return (
    <nav className="flex items-center gap-2">
      {navItems.map(({ href, name }) => (
        <NavLink key={href} href={href}>
          {name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
