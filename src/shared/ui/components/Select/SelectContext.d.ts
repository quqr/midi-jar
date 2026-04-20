type SelectState = {
    onChange: (v: string) => void;
    value?: string | null;
    keepOpened?: boolean;
    refocusTrigger: () => void;
};
export declare const SelectContext: import("react").Context<SelectState>;
export declare function useSelect(): SelectState;
export {};
