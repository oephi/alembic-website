import React from "react"
import temp from "../assets/images/casestudy-temp.jpg"
import { Link } from "react-router-dom"


export default props => (
  <div className="callout wrap">
    <aside>
      <ul>

        <li>
          <Link to="/suncorpstudy">
            <img src={temp} alt=" " />
            <h3>GraphQL API Strategy and Implementation</h3>
            <p>Designing and implementing a centralised publishing hub that stores the latest version of internal APIs.</p>
          </Link>
        </li>

      </ul>
    </aside>
  </div>
)
