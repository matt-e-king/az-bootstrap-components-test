import React from 'react';
import { graphql } from 'gatsby';
import { getParagraphs } from '../paragraphHelpers';

const Page = ({ data }) => {
  const page = data.nodeAzFlexiblePage,
    paragraphs = page.relationships.paragraphs.map(getParagraphs);
  return (
          <>
          <h1>{ page.title }</h1>
          {paragraphs}
          </>
  )
};

export default Page;

export const query = graphql`
  query($id: String!) {
    nodeAzFlexiblePage(id: { eq: $id }) {
      id
      title
      created
      revision_timestamp(formatString: "")
      path {
        alias
      }
      relationships {
        paragraphs: field_az_main_content {
          type: __typename
          ...HTML
          ...azCards
        }
      }
    }
  }
`;