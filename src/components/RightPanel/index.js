import React from "react"
import { Container } from "./Styled"

import Countdown from "../Countdown"
import Chatbox from "../Chatbox"

const RightPanel = () => {
  return (
    <Container>
      <Countdown></Countdown>
      <Chatbox></Chatbox>
    </Container>
  )
}

export default RightPanel
