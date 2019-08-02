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
// import Ex from "../ExSpam"
// import ViewCount from "../ViewCount"
import NavBar from "../NavBar"
import FootyStream from "../FootyStream"

import { connect } from "react-redux"
import { triggerVideo } from "../../state/actions"

import AppLogo from "../AppLogo/index"

const StreamFrame = ({ play, dispatch, mode }) => {
  return (
    <Container>
      {mode === `ad` ? (
        <AppLogo></AppLogo>
      ) : (
        <>
          <NavBar></NavBar>
          <TwoBtnsContainer>
            <TwoBtns
              play={play}
              click={() => dispatch(triggerVideo())}
              text={"Play Video"}
              color={"green"}
            ></TwoBtns>
            <TwoBtns text={"VAR Stream"} color={"blue"}></TwoBtns>
          </TwoBtnsContainer>
        </>
      )}
      <VideoContainer>
        {/* <Ex></Ex> */}
        <Video mode={mode} play={play}></Video>
      </VideoContainer>
      <LargeBtnContainer>
        <LargeBtn mode={mode}></LargeBtn>
      </LargeBtnContainer>
      {mode === `stream` ? <FootyStream></FootyStream> : <p></p>}
    </Container>
  )
}

const mapStateToProps = state => ({
  play: state.reducer.play,
})

export default connect(mapStateToProps)(StreamFrame)
