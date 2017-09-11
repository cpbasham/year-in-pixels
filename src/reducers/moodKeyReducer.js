import Immutable from "immutable";
import {moodKey} from "./initialState";
import {CHANGE_MOOD, CHANGE_COLOR} from '../action_creators';

export function moodKeyReducer(state = Immutable.fromJS(moodKey), action) {
  switch(action.type) {
    case CHANGE_MOOD:
      state = state.setIn(["moods", action.payload.index, "mood"], action.payload.mood);
      return state;
    case CHANGE_COLOR:
      state = state.setIn(["moods", action.payload.index, "color"], action.payload.color);
      return state;
    default: {
      return state;
    }
  }
}
