import React from "react"
import Header from "../components/Header"
import StreamFrame from "../components/StreamFrame"
import SuggestedNews from "../components/SuggestedNews"

export default () => (
  <>
    <Header></Header>
    <SuggestedNews positioning={"left"}></SuggestedNews>
    <StreamFrame></StreamFrame>
  </>
)
