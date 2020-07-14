import React from 'react'
<<<<<<< HEAD
import { Link } from 'gatsby'
=======
import { Link, graphql, useStaticQuery } from 'gatsby'
>>>>>>> c1a2efbe59c22d124b013fe1dc6f68f04c8886d9

//import './header.module.scss'
import headerStyles from './header.module.scss'

const Header = () => {
<<<<<<< HEAD
=======

  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata {
          title
        }
      }
    }
  `)

>>>>>>> c1a2efbe59c22d124b013fe1dc6f68f04c8886d9
  return (
    <header className={headerStyles.header}>
        <h1>
          <Link className={headerStyles.title}to="/">
<<<<<<< HEAD
            Emeka Eluwa
=======
            {data.site.siteMetadata.title}
>>>>>>> c1a2efbe59c22d124b013fe1dc6f68f04c8886d9
          </Link>
        </h1>
        <nav>
        <ul className={headerStyles.navList}>
            <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
            </li>
            <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link>
            </li>
            <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link>
            </li>
            <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
            </li>
        </ul>
        </nav>

    </header>
  )  
}

export default Header