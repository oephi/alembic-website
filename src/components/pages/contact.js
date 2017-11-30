import React from "react"
import PrimaryHeader from "../primary-header"
import ContactDetails from "../contact-details"

export default ({ children }) => (
  <div className="contact">
    <PrimaryHeader internal />
    <ContactDetails />
  </div>
)
