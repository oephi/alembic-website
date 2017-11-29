import React from "react"
import PrimaryHeader from "./primary-header"

export default props => (
  <div className="hero">
    <PrimaryHeader />

    <div className="wrap">
      <article>
        <h1>Crafting real-time, scalable web applications</h1>

        <h2>
          We leverage modern tools and technologies to build reliable and robust
          software... and we love it
        </h2>

        <a href="/more" className="btn btn-primary btn-link">
          Find out more!
        </a>
      </article>
    </div>
  </div>
)
