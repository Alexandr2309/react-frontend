'use client';

import { createContext } from 'react';
import { AppColorsRecord } from './types/appColorsRecord';

/**
 * Тема приложения
 */
export enum Theme {
    LIGHT = 'light',
    BLACK = 'black'
}

export interface ThemeContextProps {
    /** Тема */
    theme: Theme;
    /** Является ли тема **не** светлой */
    notLightTheme: boolean;
    /** Объект цветов приложения */
    appColors: AppColorsRecord;
    /** Переключить тему на следующую */
    toggleTheme: () => void;
}

export const ThemeContext = createContext<Partial<ThemeContextProps>>({});
