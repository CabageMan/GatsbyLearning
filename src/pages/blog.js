import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Article from "../components/article"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Hi from the Blog</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/game">Play Tic Tac Toe</Link>

    <StaticQuery
      query = {graphql`
        {
          allContentfulArticle {
            edges {
              node {
                id
                title
                publishedAt
                text {
                  text
                }
                banner {
                  file {
                    url
                  }
                }
              }
            }
          }
        }
      `}
      render = {
        (
          {
            allContentfulArticle: {
              edges
            }
          }
        ) => (
          edges.map(
            ({ node }) => (
              <Article key = { node.id } content = { node } />
            )
          )
        )
      }
    />  
  </Layout>
)

export default BlogPage
