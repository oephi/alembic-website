import React from "react"
import PrimaryHeader from "../primary-header"
import { Link } from "react-router-dom"
import Article from "../article"
import temp from "../../assets/images/casestudy-temp.jpg"


export default props => (
  <div className="casestudy">
    <PrimaryHeader internal />

    <div className="wrap">
      <Article>

        <h2>
          GraphQL API Strategy and Implementation
        </h2>

        <img src={temp} alt=" " />


        <h3>The challenge</h3>
        <p>A Brisbane-based Australian finance, insurance and banking corporation, one of Australia's largest banks and insurance groups, was developing a suite of domain and experience APIs as part of their marketplace strategy. As a large organisation with multiple subdivisions, the client wanted to enforce its many departments to more effectively collaborate and communicate on API strategy.</p>
        <p>Their requirements were to ensure all APIs uniformly followed company standards, and for the API catalogue to be perpetually current, facilitating better coordination between API producers and consumers.</p>
        <p>Alembic was briefed to design and implement a centralised publishing hub that stored the latest version of internal APIs. This was to include documentation and health checks, ensure that all APIs conformed to JSON API standards and specific localised constraints, and list backwards compatibility breakages.</p>

        <h3>The solution</h3>
        <p>Timing and scale were two of the largest challenges, but in working the client Alembic quickly and effectively conducted extensive research within the organisation, including interviews with key stakeholders across all of the IT subdivisions.</p>
        <p>Vendor software and services were evaluated and SwaggerHub was selected as the API marketplace platform. Initially manually-updated and maintained by Alembic, the platform was later automated.</p>
        <p>The solution is a server component that receives web hooks from the client’s internal Bitbucket source control system whenever a connected API project pushes new changes. On receiving notification of a change the system runs a suite of checks against the changed Swagger files and records the results in a database. In addition, the server component checks the Swagger file for backwards compatibility changes.</p>
        <p>The front end of the API publishing tool is a React application that connects to the server component via a GraphQL API. It lists the entire APIs in summary form with problem counts and backwards compatibility status and provides the ability to drill down into the details of any issues found. In addition it provides a place to view up-to-date API documentation, the ability to download Swagger files and links back to the origin source repositories.</p>

        <h3>Outcomes</h3>
        <p>Alembic delivered the manually-updated initial version of the API Publishing Tool to realised benefits as it is the go-to authoritative source for the latest API definitions. We also:</p>
        <ul>
          <li>Advised on organisation-wide strategy with a focus on how GraphQL could complement existing REST APIs and approaches, and increase software development efficiencies</li>
          <li>Advised on how to best leverage GraphQL which dramatically reduced the time of releasing API changes (from months to hours)</li>
          <li>Built an API registry using React, GraphQL and Java SpringBoot to automatically collect and communicate API statuses between producers and consumers</li>
          <li>Worked on an automated tool to convert existing Swagger/OpenAPI specifications for REST APIs and generate GraphQL Schemas (edited).</li>
        </ul>

        <p>The fully-automated version of the API Publishing Tool is now in production use. It meets the brief and provides the following valuable features:</p>
        <ul>
          <li>Reports API conformance to JSONAPI and internal standards</li>
          <li>Always up-to-date company-wide API catalogue tightly integrated with VCS (Bitbucket)</li>
          <li>Centralised location to find up-to-date documentation for all APIs</li>
          <li>Reports on API backwards compatibility breakages.</li>
        </ul>

        <p><Link to="/casestudy">Back to Case Studies</Link></p>

      </Article>
    </div>
  </div>
)
