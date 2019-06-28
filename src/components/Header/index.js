import React from "react"
import { graphql, StaticQuery } from "gatsby"

import { Container, Item } from "./Styled"

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
        }
      `}
      render={data =>
        data.site.siteMetadata.menuitems.map((item, index) => (
          <Item key={index}>{item}</Item>
        ))
      }
    ></StaticQuery>
  )
}

const Header = () => {
  return <Container>{GetTheItems()}</Container>
}

export default Header
