import React from "react";
import paragraphHTML from "./paragraphs/HTML";
import paragraphCards from "./paragraphs/Cards";


const components = {
    paragraph__az_html: paragraphHTML,
    paragraph__az_cards: paragraphCards
};

export const getParagraphs = node => {
    if (components.hasOwnProperty(node.type)) {
        const ParagraphComponent = components[node.type];
        return <ParagraphComponent key={node.id} node={node} />;
    }
    return <p key={node.id}>Unknown type {node.type}{node.__typename}</p>;
};
