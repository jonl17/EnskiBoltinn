import React from "react"
import { Box, Headline, HeadlineContainer } from "./Styled"

const News = ({ caption, image }) => {
  console.log(image)
  return (
    <Box image={image.childImageSharp.fluid.src}>
      <HeadlineContainer>
        <Headline>{caption}</Headline>
      </HeadlineContainer>
    </Box>
  )
}

export default News
