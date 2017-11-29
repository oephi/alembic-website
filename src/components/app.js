import React from "react"
import Home from "./pages/home"
import WhatWeDo from "./what-we-do"
import HowWeDoIt from "./how-we-do-it"
import ElixirCallout from "./elixir-callout"
import GraphQLCallout from "./graphql-callout"
import ReactCallout from "./react-callout"

export default props => (
  <div className="alembic">
    <Home>
      <WhatWeDo />
      <HowWeDoIt />
      <ElixirCallout />
      <GraphQLCallout />
      <ReactCallout />
    </Home>
  </div>
)
