import React, { createContext, useEffect, useMemo, useContext } from 'react';
const defaultContextValue = {
    theme: null,
    variant: null,
};
export const ThemeContext = createContext(defaultContextValue);
const getThemeClassName = (theme) => {
    if (!theme)
        return '';
    return `theme-${theme}`;
};
const getThemeVariantClassName = (theme, variant) => {
    if (!theme || !variant)
        return '';
    return `theme-${theme}--${variant}`;
};
export const ThemeProvider = ({ theme, variant, element = document.body, children, }) => {
    useEffect(() => {
        if (element) {
            const themeClassName = getThemeClassName(theme);
            const variantClassName = getThemeVariantClassName(theme, variant);
            if (themeClassName) {
                document.body.classList.add(themeClassName);
            }
            if (variantClassName) {
                document.body.classList.add(variantClassName);
            }
            return () => {
                if (themeClassName) {
                    document.body.classList.remove(themeClassName);
                }
                if (variantClassName) {
                    document.body.classList.remove(variantClassName);
                }
            };
        }
    }, [theme, variant, element]);
    const contextValue = useMemo(() => ({
        theme,
        variant: variant ?? null,
    }), [theme, variant]);
    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};
ThemeProvider.displayName = 'ThemeProvider';
export function useTheme() {
    return useContext(ThemeContext);
}
export default ThemeProvider;
