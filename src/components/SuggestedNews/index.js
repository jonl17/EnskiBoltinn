import React from "react"
import { connect } from "react-redux"
import { graphql, StaticQuery } from "gatsby"

import { Container, Title, NewsContainer } from "./Styled"
import News from "../News"

const getAds = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allMarkdownRemark(filter: { frontmatter: { type: { eq: "ad" } } }) {
            edges {
              node {
                frontmatter {
                  caption
                  image {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data =>
        data.allMarkdownRemark.edges.map(item => (
          <News
            image={item.node.frontmatter.image}
            caption={item.node.frontmatter.caption}
          ></News>
        ))
      }
    ></StaticQuery>
  )
}

const SuggestedNews = ({ positioning, device }) => {
  console.log(device)
  return (
    <>
      <Container positioning={positioning}>
        <Title>Suggested News</Title>
        <NewsContainer>{getAds()}</NewsContainer>
      </Container>
    </>
  )
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(SuggestedNews)
