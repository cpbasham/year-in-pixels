import {combineReducers} from 'redux';
import {moodsReducer} from "./moodsReducer";
import {moodKeyReducer} from "./moodKeyReducer";


const rootReducer = combineReducers({
  moodKey: moodKeyReducer,
  moods: moodsReducer
});

export default rootReducer;
