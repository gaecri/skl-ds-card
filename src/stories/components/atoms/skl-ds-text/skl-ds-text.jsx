import React from 'react';
import PropTypes from 'prop-types';
import './skl-ds-text.scss';

export const Text = ({ className, tag, color, fontSize, bold, children })=> {
  const Tag = tag;

  return <Tag className={`${className ? `${className}` : ''} skl-ds-text skl-ds-text--${color} skl-ds-text--${fontSize} ${bold ? 'skl-ds-text--bold' : ''}`}>{children}</Tag>;
};

Text.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'p']).isRequired, 
  fontSize: PropTypes.oneOf(['small', 'medium']),
  color: PropTypes.oneOf(['white', 'black']),
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  tag: 'p',
  color: 'black',
  fontSize: "small",
  bold: false
};