import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Container } from "./Styled"

const GetTheItems = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              menuitems
            }
          }
          file(name: { eq: "bad_image" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <div>
            <Img
              style={{
                height: "100px",
                width: "100%",
              }}
              imgStyle={{ objectFit: "contain" }}
              fluid={data.file.childImageSharp.fluid}
            ></Img>
          </div>
        </>
      )}
    ></StaticQuery>
  )
}

const Header = () => {
  return <Container>{GetTheItems()}</Container>
}

export default Header
