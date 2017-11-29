import React from "react"
import Hero from "../hero"
import PrimaryHeader from "../primary-header"

import { mount, shallow } from "enzyme"

describe("Hero", () => {
  it("mounts without crashing", () => {
    mount(<Hero />)
  })

  it("renders with the correct className", () => {
    const wrapper = shallow(<Hero />)
    expect(wrapper.hasClass("hero")).toBe(true)
  })

  it("renders a PrimaryHeader component", () => {
    const wrapper = shallow(<Hero />)
    expect(wrapper.find(PrimaryHeader).length).toBe(1)
  })
})
