import React from "react"
import Home from "../home"
import Hero from "../../hero"

import { mount, shallow } from "enzyme"

describe("Home", () => {
  it("mounts without crashing", () => {
    mount(<Home />)
  })

  it("renders with the correct className", () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.hasClass("homepage")).toBe(true)
  })

  it("renders a Hero component", () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find(Hero).length).toBe(1)
  })

  it("renders children", () => {
    const wrapper = shallow(
      <Home>
        <p>Hello!</p>
      </Home>
    )
    expect(wrapper.containsMatchingElement(<p>Hello!</p>)).toBe(true)
  })
})
