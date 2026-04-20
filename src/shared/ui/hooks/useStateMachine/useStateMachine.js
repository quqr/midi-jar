/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useReducer, useRef } from 'react';
/**
 * Hook used to express a state with a state machine
 * @param descriptor the machine descriptor object
 * @param initialState the initail state
 * @param initialContext the initial context state
 */
export function useStateMachine(descriptor, initialState, initialContext) {
    const processing = useRef(false);
    const machineReducer = useCallback((currentState, action) => {
        if (processing.current) {
            return currentState;
        }
        processing.current = true;
        const { state, context } = currentState;
        const nextStates = descriptor?.[state];
        if (!nextStates) {
            return (currentState || {
                state: initialState,
                context: initialContext,
            });
        }
        const next = nextStates[action.type];
        // invalid action
        // returning the current state
        if (!next) {
            processing.current = false;
            return {
                state,
                context,
            };
        }
        const nextState = typeof next === 'function'
            ? // eslint-disable-next-line @typescript-eslint/ban-types
                next(context, action.payload) || state
            : next || state;
        processing.current = false;
        return typeof nextState === 'string'
            ? { state: nextState, context }
            : { state: nextState?.state, context: nextState?.context };
    }, [descriptor, initialState, initialContext]);
    return useReducer(machineReducer, {
        state: initialState,
        context: initialContext,
    });
}
export default useStateMachine;
