import React from "react"
import Home from "./pages/home"
import Contact from "./pages/contact"
import Footer from "./footer"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

export default props => (
  <div className="alembic">
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>

    <Footer />
  </div>
)
