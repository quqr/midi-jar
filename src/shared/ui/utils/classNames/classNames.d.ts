type Cs = null | undefined | string | false;
type ClassesArg = Cs | Cs[] | Record<string, unknown>;
type BoundClassArgs<T extends string> = Omit<Cs, string> | undefined | T | Cs[] | Record<T, string | string[]>;
type ClassDef = Record<string, string>;
type BoundClassNames<T extends ClassDef> = (...args: BoundClassArgs<Extract<keyof T, string>>[]) => string;
/**
 * Class aggregation function
 */
export declare function classNames(...classes: ClassesArg[]): string;
/**
 * Class aggregation function bound to a styles object
 */
export declare function bindClassNames<T extends ClassDef>(styles: T): BoundClassNames<T>;
export {};
