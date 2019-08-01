import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Container } from "./Styled"

const getImage = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allImageSharp(
            filter: { fluid: { originalName: { eq: "siminn.png" } } }
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
            style={{ height: "75px", width: "100%", margin: "auto" }}
            imgStyle={{ objectFit: "contain" }}
            fluid={data.allImageSharp.edges[0].node.fluid}
          ></Img>
        </Container>
      )}
    ></StaticQuery>
  )
}

const SiminnLogo = () => {
  return getImage()
}

export default SiminnLogo
