import React from "react"
import PrimaryHeader from "../primary-header"
import Article from "../article"

export default props => (
  <div className="purpose">
    <PrimaryHeader internal />

    <div className="wrap">
      <Article>
        <h1>
          We're Alembic, and this is our{" "}
          <a href="http://slashpurpose.org">/purpose</a>
        </h1>

        <p>
          We want to build web-based software that empowers our clients and
          enriches the lives of their users. We want to relentlessly improve
          ourselves, which in turn, helps us improve the services we offer to
          our clients and their users.
        </p>

        <h2>Attainment</h2>
        <p>
          We want to ensure all people of Alembic thrive both professionally and
          personally. This includes a clear distinction between work time and
          personal time. We want to look forward to coming to work, while also
          wanting to look forward to rest and relaxation.
        </p>

        <p>
          While at work, we should want the work we're doing to be meaningful
          and life embettering.
        </p>

        <h2>Inclusivity</h2>
        <p>
          We want to maintain our environment of inclusion and equality. All
          humans are equal.
        </p>

        <h2>Quality</h2>
        <p>
          We want the software we build and design to be of very high quality.
          We define quality as
        </p>

        <ul>
          <li>Maintainable.</li>
          <li>Well tested.</li>
          <li>Scalable.</li>
          <li>Real-time.</li>
          <li>Continuously integrated.</li>
          <li>Simple, minimalistic and understandable.</li>
        </ul>

        <p>
          Furthermore, we strive to continuously improve software development
          for our clients. We want them to be as happy to be working with us as
          we are happy to be building software for them.
        </p>

        <h2>Trust</h2>
        <p>
          We want our colleagues to share our relentless desire to improve, our
          unquenchable curiosity, our insatiable appetite for better. We should
          be open, supportive and an asset to those we work with. We should be
          each others cheer squad.
        </p>

        <h2>Longevity</h2>
        <p>
          We want to form long term, fruitful relationships. Success is a
          marathon, not a sprint. We strive to never betray our values for
          short-term profit.
        </p>

        <p>
          We want to choose the tools of the future. We will not blindly take
          orders and cash cheques, but truly collaborate and deliver real
          solutions.
        </p>
      </Article>
    </div>
  </div>
)
