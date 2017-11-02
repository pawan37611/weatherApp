import { combineReducers } from 'redux';
import weatherreducer from './reducer_weather';

const rootReducer = combineReducers({
weather:weatherreducer
});

export default rootReducer;
