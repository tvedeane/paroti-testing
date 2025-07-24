import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import useImageData from '@/hooks/useImageData';


const Image = ({ relativePath, alt, className }) => {
    const imageData = useImageData();
    
    const image = imageData[relativePath];
   


    if (!image) {
        return <p>Image not found</p>;
    }

    return <GatsbyImage image={image} alt={alt || 'Image'} loading='eager' className={className} />;
};

export default Image;
