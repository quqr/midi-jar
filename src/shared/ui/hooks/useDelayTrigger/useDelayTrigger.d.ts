/**
 * Hook that delay the trigger of a boolean flag after a given time
 * @param time the timer time value
 * @param init the initial boolean value
 */
export declare function useDelayTrigger(time?: number, init?: boolean): [boolean, (newTriggerValue: boolean, immediate?: boolean) => void];
export default useDelayTrigger;
