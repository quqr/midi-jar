type ObjState<S extends string, C = undefined> = {
    state: S;
    context: C;
};
type NextStateResult<S extends string, C> = S | ObjState<S, C>;
type NextState<S extends string, C> = ((ctxState: any, payload?: any) => NextStateResult<S, C>) | NextStateResult<S, C>;
export type StateDescriptor<C = undefined> = Record<string, Record<string, NextState<string, C>>>;
type MachineState<D extends StateDescriptor<C>, C = undefined> = {
    state: State<D, C>;
    context?: C;
};
export type UseMachine<D extends StateDescriptor<C>, A extends Action = DefaultActions<D>, C = undefined> = [MachineState<D, C>, React.Dispatch<A>];
export type Action = {
    type: string;
    payload?: any;
};
export type DefaultActions<D extends StateDescriptor<any>> = {
    type: Event<D, any>;
};
export type State<D extends StateDescriptor<C>, C = any> = keyof D;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Event<D extends StateDescriptor<C>, C = undefined> = KeysOfUnion<D[keyof D]>;
/**
 * Hook used to express a state with a state machine
 * @param descriptor the machine descriptor object
 * @param initialState the initail state
 * @param initialContext the initial context state
 */
export declare function useStateMachine<D extends StateDescriptor<C>, A extends Action = DefaultActions<D>, C = undefined>(descriptor: D, initialState: State<D, C>, initialContext?: C): UseMachine<D, A, C>;
export default useStateMachine;
