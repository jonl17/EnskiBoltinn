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
          <div
            style={{
              position: "relative",
              boxSizing: "border-box",
              padding: "5px",
            }}
          >
            <Img
              style={{
                position: "absolute",
                top: "0",
                height: "100%",
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
