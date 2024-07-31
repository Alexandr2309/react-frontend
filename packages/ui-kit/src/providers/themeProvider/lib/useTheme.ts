import { useContext } from 'react';
import { ThemeContext, ThemeContextProps } from './themeContext';
import { throwError } from '@frontend/shared/miscUtils';
import { AppColorsRecord } from './types/appColorsRecord';

export const useTheme = () => useContext(ThemeContext) as Required<ThemeContextProps>
    ?? throwError('useTheme canne be used outside it\'s povider component');

export const useAppColors = () => useContext(ThemeContext).appColors as AppColorsRecord
    ?? throwError('useAppColors cannot be used outside ThemeContext\'s provider component');
