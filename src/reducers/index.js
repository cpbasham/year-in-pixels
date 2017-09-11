import {combineReducers} from 'redux';
import {yearReducer} from "./yearReducer";
import {colorReducer} from "./colorReducer";


const rootReducer = combineReducers({
  color: colorReducer,
  year: yearReducer
});

export default rootReducer;
