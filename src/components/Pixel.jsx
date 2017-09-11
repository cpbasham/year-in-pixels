import React from 'react';

export default class Pixel extends React.PureComponent {
  render() {
    let year  = this.props.year;
    let month = this.props.month;
    let date  = this.props.date;
    const colorIndex = this.props.moods.getIn([year, month, date]);
    const color = this.props.moodKey.getIn(["moods", colorIndex, "color"]);
    return (
      <div className="Pixel day"
           style={{backgroundColor: color}}
           onClick={_ => this.props.setDateMood(year, month, date)}>
        <span className="date">{this.props.date}</span>
      </div>
    );
  }
}
