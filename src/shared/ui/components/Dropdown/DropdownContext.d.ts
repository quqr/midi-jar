export type CloseDropdownOptions = {
    bubble?: boolean;
    refocus?: boolean;
};
export type CloseDropdown = (options?: CloseDropdownOptions) => void;
export declare const DropdownContext: import("react").Context<CloseDropdown | null>;
export declare function useDropdown(): CloseDropdown | null;
