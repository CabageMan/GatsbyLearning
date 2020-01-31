import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import styles from "../styles/layout.module.scss";

const Layout = ({ children, title }) => {
  return (
    <>
      <div className={styles['content-container']}>
        <div className={styles['content-header']}>
          <Header siteTitle={title} />
        </div>
        <div className={styles['content-main']}>
          <main>{children}</main> 
        </div>
        <div className={styles['content-footer']}>
          <footer>
            © {new Date().getFullYear()}, Powered by
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
