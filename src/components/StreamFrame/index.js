import React from "react"
import {
  Container,
  TwoBtnsContainer,
  VideoContainer,
  LargeBtnContainer,
} from "./Styled"
import TwoBtns from "../TwoBtns"
import LargeBtn from "../LargeBtn"
import Video from "../Video"
import Ex from "../ExSpam"
import ViewCount from "../ViewCount"

import { connect } from "react-redux"
import { triggerVideo } from "../../state/actions"

const StreamFrame = ({ play, dispatch }) => {
  return (
    <Container>
      <TwoBtnsContainer>
        <TwoBtns
          play={play}
          click={() => dispatch(triggerVideo())}
          text={"Play Video"}
          color={"green"}
        ></TwoBtns>
        <TwoBtns text={"VAR Stream"} color={"blue"}></TwoBtns>
      </TwoBtnsContainer>
      <VideoContainer>
        <Ex></Ex>
        <Video play={play}></Video>
      </VideoContainer>
      <LargeBtnContainer>
        <ViewCount></ViewCount>
        <LargeBtn text={"Instant replay"}></LargeBtn>
      </LargeBtnContainer>
    </Container>
  )
}

const mapStateToProps = state => ({
  play: state.reducer.play,
})

export default connect(mapStateToProps)(StreamFrame)
