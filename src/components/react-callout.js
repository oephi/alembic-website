import React from "react"

import react from "../assets/images/react.svg"

export default props => (
  <div className="react-callout">
    <div className="wrap">
      <div className="diagram">
        <img src={react} alt="React" width="140" height="215" />
      </div>

      <aside>
        <h2>React on the Frontend</h2>

        <p>
          Well-tested, real-time, client side rendered user interfaces that will
          delight and surprise users.
        </p>

        <p>
          We like our React functional just like our Elixir. Combine this with
          our unrelenting thoroughness when it comes to testing, your apps will
          just work.
        </p>
      </aside>
    </div>
  </div>
)
