import Immutable from "immutable";
import {year} from "./initialState";

export function yearReducer(state = Immutable.fromJS(year), action) {
  switch(action.type) {
    default: {
      return state;
    }
  }
}
