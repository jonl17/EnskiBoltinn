import React from "react"
import { OutputBox, Username, Message } from "../Styled"

import { graphql, StaticQuery } from "gatsby"

const spitOutMessages = index => {
  return (
    <StaticQuery
      query={graphql`
        {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  username
                  messages
                }
              }
            }
          }
        }
      `}
      render={data =>
        data.allMarkdownRemark.edges.map(item => (
          <>
            <Username>{item.node.frontmatter.username}: </Username>{" "}
            <Message>{item.node.frontmatter.messages[index]}</Message>
          </>
        ))
      }
    ></StaticQuery>
  )
}

const Output = () => {
  return (
    <OutputBox>
      {spitOutMessages(0)} {spitOutMessages(1)} {spitOutMessages(2)}
    </OutputBox>
  )
}

export default Output
