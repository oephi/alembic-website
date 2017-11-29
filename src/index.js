import React from "react"
import ReactDOM from "react-dom"
import App from "./components/app"
import registerServiceWorker from "./registerServiceWorker"

import "./App.css"

ReactDOM.render(<App />, document.getElementById("root"))
registerServiceWorker()
