/**
 * A function used to predict the number of column
 * taken by an item of given index
 */
export type HintSize = (index: number, colPerRow: number) => number | undefined;
/**
 * Get the size of an element including margins
 */
export declare function getItemFullSize(element: Element): [height: number, width: number];
/**
 *
 * @param colPerRow the number of column of a row
 * @param hintSize an optionnal function to predict the number of column
 * of an item of given index
 */
export declare function getNextCursor(colPerRow: number, hintSize?: HintSize): (fromIndex: number, numberOfRows: number) => number;
/**
 * Calculate the total number of rows of the given grid
 */
export declare function getNumberOfRows(listLength: number, colPerRow: number, hintSize?: HintSize): number;
export declare const round: (value: number) => number;
/**
 * Retrieving the first non skipped child element
 * @param containerEl our elements container
 * @returns The first found reference element
 */
export declare function getFirstReferenceElement(containerEl: HTMLElement): Element | null;
