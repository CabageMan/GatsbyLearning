import React from "react"
import { Link } from "gatsby"
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Layout title={data.site.siteMetadata.title}>
      <SEO title="Home" />
      <h1>Hi!</h1>
      <p>Welcome to Gatsby Learning.</p>
      <p>Now go build something great.</p>
      <Link to="/blog">Go to the blog</Link>
      <Link to="/game">Play Tic Tac Toe</Link>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  )
}

export default IndexPage
