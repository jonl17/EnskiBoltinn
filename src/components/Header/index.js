import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Container } from "./Styled"
import SiminnLogo from "../SiminnLogo"

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

const Header = ({ mode }) => {
  return mode === `ad` ? (
    <SiminnLogo></SiminnLogo>
  ) : (
    <Container>{GetTheItems()}</Container>
  )
}

export default Header
