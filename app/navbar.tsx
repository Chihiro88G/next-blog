import Link from "next/link";

export default function NavBar() {
  return (
    <ul className="navbar">
      <li><Link href='/'>Home</Link></li>
      <li><Link href='/blogs'>Blogs</Link></li>
      <li><Link href='/contact'>Contact</Link></li>
    </ul>
  )
}