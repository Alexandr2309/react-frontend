import { useRef } from 'react';
import { accentModifiers, AppColorsRecord, grayscaleModifiers, secondaryModifiers } from '../types/appColorsRecord';

export const useAppColorsEvaluator = <Node extends HTMLElement>() => {
    const themeRootRef = useRef<Node | null>(null);

    const evaluateColors = (): AppColorsRecord | null => {
        if (!themeRootRef.current) return null;

        const computedStyle = getComputedStyle(themeRootRef.current);

        const extractPropertyValue = (value: string) => computedStyle.getPropertyValue(value);

        const extractColorsByGroup = <T extends keyof AppColorsRecord>(
            key: T,
            modifiers: readonly (number | string)[],
        ): AppColorsRecord[T] => modifiers.reduce((acc, it) => (
            { ...acc, [it]: extractPropertyValue(`--${key}-${it}`) }
        ), {}) as AppColorsRecord[T];

        return {
            grayscale: extractColorsByGroup('grayscale', grayscaleModifiers),
            secondary: extractColorsByGroup('secondary', secondaryModifiers),
            accent: extractColorsByGroup('accent', accentModifiers),
        };
    };

    return { themeRootRef, evaluateColors };
};
