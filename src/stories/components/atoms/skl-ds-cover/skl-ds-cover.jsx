import React from 'react';
import PropTypes from 'prop-types';

export const Cover = ({ className, src, alt, width, height }) => {
  return (
    <img className={`${className ? `${className}` : ''} skl-ds-cover `}
      src={src}
      alt={alt}
      width={width ? width : '100%'}
      height={height ? height : 'auto'} 
      style={{ objectFit: 'cover' }} // L'immagine si adatterà senza distorcere
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

Image.defaultProps = {
  width: '100%',
  height: 'auto',
};