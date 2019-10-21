import { SET_STACK, LOAD_STACKS, ADD_STACK, DELETE_STACK } from '../actions';
import { combineReducers } from 'redux';
import initialState from './initialState';

 function stack(state = {}, action) {
    switch (action.type) {
        case SET_STACK:
            return action.stack;
        default:
            return state;
    }
  }
  function stacks(state = initialState.stacks, action) {
    switch(action.type) {
      case LOAD_STACKS:
        return action.stacks;
      case ADD_STACK:
        return action.stacks;
      case DELETE_STACK:
        const filteredStacks = action.stacks.filter(stack => stack.id !== action.id);
        return filteredStacks;
      default:
        return state;
    }
  }

export default combineReducers({
  stack,
  stacks,
});
