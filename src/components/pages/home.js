import React from "react"
import Hero from "../hero"
import WhatWeDo from "../what-we-do"
import HowWeDoIt from "../how-we-do-it"
import ElixirCallout from "../elixir-callout"
import GraphQLCallout from "../graphql-callout"
import ReactCallout from "../react-callout"

export default ({ children }) => (
  <div className="homepage">
    <Hero />

    <WhatWeDo />
    <HowWeDoIt />
    <ElixirCallout />
    <GraphQLCallout />
    <ReactCallout />

    {children}
  </div>
)
