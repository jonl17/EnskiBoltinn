import styled from "styled-components"

export const Container = styled.div`
  height: 100%;
  margin-left: 250px;
  margin-right: 250px;
  border-top: solid white 2px;
  border-left: solid white 2px;
  border-right: solid white 2px;
  display: grid;
  grid-template-rows: 100px auto 150px;
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
  grid-area: video;
`
export const LargeBtnContainer = styled.div`
  box-sizing: border-box;
  grid-area: largebtn;
  margin: auto 40px auto 40px;
  display: grid;
`
