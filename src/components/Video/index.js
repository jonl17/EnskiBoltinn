import React from "react"
import soccerVideo from "../../../static/soccer.mp4"
import Eidur from "../../../static/eidur.jpg"

const Video = () => {
  return (
    <>
      <video
        poster={Eidur}
        controls
        src={soccerVideo}
        height="400px"
        width="700px"
        style={{
          margin: "auto",
          boxSizing: "border-box",
          padding: "0 45px 0 45px",
        }}
      ></video>
    </>
  )
}

export default Video
