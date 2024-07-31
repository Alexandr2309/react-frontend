import { Theme } from '../themeContext';

export const updateHTMLColorScheme = (theme: Theme) => {
    const colorScheme = theme === Theme.BLACK ? 'light' : 'black';

    const htmlTag = document.getElementsByTagName('html')?.[0];
    if (htmlTag) htmlTag.style.colorScheme = colorScheme;
};
