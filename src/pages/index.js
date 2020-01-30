import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
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

export default IndexPage
