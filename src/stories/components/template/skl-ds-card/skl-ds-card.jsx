import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './skl-ds-card.scss';

import { Icon } from './../../atoms/skl-ds-icon/skl-ds-icon';
import { Text } from './../../atoms/skl-ds-text/skl-ds-text';
import { Cover } from './../../atoms/skl-ds-cover/skl-ds-cover';
import { Divider } from './../../atoms/skl-ds-divider/skl-ds-divider';
import { Widget } from './../../molecules/skl-ds-widget/skl-ds-widget';

import cover from './../../../assets/skl-ds-card-cover.png';

export const Card = ({ state, textHeader, cardTitle, footerText }) => {
  const [cardState, setCardState] = useState(state);
  const [differenceInHours, setDifferenceInHours] = useState(5);
  const [isFiveDaysLeft, setIsFiveDaysLeft] = useState(false);
 
  // useEffect(() => {
  //   const TimeCalculation = () => {
  //     const days1 = 20;
  //     const hours1 = 2;
  //     const days2 = 2;

  //     const totalMilliseconds1 = (days1 * 24 * 60 * 60 * 1000) + (hours1 * 60 * 60 * 1000);
  //     const totalMilliseconds2 = days2 * 24 * 60 * 60 * 1000;

  //     const differenceMilliseconds = totalMilliseconds1 - totalMilliseconds2;
  //     const differenceInHours = differenceMilliseconds / (60 * 60 * 1000); // da ms a ore

  //     const differenceInDays = differenceMilliseconds / (24 * 60 * 60 * 1000);
  //     setIsFiveDaysLeft(differenceInDays <= 5);

  //     return differenceInHours;
  //   };

  //   const calculatedHours = TimeCalculation();
  //   setDifferenceInHours(calculatedHours);
  // }, []); 

  // useEffect(() => {

  //   if (differenceInHours !== null) {
  //     setWidgetData(prevWidgetData => prevWidgetData.map(data => ({
  //       ...data,
  //       text: data.text
  //     })));
  //   } 
  // }, [differenceInHours]); 

  const getTextByState = (state) => {
   
    switch (state) {
      case 'normal':
        return '20d 2h';
      case 'important':
        return `${differenceInHours}h`;
      case 'expired':
        return 'EXPIRED';
      case 'done':
        return 'YEAH';
      default:
        return 'N/D';
    }
  };

  const [widgetData, setWidgetData] = useState([
    { icon: 'handyman', iconSize: 'small', colorText: 'black', text: '3' },
    { icon: 'child_care', iconSize: 'small', colorText: 'black', text: '80%' },
    { icon: 'alarm', iconSize: 'small', colorText: cardState === 'important' ? 'white' : 'black', text: getTextByState(state)}, 
  ]);



  return (
    <div className={`skl-ds-card skl-ds-card--${cardState}`}>
      <div className='skl-ds-card-header'>
        <Text
          tag={'p'}
          children={textHeader}
          fontSize={'small'}
          color={cardState === 'important' ? 'white' : 'black'}
        />
      </div>

      <div className='skl-ds-card-cover'>
        <Cover
          src={cover}
        />
        {cardState === 'expired' || cardState === 'done' ?
          <div className='skl-ds-card-cover__overlay'>
            <Icon
              className='skl-ds-card-cover__overlayIcon'
              iconName={cardState === 'expired' ? 'close' : 'check'}
              color={cardState === 'expired' ? 'black' : 'white'}
              iconSize={'xlarge'}
            />
          </div> : ''
        }
      </div>

      <div className='skl-ds-card-body'>
        <Text
          className="skl-ds-card-body__title"
          tag={'h1'}
          children={cardTitle}
          fontSize={'medium'}
          color={'black'}
          bold
        />

        <Divider />

        <div className='skl-ds-card-body__infos'>
          {widgetData.map((data, index) => (
            <Widget
              key={index}
              icon={data.icon}
              iconSize={data.iconSize}
              colorText={data.colorText}
              text={data.text}
            />
          ))}
        </div>

        <Divider />

        <div className='skl-ds-card-footer'>
          <Text
            tag={'p'}
            children={footerText}
            fontSize={'small'}
            color={'black'}
          />
          <div className="skl-ds-card-footer__label">
            <Widget
              orientation={'horizontal'}
              icon={'favorite'}
              iconSize={'small'}
              colorText={'black'}
              text={'00'}
              isButton={'true'}
              onClick={() => alert('Button clicked!')}
            />

            <Widget
              orientation={'horizontal'}
              icon={'chat'}
              iconSize={'small'}
              colorText={'black'}
              text={'00'}
              isButton={'true'}
              onClick={() => alert('Button clicked!')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  state: PropTypes.oneOf(['normal', 'important', 'expired', 'done']),
  textHeader: PropTypes.string,
  cardTitle: PropTypes.string,
  footerText: PropTypes.string
};

Card.defaultProps = {
  state: 'normal',
  textHeader: 'Emanuele',
  cardTitle: 'This is a card title and can be at his maximum length about three lines. If the content exceeds you need to cut it.',
  footerText: 'Lego'
};
