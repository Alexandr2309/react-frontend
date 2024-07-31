export const grayscaleModifiers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'card' ] as const;
export type GrayscaleModifiers = typeof grayscaleModifiers[number];

export const secondaryModifiers = [ 1, 2, 3 ] as const;
export type SecondaryModifiers = typeof secondaryModifiers[number];

export const accentModifiers = [ 1, 2, 3, 4, 5, 6 ] as const;
export type AccentModifiers = typeof accentModifiers[number];

export type AccentColorRecord = {
    [key in AccentModifiers]: string;
}

export type AppColorsRecord = {
    grayscale: {
        [key in GrayscaleModifiers]: string;
    };
    secondary: {
        [key in SecondaryModifiers]: string;
    };
    accent: AccentColorRecord;
};
