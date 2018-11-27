import React from "react"

import graphql from "../assets/images/graphql.svg"

export default props => (
  <div className="graphql-callout">
    <div className="wrap">

    <div className="diagram">
        <img src={graphql} alt="GraphQL" width="148" height="215" />
      </div>

      <aside>
        <h2>GraphQL for the Modern Web</h2>

        <p>
          Consume data exposed by your backend with efficiency, simplicity and
          flexibility that eclipses REST.
        </p>

        <p>
          With built-in, real-time subscriptions, this is the future of web
          applications and the APIs that feed them their data.
        </p>

        <p>
          Unify arbitrary or legacy APIs behind a single GraphQL endpoint,
          making your client applications easy to write and the developers
          who write them unbelievably productive.
        </p>
      </aside>
    </div>
  </div>
)
