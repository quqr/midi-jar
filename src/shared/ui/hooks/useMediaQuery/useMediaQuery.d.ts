/**
 * Function that test if the current platform support the match media api
 */
export declare const supportMatchMedia: () => boolean;
/**
 * Remove the '@media' from the given media query string
 * @param queryParam the query param string
 */
export declare const getQuery: (queryParam: string) => string;
/**
 * Manage the registration of a media query event listener for the given media query string
 * and change handler
 */
export declare function registerQuery(queryParam: string, onChange: (e: MediaQueryListEvent) => void): () => void;
/**
 * Hook used to test a query param in JS
 */
export declare function useMediaQuery(queryParam: string): boolean;
export default useMediaQuery;
