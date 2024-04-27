import PropTypes from 'prop-types';
import React from 'react';
import './viewStyles.css';

// const getColorForBackground = (name) => {
//   const colorsBackground = {
//     'A': 'rgba(255, 214, 102, 0.5)',
//     'B': 'rgba(255, 107, 109, 0.5)',
//     'C': 'rgba(194, 158, 239, 0.5)',
//   };
//   return colorsBackground[name.charAt(0).toUpperCase()] || 'rgba(0, 0, 0, 0)'; // Default transparent
// };

const MonthEvent = ({ event }) => {
  const { color, kidsName, title } = event;

  const commonStyle = {
    borderRadius: '0px 7px 7px 0px',
  };

  const circleStyle = {
    ...commonStyle,
    width: '20px',
    height: '20px',
    backgroundColor: color,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '18px',
    color: 'white',
    borderRadius: '50%',
    position: 'absolute',
    top: -5,
    left: -20,
    marginLeft: '30px',
    marginTop: '12px',
  };

  const titleStyle = {
    ...commonStyle,
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '18.75px',
    textAlign: 'left',
    marginLeft: '-30px',
    marginTop: '-5px',
  };

  const boxStyle = {
    backgroundColor: `${color}4D`,
    borderLeft: `2px solid ${color}`,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    //marginTop: '30px',
    borderRadius: '0px 7px 7px 0px',
  };

  const getTruncatedTitle = (title) => {
    if (title.length <= 11) {
      return title;
    }
    return title.substring(0, 11) + '...';
  };

  const truncatedTitle = getTruncatedTitle(title);

  return (
    <div className="rbc-event-content">
      <div className="kid-events-container" style={boxStyle}>
        <span className="circle" style={circleStyle}>
          {kidsName.charAt(0).toUpperCase()}
        </span>
        {truncatedTitle && <span className="title" style={titleStyle}>{truncatedTitle}</span>}
      </div>
    </div>
  );
};

MonthEvent.propTypes = {
  event: PropTypes.object.isRequired,
};

export default MonthEvent;
