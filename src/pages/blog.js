import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Article from "../components/article"

const BlogPage = () => (
  <Layout title="Blog">
    <SEO title="Blog" />
    <h1>Welcome to the Blog</h1>

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
                author {
                  fullName
                  avatar {
                    file {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render = {({ allContentfulArticle: { edges } }) => (
          edges.map(
            ({ node }) => ( <Article key = { node.id } content = { node } /> )
          )
        )
      }
    />  
  </Layout>
)

export default BlogPage
