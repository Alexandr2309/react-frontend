import { CSSOptions } from 'vite';
import autoprefixer from 'autoprefixer';

export const getCssOptions = (): CSSOptions => ({
    postcss: {
        plugins: [
            autoprefixer({}),
        ],
    },
    preprocessorOptions: {
        scss: {
            additionalData: '@use "@/app/styles/font" as * ;\n',
        },
    },
});
