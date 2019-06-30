import React from "react"
import { BTN, Paragraph } from "./Styled"

const TwoBtns = ({ color, text, click, play }) => {
  if (color === "green") {
    console.log("Current: " + play)
    return (
      <BTN onClick={() => click()} color={color}>
        <Paragraph>{text}</Paragraph>
      </BTN>
    )
  }
  return (
    <BTN color={color}>
      <Paragraph>{text}</Paragraph>
    </BTN>
  )
}

export default TwoBtns
