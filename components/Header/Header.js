import Link from 'next/link'
import styles from './Header.module.css'

const Header = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
        <Link href="/">
          <img className={styles.linkLogoHeader} src="/images/logowcruz.png" />
        </Link>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>Sobre nós</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Produtos</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </>
  )
}

export default Header