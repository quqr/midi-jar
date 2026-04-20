import { useEffect, useRef } from 'react';
/**
 * Hook that make a copy of the given props on a ref so that
 * you can then use it in a non-reactive way
 */
export function usePropsRef(props) {
    const ref = useRef(props);
    useEffect(() => {
        ref.current = props;
    });
    return ref;
}
export default usePropsRef;
