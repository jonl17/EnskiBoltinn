import React from "react"

import { Container, Button } from "./Styled"
import { graphql, StaticQuery } from "gatsby"

const spitOutMenuItems = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              menuitems
            }
          }
        }
      `}
      render={data =>
        data.site.siteMetadata.menuitems.map((item, index) => (
          <Button key={index}>{item}</Button>
        ))
      }
    ></StaticQuery>
  )
}

const NavBar = () => {
  return <Container>{spitOutMenuItems()}</Container>
}

export default NavBar
