import rootReducer from './index';
import * as actions from '../actions';
import { stack, stacks } from '../data/fixtures';

describe('root reducer', () => {
    it('returns the initial state',() => {
        expect(rootReducer({}, [])).toEqual({ stack: {}, stacks: []});
    });

    it('sets the min stack',() => {
        expect(rootReducer({}, [{ type: actions.SET_STACK, stack}])).toEqual({ stack:{}, stacks: [] });
    });

    it('loads stacks', () => {
        expect(rootReducer({}, { type: actions.LOAD_STACKS, stacks })).toEqual({ stack: {}, stacks });
    });

    it('adds a stack', () => {
        expect(rootReducer({}, { type: actions.ADD_STACK, stacks: [stack] })).toEqual({ stack: {}, stacks: [stack] });
    });

    it('removes a stack', () => {
        const stackId = 0;
        const filteredStacks = stacks.filter(stack => stack.id !== stackId);
        expect(rootReducer({}, { type: actions.DELETE_STACK, stacks, id: 0 })).toEqual({ stack: {}, stacks: filteredStacks });
    });
})
