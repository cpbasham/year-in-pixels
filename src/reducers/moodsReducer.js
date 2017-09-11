import Immutable from "immutable";
import {moods, moodKey} from "./initialState";
import {CHANGE_COLOR, SET_DATE_MOOD} from '../action_creators';

export function moodsReducer(state = Immutable.fromJS(moods), action) {
  switch(action.type) {
    case SET_DATE_MOOD: {
      let year  = action.payload.year;
      let month = action.payload.month;
      let date  = action.payload.date;
      state = state.setIn([year, month, date], moodKey["currentMoodIndex"]);
      // console.log(state.toJS());
      return state;
    }
    default: {
      return state;
    }
  }
}
