import React from "react";
import {graphql} from "gatsby";

const Pages = ({ data }) => (
    <div>
      <h1>Pages</h1>
      <ul>
        {data.pages.edges.map(({ node }) => (
          <li key={node.id}>
            <h3>{node.title} - {node.id}</h3>
          </li>
        ))}
      </ul>
    </div>
)

export default Pages

export const query = graphql`
  query {
    pages: allNodeAzFlexiblePage(limit: 1000) {
      edges {
        node {
          title
          id
          path {
            alias
          }
        }
      }
    }
  }
`
