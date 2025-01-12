import React from 'react';
import PropTypes from 'prop-types';

import './../../../../font/icons/style.css';
import './skl-ds-widget.scss';

import { Icon } from './../../atoms/skl-ds-icon/skl-ds-icon';
import { Text } from './../../atoms/skl-ds-text/skl-ds-text';

export const Widget = ({ className, icon, iconSize, orientation, text, colorText, isButton, onClick }) => {

  const fontSize = iconSize === 'small' ? 'small' : iconSize === 'large' ? 'medium' : '';
  const orientationClass = orientation === 'horizontal' ? 'horizontal' : 'vertical';

  return (
    <>    
    {isButton ? 
      <button className={`${className ? `${className}` : ''} skl-ds-widget skl-ds-widget--${orientationClass} skl-ds-widget--isButton`} onClick={onClick}>
        <Icon iconName={icon} iconSize={iconSize} />
        <Text tag={'p'} children={text} fontSize={fontSize} color={colorText}/>
      </button>
      : 
      <div className={`${className ? `${className}` : ''} skl-ds-widget skl-ds-widget--${orientationClass} `}>
        <Icon iconName={icon} iconSize={iconSize} />
        <Text tag={'p'} children={text} fontSize={fontSize} color={colorText}/>
      </div>
    }
    </>
  );
};

Widget.propTypes = {
  icon: PropTypes.oneOf(['alarm', 'chat', 'check', 'child_care', 'close', 'favorite', 'handyman']).isRequired,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  iconSize: PropTypes.oneOf(['small','large']),
  text: PropTypes.node.isRequired,
  colorText: PropTypes.oneOf(['white', 'black']),
  onClick: PropTypes.func,
};

Widget.defaultProps = {
  icon: 'alarm',
  iconSize: 'small',
  orientation: 'horizontal',
  text: 'Default Text',
  colorText: 'black',
  isButton: false,
  onClick: () => {}
};