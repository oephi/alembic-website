import React from "react"

import elixir from "../assets/images/elixir.svg"

export default props => (
  <div className="elixir-callout">
    <div className="wrap">

      <div className="diagram">
        <img src={elixir} alt="Elixir" width="125" height="215" />
      </div>

      <aside>
        <h2>Elixir on the Backend</h2>

        <p>
          Super scalable, highly concurrent, fault tolerant and functional backend written in Elixir to handle your persistence and business logic.
        </p>

        <p>
          Whether your application backend is distributed or runs entirely on a
          single node, our deployment strategies make even the most daunting
          task simple.
        </p>
      </aside>
    </div>
  </div>
)
