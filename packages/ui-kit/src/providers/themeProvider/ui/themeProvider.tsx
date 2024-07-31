import { StorageController } from '@frontend/shared/types';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import { Theme, ThemeContext, ThemeContextProps } from '../lib/themeContext';
import { AppColorsRecord } from '../lib/types/appColorsRecord';
import { useAppColorsEvaluator } from '../lib/hooks/useAppColorsEvaluator';
import { updateHTMLColorScheme } from '../lib/utils/updateHTMLColorScheme';
import clsx from 'clsx';

interface ThemeProviderProps<Storage extends object> {
    /**
     * Контроллер хранилища приложения, с помощью которого блудет записываться выбранная тема
     */
    storageController: StorageController<Storage>;
    /**
     * Ключ темы в хранилище приложения
     */
    themeStorageKey: keyof Storage;
    children: ReactNode;

}

export const ThemeProvider = <Storage extends object>(
    { children, storageController, themeStorageKey }: ThemeProviderProps<Storage>,
) => {
    const defaultTheme = storageController.get(themeStorageKey) as Theme | null ?? Theme.BLACK;
    const [ theme, setTheme ] = useState<Theme>(defaultTheme);
    const [ colors, setColors ] = useState<AppColorsRecord | null>(null);
    const { evaluateColors, themeRootRef } = useAppColorsEvaluator();

    const toggleTheme = () => {
        setTheme(prevTheme => {
            const newTheme = prevTheme === Theme.BLACK
                ? Theme.LIGHT
                : Theme.BLACK;

                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // toDo: разобраться с жалобой ts
                storageController.set(themeStorageKey, newTheme);
                return newTheme;
        });
    };

    useEffect(() => {
        updateHTMLColorScheme(theme);
        setColors(evaluateColors());
    }, [ theme ]);

    const memoProps: ThemeContextProps = useMemo(() => ({
        theme,
        toggleTheme,
        notLightTheme: theme !== Theme.LIGHT,
        appColors: colors as AppColorsRecord,
    }), [ colors ]);

    return (
        <ThemeContext.Provider value={memoProps}>
            <main
                className={clsx('app', `${theme}-theme`)}
                ref={themeRootRef}
            >
                {memoProps.appColors && children}
            </main>
        </ThemeContext.Provider>
    );
};
