import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "../styles/navbar.module.scss";

const Header = ({ siteTitle }) => (
  <header className={styles['navbar-container']}>
    <div className={styles['navbar-item-left']}>
      <Link to="/" className={styles['navbar-link-item']}>Home</Link>
    </div>
    <div className={styles['navbar-item-center']}>
      <h1 className={styles['navbar-title']}>{siteTitle}</h1>
    </div>
    <div className={styles['navbar-item-right']}>
      <Link to="/blog" className={styles['navbar-link-item']}>Go to the blog</Link>
      <Link to="/tic-tac-toe" className={styles['navbar-link-item']}>Play Tic Tac Toe</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
