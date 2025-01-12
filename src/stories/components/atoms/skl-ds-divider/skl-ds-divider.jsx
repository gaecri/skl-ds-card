import React from 'react';
import PropTypes from 'prop-types';
import './skl-ds-divider.scss';

export const Divider = ({ color, opacity, thickness,}) => {
  const styles = {
    backgroundColor: color ? color: 'var(--T-surface-0-on-color)',
    height: thickness ? thickness : '1px',
    opacity: opacity ? opacity : '0.2'
  };

  return <div className="skl-ds-divider" style={styles} role="separator" />;
};

Divider.propTypes = {
  color: PropTypes.string,
  thickness: PropTypes.string
};

Divider.defaultProps = {
  color: 'var(--T-surface-0-on-color)',
};
