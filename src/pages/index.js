import React from "react"
import Theme from "../components/Theme"
import Header from "../components/Header"
import StreamFrame from "../components/StreamFrame"
import SuggestedNews from "../components/SuggestedNews"
import RightPanel from "../components/RightPanel"

/* secondary look */
import ThemeTwo from "../components/ThemeTwo"

import { connect } from "react-redux"

const index = ({ mode }) => {
  return (
    <>
      <Theme>
        <Header></Header>
        {/* <SuggestedNews positioning={"left"}></SuggestedNews> */}
        <StreamFrame mode={mode}></StreamFrame>
        {/* <RightPanel></RightPanel> */}
      </Theme>

      <ThemeTwo mode={mode}>
        {/* <Header></Header>
        <SuggestedNews positioning={"left"}></SuggestedNews> */}
        <StreamFrame mode={mode}></StreamFrame>
        {/* <RightPanel></RightPanel> */}
      </ThemeTwo>
    </>
  )
}

const mapStateToProps = state => ({
  mode: state.reducer.mode,
})

export default connect(mapStateToProps)(index)
