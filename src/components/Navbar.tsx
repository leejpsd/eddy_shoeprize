import { Nav } from '@/style/navbar.styled'
import Link from 'next/link'

export default function Navbar({ menu, styles }: any) {
  return (
    <Nav {...styles}>
      <ul>
        {menu.map((list: any) => (
          <li>
            <Link href={list.href}>{list.title}</Link>
          </li>
        ))}
      </ul>
    </Nav>
  )
}
