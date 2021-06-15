import { useState } from 'react'

import Link from 'next/link'
import styles from './Header.module.css'

const Header = () => {

  const [menuBurgerActive, setMenuBurgerActive] = useState(false)

  const handleBurger = () => {
    setMenuBurgerActive(!menuBurgerActive)
  }

  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <img className={styles.linkLogoHeader} src="/images/logowcruz.png" />
        </Link>
        <nav className={styles.nav}>
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
            <li>
              <Link href="#">
                <a>Contato</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Localização</a>
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.hamburger} onClick={handleBurger}>
          <div className={`${styles.div1} ${menuBurgerActive && styles.active}`}></div>
          <div className={`${styles.div2} ${menuBurgerActive && styles.active}`}></div>
          <div className={`${styles.div3} ${menuBurgerActive && styles.active}`}></div>
        </div>
        
        <div className={`${styles.menuMobile} ${menuBurgerActive && styles.active}`}>
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
              <li>
              <Link href="#">
                <a>Contato</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Localização</a>
              </Link>
            </li>
            </ul>
        </div>
      </header>
    </>
  )
}

export default Header