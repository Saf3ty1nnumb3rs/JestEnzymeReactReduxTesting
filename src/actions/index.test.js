import * as actions from './index';
import { stack, stacks } from '../data/fixtures';

describe('actions', () => {
    it('creates an action to set the main stack', () => {
        const expectedAction = {
            type: actions.SET_STACK,
            stack
        }
        expect(actions.setStack(stack)).toEqual(expectedAction);
    });

    it('creates an action adds a stack to our main stack',() => {
        const expectedAction = {
            type: actions.ADD_STACK,
            stacks
        }
        expect(actions.addStack(stacks)).toEqual(expectedAction);
    });

    it('creates an action that loads stacks to our main stack', () => {
        const expectedAction = {
            type: actions.LOAD_STACKS,
            stacks
        }
        expect(actions.loadStacks(stacks)).toEqual(expectedAction);
    });

    it('creates an action that removes a stack from our main stack',() => {
        const expectedAction = {
            type: actions.DELETE_STACK,
            stacks,
            id: 0
        }
        expect(actions.deleteStack(stacks, 0)).toEqual(expectedAction);

    })
})