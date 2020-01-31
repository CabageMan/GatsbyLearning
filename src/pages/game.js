import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

 const GamePage = () => (
     <Layout title="Tic Tac Toe">
        <div style={{ color: `teal` }}>
            <h1>Here will be a cool game</h1>
            <p>Here we can to play a game.</p>
            <img src="https://source.unsplash.com/random/400x200" alt="" />
            <button>Button</button>
        </div>
     </Layout>
)

export default GamePage