type MenuState = {
    onChange: (v: string | string[]) => void;
    value?: string | string[];
    keepOpened?: boolean;
};
export declare const MenuContext: import("react").Context<MenuState>;
export declare function useMenu(): MenuState;
export {};
