import React from "react"

export default props => (
  <div id="what-we-do" className="what-we-do wrap">
    <aside>
      <h2 className="line">
        <span>What we do.</span>
      </h2>

      <ul>
        <li>
          <h3>
            We{" "}
            <span role="img" aria-label="">
              ❤️
            </span>{" "}
            Elixir &amp; JavaScript.
          </h3>

          <p>
            Killer performance and reliability on the backend, delightful live
            updates on the frontend.
          </p>
        </li>

        <li>
          <h3>We are GraphQL experts.</h3>
          <p>
            GraphQL is shaping up the future standard for Web APIs. We believe
            that future is available now.
          </p>
        </li>

        <li>
          <h3>We live in the Cloud.</h3>
          <p>
            We automate deployments to the cloud with zero-downtime.
            We've worked in them all and know which cloud platforms suit what needs.
          </p>
        </li>

        <li>
          <h3>We're Web. And we're Mobile.</h3>
          <p>
            Our expertise doesn't stop at the web. We build native Mobile apps
            which leverage your existing API without any extra overhead.
          </p>
        </li>

        <li>
          <h3>We focus on simplicity.</h3>
          <p>
            We believe software should be lean, and we practise what we preach.
            The smaller and cleaner the code, the smaller possible surface area for bugs to hide.
          </p>
        </li>

        <li>
          <h3>High standards. Always.</h3>
          <p>
            Test driven development, automated Continuous Delivery, performance
            metrics. All qualities we consider to be non-optional.
          </p>
        </li>
      </ul>
    </aside>
  </div>
)
