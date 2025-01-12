import React from 'react';
import PropTypes from 'prop-types';
import { iconList } from '../../../../utilities/icons'
//import icomoonSelection from './../../../../font/icons/selection.json'
import './skl-ds-icon.scss';
import './../../../../font/icons/style.css';

//const iconList = icomoonSelection.icons.map((icon) => icon.properties.name);

export const Icon = ({ className, iconName, color, iconSize}) => {
  return (
    <i 
      className={`${className ? `${className}` : ''} skl-ds-icon skl-ds-icon--${iconSize} icon-${iconName}`}
      style={{ color }} 
      aria-hidden="true"
    ></i>
  );
};

Icon.propTypes = {
  iconName: PropTypes.oneOf(['alarm', 'chat', 'check', 'child_care', 'close', 'favorite', 'handyman']).isRequired,
  color: PropTypes.oneOf(['white', 'black']),
  iconSize: PropTypes.oneOf(['small','medium', 'large', 'xlarge']).isRequired,
};

Icon.defaultProps = {
  iconName: 'alarm',
  color: 'black', 
  iconSize: 'large'
};
