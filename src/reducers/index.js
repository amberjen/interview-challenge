import { combineReducers } from 'redux';
import iconCount from './countReducer';
import iconSequence from './displayReducer';

export default combineReducers({
  iconCount,
  iconSequence
});
