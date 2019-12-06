import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = ({ imgName }) => {
  const data = useStaticQuery(graphql`
     query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
  `);
  const image = data.allImageSharp.edges.find(
    edge => edge.node.fluid.originalName === imgName
    );

  if (!image) {
    return null;
  }

  return <Img fluid={image.node.fluid} />
};

export default Image;