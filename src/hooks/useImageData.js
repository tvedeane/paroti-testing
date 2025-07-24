import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

const useImageData = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(
              quality: 90
              formats: [AUTO, WEBP, AVIF]
              placeholder: BLURRED
            )
          }
        }
      }
    }
  `);
  const imageMap = data.allFile.nodes.reduce((acc, node) => {

    
    acc[node.relativePath] = getImage(node);

    return acc;
  }, {});

 


  return imageMap;
};

export default useImageData;
