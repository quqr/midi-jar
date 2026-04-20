import { useCallback, useEffect, useRef } from 'react';
function isPrintableCharacter(str = '') {
    return str.length === 1 && str.match(/\S/);
}
export function useKeySearch() {
    const search = useRef('');
    const timer = useRef(null);
    useEffect(() => {
        return () => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
        };
    }, []);
    const getSearch = useCallback((char) => {
        if (timer.current)
            clearTimeout(timer.current);
        if (!isPrintableCharacter(char)) {
            search.current = '';
        }
        else {
            timer.current = setTimeout(() => {
                search.current = '';
            }, 200);
            search.current += char;
        }
        return search.current;
    }, []);
    const setSearch = useCallback((value = '') => {
        search.current = value;
    }, []);
    return [getSearch, setSearch];
}
export default useKeySearch;
