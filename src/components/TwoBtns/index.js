import React from "react"
import { BTN, Paragraph } from "./Styled"

const TwoBtns = ({ color, text }) => {
  return (
    <BTN color={color}>
      <Paragraph>{text}</Paragraph>
    </BTN>
  )
}

export default TwoBtns
