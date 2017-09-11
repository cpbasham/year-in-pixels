import React from 'react';

export default class Pixel extends React.Component {
  render() {
    let year  = this.props.year;
    let month = this.props.month;
    let date  = this.props.date;
    let moodIndex = this.props.moodKey.getIn(["activeMoodIndex"]);
    const colorIndex = this.props.moods.getIn([year, month, date]);
    const color = this.props.moodKey.getIn(["moods", colorIndex, "color"]);
    return (
      <div className="Pixel day"
           style={{backgroundColor: color}}
           onClick={_ => this.props.setDateMood(year, month, date, moodIndex)}>
        <span className="date">{this.props.date}</span>
      </div>
    );
  }
}
