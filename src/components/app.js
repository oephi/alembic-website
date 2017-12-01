import React from "react"
import Home from "./pages/home"
import Contact from "./pages/contact"
import Purpose from "./pages/purpose"
import Footer from "./footer"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

export default props => (
  <div className="alembic">
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/purpose" component={Purpose} />
      </Switch>
    </Router>

    <Footer />
  </div>
)
