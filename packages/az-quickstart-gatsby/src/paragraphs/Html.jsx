import React from "react";
import { graphql } from "gatsby";

const paragraphHTML = ({ node }) => {
  return (
      <div dangerouslySetInnerHTML={{ __html: node.htmlContent.processed }} />
  )
}
export default paragraphHTML;

export const fragment = graphql`
  fragment HTML on paragraph__az_html {
      id
      htmlContent: field_az_full_html {
          processed
      }
  }
`;
