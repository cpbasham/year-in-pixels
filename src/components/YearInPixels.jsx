import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// import * as ActionCreators from '../action_creators';

import Month from './Month';

export default class YearInPixels extends React.Component {
  render() {
    return (
      <div className="YearInPixels">
        <Month />
      </div>
    );
  }
}
