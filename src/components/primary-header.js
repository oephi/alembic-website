import React from "react"
import logo from "../assets/images/alembic-logo.svg"

export default props => (
  <div className="primary-header">
    <div className="wrap">
      <img src={logo} alt="Alembic Pty Ltd" width="162" height="24" />

      <nav>
        <ul>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)
