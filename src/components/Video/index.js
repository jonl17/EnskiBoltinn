import React from "react"
import Eidur from "../../../static/eidur.jpg"

/* for testing */
const soccervid =
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"

const Video = () => {
  return (
    <>
      <video
        poster={Eidur}
        controls
        src={soccervid}
        height="auto !important"
        width="100% !important"
        style={{
          margin: "auto",
          boxSizing: "border-box",
          padding: "0 45px 0 45px",
          objectFit: "cover",
        }}
      ></video>
    </>
  )
}

export default Video
