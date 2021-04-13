import React from "react";
import { graphql } from "gatsby";
import AzCard from "../components/card";

const paragraphCards = ({ node }) => {
  const content = node.cards.map((card, index) =>
    <AzCard key={index} node={card} card-width={node.behavior_settings.az_cards_paragraph_behavior.card_width} card-width-sm={node.behavior_settings.az_cards_paragraph_behavior.az_display_settings.card_width_sm} />
  );

  return (
    <div className={node.behavior_settings.az_cards_paragraph_behavior.az_display_settings.bottom_spacing}>
      {content}
    </div>

  )
}
export default paragraphCards;

export const fragment = graphql`
  fragment azCards on paragraph__az_cards {
    id
    cards: field_az_cards {
       ...azCardFragment
    }
    behavior_settings {
      az_cards_paragraph_behavior {
        card_style
        card_width
        az_display_settings {
          bottom_spacing
          card_width_sm
          card_width_xs
        }
      }
    }
  }
`;
