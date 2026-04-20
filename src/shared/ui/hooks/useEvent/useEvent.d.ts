/**
 * A Hook to define an event handler with an always-stable function identity.
 * https://github.com/reactjs/rfcs/blob/useevent/text/0000-useevent.md
 * (Need to be changed with the React implementation once released)
 */
export declare function useEvent<T extends Function>(func: T): T;
export default useEvent;
