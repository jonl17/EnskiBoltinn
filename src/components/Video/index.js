import React from "react"
import Eidur from "../../../static/eidur.jpg"
import Gylfi from "../../../static/gylfi.png"

/* for testing */
const soccervid =
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"

const Video = ({ mode }) => {
  return (
    <>
      <video
        poster={mode === `stream` ? Eidur : Gylfi}
        controls
        src={soccervid}
        height="auto !important"
        width="100% !important"
        style={{
          margin: "auto",
          boxSizing: "border-box",
          padding: "0 45px 0 45px",
          objectFit: "cover",
          width: "75%",
        }}
      ></video>
    </>
  )
}

export default Video
