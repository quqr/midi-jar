import type { StackDirection } from '../Stack';
import type { ButtonSize, ButtonVariant } from '../Button';
export type TabsVariant = ButtonVariant;
export type TabsSize = ButtonSize;
export type TabListContextState = {
    selected?: string;
    variant?: TabsVariant;
    direction?: StackDirection;
    size?: TabsSize;
    onChange?: (id: string) => void;
};
export declare const TabListContext: import("react").Context<TabListContextState>;
export declare function useTabList(): TabListContextState;
