import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export default class Month extends React.Component {
  render() {
    const squares = [];
    for (let i=0; i<daysInMonth(); i++) {
      squares.push("empty");
    }
    return (
      <div className="Month">
        {squares.map((e, i) => {
          return <div key={i} className="pixel" onClick={labelPixel}></div>
        })}
      </div>
    );
  }
}

const labelPixel = pixel => {
  pixel.target.style.background = "Red";
}

const daysInMonth = (month = new Date().getMonth(), year = new Date().getFullYear()) => {
  return new Date(year, month+1, 0).getDate();
}
