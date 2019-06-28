import styled from "styled-components"

export const Container = styled.div`
  height: 100%;
  width: 60%;
  margin: auto;
  border-top: solid white 2px;
  border-left: solid white 2px;
  border-right: solid white 2px;
  display: grid;
  grid-template-rows: 125px auto 150px;
  grid-template-areas:
    "twobtns"
    "video"
    "largebtn";
`
export const TwoBtnsContainer = styled.div`
  box-sizing: border-box;
  grid-area: twobtns;
  margin: auto;
`
export const VideoContainer = styled.div`
  box-sizing: border-box;
  border: 1px solid white;
  grid-area: video;
`
export const LargeBtnContainer = styled.div`
  box-sizing: border-box;
  border: 1px solid white;
  grid-area: largebtn;
`
