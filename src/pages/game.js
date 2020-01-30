import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

 const GamePage = () => (
     <Layout>
        <div style={{ color: `teal` }}>
            <h1>Here will be a cool game</h1>
            <p>Here we can to play a game.</p>
        </div>
        <Link to="/">Go back to the homepage</Link>
        <Link to="/blog">Go to the blog</Link>
     </Layout>
)

export default GamePage