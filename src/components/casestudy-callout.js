import React from "react"
import temp from "../assets/images/casestudy-temp.jpg"
import { Link } from "react-router-dom"


export default props => (
    <div className="callout wrap">
      <aside>

        <ul>
        <Link to="/suncorpstudy">
          <li>
          <img src={temp} alt=" " />
            <h3>GraphQL API Strategy and Implementation</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
          </li>
          </Link>

          <li>
          <img src={temp} alt=" " />
            <h3>GraphQL API Strategy and Implementation</h3>
            <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          </li>

          <li>
          <img src={temp} alt=" " />
            <h3>GraphQL API Strategy and Implementation</h3>
            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
          </li>

          <li>
          <img src={temp} alt=" " />
            <h3>GraphQL API Strategy and Implementation</h3>
            <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          </li>

          <li>
          <img src={temp} alt=" " />
            <h3>GraphQL API Strategy and Implementation</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
          </li>

          <li>
          <img src={temp} alt=" " />
            <h3>GraphQL API Strategy and Implementation</h3>
            <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
          </li>
        </ul>
      </aside>
    </div>
)
