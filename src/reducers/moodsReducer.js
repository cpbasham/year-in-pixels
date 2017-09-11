import Immutable from "immutable";
import {moods} from "./initialState";
import {CHANGE_COLOR, SET_DATE_MOOD} from '../action_creators';

export function moodsReducer(state = Immutable.fromJS(moods), action) {
  switch(action.type) {
    case SET_DATE_MOOD: {
      let year  = action.payload.year;
      let month = action.payload.month;
      let date  = action.payload.date;
      let moodIndex = action.payload.moodIndex;
      state = state.setIn([year, month, date], moodIndex);
      return state;
    }
    default: {
      return state;
    }
  }
}
