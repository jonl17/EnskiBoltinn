import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const spitOutLogo = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allImageSharp(
            filter: { fluid: { originalName: { eq: "footystream_logo0.png" } } }
          ) {
            edges {
              node {
                fluid {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Img
          style={{ height: "100%", width: "50%", margin: "auto" }}
          imgStyle={{ objectFit: "contain" }}
          fluid={data.allImageSharp.edges[0].node.fluid}
        ></Img>
      )}
    ></StaticQuery>
  )
}

const FootyStream = () => {
  return spitOutLogo()
}

export default FootyStream
