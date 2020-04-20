
import {TOGGLE_MENU} from '../constants/action-types';

const initialState = {
  isMenuOpen: false
};

function rootReducer(state = initialState, action) {

  if (action.type === TOGGLE_MENU) {
   return Object.assign({}, state, { isMenuOpen : action.payload })
  }
  return state;
  
};

export default rootReducer;