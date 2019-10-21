export const ADD_STACK = 'ADD_STACK';
export const SET_STACK = 'SET_STACK';
export const LOAD_STACKS = 'LOAD_STACKS';
export const DELETE_STACK = 'DELETE_STACK';

export function setStack(stack) {
    return {
        type: SET_STACK,
        stack: stack,
    }
}

export function loadStacks(stacks) {
    return {
        type: LOAD_STACKS,
        stacks,
    }
}

export function addStack(stacks) {
    return {
        type: ADD_STACK,
        stacks,
    }
}

export function deleteStack(stacks, id) {
    return {
        type: DELETE_STACK,
        stacks,
        id,
    }
}

