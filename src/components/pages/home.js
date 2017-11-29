import React from "react"
import Hero from "../hero"

export default ({ children }) => (
  <div className="homepage">
    <Hero />
    {children}
  </div>
)
