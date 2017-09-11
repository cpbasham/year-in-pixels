import Immutable from "immutable";
import {color} from "./initialState";

export function colorReducer(state = Immutable.fromJS(color), action) {
  switch(action.type) {
    default: {
      return state;
    }
  }
}
