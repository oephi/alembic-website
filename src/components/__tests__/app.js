import React from "react"
import App from "../app"

import { mount } from "enzyme"

describe("App", () => {
  it("mounts without crashing", () => {
    mount(<App />)
  })
})
