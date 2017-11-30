import React from "react"
import logo from "../assets/images/alembic-logo.svg"

import { Link } from "react-router-dom"

export default props => (
  <div className="primary-header">
    <div className="wrap">
      <Link to="/">
        <img src={logo} alt="Alembic Pty Ltd" width="162" height="24" />
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)
