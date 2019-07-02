import React from "react"
import Theme from "../components/Theme"
import Header from "../components/Header"
import StreamFrame from "../components/StreamFrame"
import SuggestedNews from "../components/SuggestedNews"

export default () => (
  <Theme>
    <Header></Header>
    <SuggestedNews positioning={"left"}></SuggestedNews>
    <StreamFrame></StreamFrame>
    <SuggestedNews positioning={"right"}></SuggestedNews>
  </Theme>
)
