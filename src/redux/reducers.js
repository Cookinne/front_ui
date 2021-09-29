import { combineReducers } from 'redux';
import IndexReducer from '@containers/Index/reducer';

function indexReducer(state = {}) {
  return {
    ...state,
  };
}

const rootReducer = combineReducers({
  indexReducer,
  IndexReducer,
});

export default rootReducer;
