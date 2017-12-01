import React from "react"
import PrimaryHeader from "../primary-header"

export default props => (
  <div className="purpose">
    <PrimaryHeader internal />

    <article>
      <h1>The Future</h1>

      <p>
        We believe the future of the web is realtime. It's here now, but not yet
        evenly distributed
      </p>

      <p>
        We are no longer constrained by the static documents of the first and
        second wave web. HTTP/2 enables always-on conections and living
        documents and applications constantly connected and updated with the
        current shared state of the living web.
      </p>

      <h2>Are you ready?</h2>

      <p>
        The problem we see starting to occur is that if you have thousands or
        millions of clients constantly connected to your servers, most modern
        web technology start falling down. Ruby, Node, even Java and .NET
        platforms aren't highly optimised for those numbers of connections.
        Elixir, Erlang and Phoenix handle these volumes with ease.
      </p>
    </article>
  </div>
)
