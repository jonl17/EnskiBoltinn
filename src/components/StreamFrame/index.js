import React from "react"
import {
  Container,
  TwoBtnsContainer,
  VideoContainer,
  LargeBtnContainer,
} from "./Styled"
import TwoBtns from "../TwoBtns"

const StreamFrame = () => {
  return (
    <Container>
      <TwoBtnsContainer>
        <TwoBtns text={"Play Video"} color={"green"}></TwoBtns>
        <TwoBtns text={"VAR Stream"} color={"blue"}></TwoBtns>
      </TwoBtnsContainer>
      <VideoContainer></VideoContainer>
      <LargeBtnContainer></LargeBtnContainer>
    </Container>
  )
}

export default StreamFrame
