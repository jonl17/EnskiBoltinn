import React from "react"
import { Container } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const spitImage = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allImageSharp(
            filter: { fluid: { originalName: { eq: "elding.png" } } }
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
        <Img
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
          }}
          fluid={data.allImageSharp.edges[0].node.fluid}
        ></Img>
      )}
    ></StaticQuery>
  )
}

const ThemeTwo = ({ children, mode }) => {
  return (
    <Container mode={mode}>
      {spitImage()}
      {children}
    </Container>
  )
}

export default ThemeTwo
