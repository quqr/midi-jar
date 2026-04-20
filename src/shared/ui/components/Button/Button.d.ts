import React from 'react';
export declare const ButtonSizes: readonly ["sm", "md", "lg"];
export declare const ButtonVariants: readonly ["filled", "outlined", "ghost"];
export declare const ButtonIntents: readonly ["neutral", "primary", "secondary", "danger", "warning", "success"];
export type ButtonSize = (typeof ButtonSizes)[number];
export type ButtonVariant = (typeof ButtonVariants)[number];
export type ButtonIntent = (typeof ButtonIntents)[number];
type ButtonBaseProps = {
    /**
     * The button size (in teeshirt size)
     * */
    size?: ButtonSize;
    /**
     * The button stylistic variant:
     *
     * * `filled`: no borders, background filled with color
     * * `outlined`: colored borders, with transparent background
     * * `ghost`: no borders, with transparent background
     */
    variant?: ButtonVariant;
    /**
     * The semantic button intent
     */
    intent?: ButtonIntent;
    /**
     * Content on the left side of the button
     */
    left?: React.ReactNode;
    /**
     * Content on the right side of the button
     */
    right?: React.ReactNode;
    /**
     * Makes the button take the whole available width
     */
    block?: boolean;
    /**
     * Disables the button and its interactions
     */
    disabled?: boolean;
    /**
     * Makes the button radius perfectly round.
     */
    rounded?: boolean;
    /**
     * Makes the button neutral when not hover
     */
    hoverIntent?: boolean;
    /**
     * The content of the button.
     */
    children?: React.ReactNode;
};
type ClassicButtonProps = ButtonBaseProps & {
    /**
     * Specifies that the button is a single icon
     */
    icon?: false;
};
type ButtonIconProps = ButtonBaseProps & {
    icon: true;
    /**
     * The aria-label of the button (mandatory if icon is `true`)
     */
    'aria-label': string;
};
export type ButtonProps = ClassicButtonProps | ButtonIconProps;
/**
 * Renders a button with semantic intent and stylistic variant, with any element on the sides of it (e.g.: icons).
 */
export declare const Button: import("../../utils/forwardRef").FunctionComponentWithAs<"button", ButtonProps>;
export default Button;
