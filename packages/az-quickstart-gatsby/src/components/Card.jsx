import React from "react";
import { graphql } from "gatsby";
import { Card, Button } from '@az-bootstrap-components/react'
const AzCard = ({ node }) => {
  return (
          <Card>
            <Card.Body>
              <Card.Title>{node.title}</Card.Title>
              <div dangerouslySetInnerHTML={{ __html: node.body}} />
            </Card.Body>
            <Button>{node.title}</Button>
          </Card>
  )
}
export default AzCard;

export const fragment = graphql`
  fragment azCardFragment on paragraph__az_cardsField_az_cards {
    body
    body_format
    title
  }
`;


