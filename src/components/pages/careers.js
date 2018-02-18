import React from "react"
import PrimaryHeader from "../primary-header"
import Article from "../article"

export default props => (
  <div className="careers">
    <PrimaryHeader internal />

    <div className="wrap">
      <Article>
        <h1>
          We're hiring
        </h1>

        <p>
          Alembic values diversity and inclusivity and we're always on the lookout
          for enthusiastic developers to bring their unique skillsets and personality to
          our organisation.
        </p>

        <p>
          Our tech stack of choice is based on Elixir &amp; GraphQL coupled with React
          on the front end. Kubernetes handles our DevOps needs.
        </p>

        <p>
          If you have experience in our tech stack or you are an experienced developer
          in another tech stack and are interested in re-tooling then we'd love to hear
          from you.
        </p>

        <h2>Applying</h2>

        <p>
          Email <a href="mailto:work@alembic.com.au">work@alembic.com.au</a> with
          a cover letter and résumé and expect to hear from us!
        </p>
      </Article>
    </div>
  </div>
)
