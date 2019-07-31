import React from "react"
import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"
import { Container } from "./Styled"

const getImage = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allImageSharp(
            filter: { fluid: { originalName: { eq: "icon_appid.png" } } }
          ) {
            edges {
              node {
                fluid {
                  originalName
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Container>
          <Img
            style={{ height: 75, width: 75, margin: "auto" }}
            fluid={data.allImageSharp.edges[0].node.fluid}
          ></Img>
        </Container>
      )}
    ></StaticQuery>
  )
}

const AppLogo = () => {
  return getImage()
}

export default AppLogo
