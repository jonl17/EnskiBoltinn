import React from "react"
import { dummyvideopath } from "../../constants"
import ReactPlayer from "react-player"

const Video = ({ play }) => {
  console.log(play)
  return (
    <ReactPlayer
      style={{
        boxSizing: "border-box",
        paddingLeft: "50px",
        paddingRight: "50px",
      }}
      playing={play}
      width={"100%"}
      height={"100%"}
      url={dummyvideopath}
    ></ReactPlayer>
  )
}

export default Video
