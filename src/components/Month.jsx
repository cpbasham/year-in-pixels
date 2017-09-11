import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as ActionCreators from '../action_creators';

import MoodKey from './MoodKey';
import Pixel from './Pixel';

class Month extends React.Component {
  render() {
    const fillerDays = startingDay(this.props.year, this.props.month);
    var squares = [];
    for (let i=0; i<fillerDays; i++) {
      squares.push("filler-day");
    }
    for (let i=0; i<daysInMonth(this.props.year, this.props.month); i++) {
      squares.push("day");
    }
    return (
      <div className="Month">
        <MoodKey moodKey={this.props.moodKey}
                 onChangeMood={this.props.changeMood}
                 onChangeColor={this.props.changeColor}
                 onChangeActiveMoodIndex={this.props.changeActiveMoodIndex}/>
        {squares.map((e, i) => {
          if (e === "filler-day") {
            return <div key={i} className="day filler-day"></div>
          } else {
            return <Pixel key={i}
                          year={this.props.year}
                          month={this.props.month}
                          date={"" + (i+1-fillerDays)}
                          moodKey={this.props.moodKey}
                          moods={this.props.moods}
                          setDateMood={this.props.setDateMood} />
          }
        })}
      </div>
    );
  }
}

const daysInMonth = (year, month) => {
  return new Date(year, month+1, 0).getDate();
}
const startingDay = (year, month) => {
  return new Date(year, month, 1).getDay();
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

function mapStateToProps(state) {
  return { moodKey: state.moodKey, moods: state.moods}
}

export default connect(mapStateToProps, mapDispatchToProps)(Month);
