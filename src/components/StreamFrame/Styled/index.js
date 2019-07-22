import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  margin-left: 250px;
  margin-right: 250px;
  border-top: solid rgba(255, 255, 255, 0.7) 2px;
  border-left: solid rgba(255, 255, 255, 0.7) 2px;
  border-right: solid rgba(255, 255, 255, 0.7) 2px;
  display: grid;
  grid-template-rows: 40px 100px auto 150px 100px;
  grid-template-areas:
    "nav"
    "twobtns"
    "video"
    "largebtn"
    "logo";
`
export const TwoBtnsContainer = styled.div`
  box-sizing: border-box;
  grid-area: twobtns;
  margin: auto;
  display: flex;
`
export const VideoContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  grid-area: video;
  display: grid;
`
export const LargeBtnContainer = styled.div`
  box-sizing: border-box;
  grid-area: largebtn;
  margin: 20px 40px auto 40px;
  display: flex;
  align-content: center;
  justify-content: center;
`
