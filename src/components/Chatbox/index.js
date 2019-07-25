import React from "react"

import { Container } from "./Styled"
import Input from "./Parts/Input"
import Output from "./Parts/Output"

const Chatbox = () => {
  return (
    <Container>
      <Output
        text={
          "anon29384: PISS OFF \n\n ali444989: SCUM \n\n GeorgeMacNeal22: Great pieace of football we seeing here"
        }
      ></Output>
      <Input text={"Please be polite!"}></Input>
    </Container>
  )
}

export default Chatbox
