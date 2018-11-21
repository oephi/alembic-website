import React from "react"
import { Link } from "react-router-dom"
import logo from "../assets/images/alembic-logo.svg"

import classnames from "classnames"

export default ({ internal }) => {
  const className = classnames({
    "primary-header": true,
    internal: internal,
  })

  return (
    <div className={className}>
      <div className="wrap">
        <Link to="/">
          <img src={logo} alt="Alembic Pty Ltd" width="162" height="24" />
        </Link>

        <nav>
          <ul>
          <li>
            <Link to="/casestudy">Case Studies</Link>
          </li>

            <li>
              <Link to="/careers">Careers</Link>
            </li>

            <li>
              <Link to="/purpose">Purpose</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
