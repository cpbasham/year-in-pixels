import React from 'react';

export default class MoodKey extends React.PureComponent {
  render() {
    return (
      <div className="MoodKey">
        {this.props.moodKey.get("moods").map((mood, i) => {
          return (
            <div key={i} className="mood">
              <input type="text"
                     className="mood-name"
                     defaultValue={mood.get("mood")}
                     onChange={event => this.props.onChangeMood(i, event.target.value)}>
              </input>
              <input type="color"
                     className="color"
                     defaultValue={mood.get("color")}
                     onChange={event => this.props.onChangeColor(i, event.target.value)}>
              </input>
            </div>
          );
        })}
      </div>
    );
  }
}
