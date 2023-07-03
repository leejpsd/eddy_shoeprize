import Link from 'next/link'
import styles from './header.module.scss'
import Navbar from './Navbar'

const menu = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/today',
    title: '투데이',
  },
  {
    href: '/culture',
    title: '컬처',
  },
  {
    href: '/discover',
    title: '둘러보기',
  },
  {
    href: '/shoeprize',
    title: '이벤트',
  },
]

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link href="/" aria-label="Home">
          로고
        </Link>
        <nav>
          <ul>
            {menu.map(({ href, title }) => (
              <li key={href}>
                <Link href={href} aria-label={title}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.right}>
        <div>검색!</div>
        <div>아바타~</div>
      </div>
    </header>
  )
}
