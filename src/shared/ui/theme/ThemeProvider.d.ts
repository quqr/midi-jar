import React from 'react';
import { ThemeContextState, ThemeProviderProps } from './types';
export declare const ThemeContext: React.Context<ThemeContextState>;
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
export declare function useTheme(): ThemeContextState;
export default ThemeProvider;
