import { WithClassname } from '@frontend/shared/types';
import { HTMLAttributes } from 'react';

export enum SkeletonVariant {
    RECT = 'rect',
    SQUARE = 'square',
    CIRCLE = 'circle',
}

export type SkeletonProps = {
    variant?: SkeletonVariant;
    composite?: boolean;
}
& WithClassname
& Pick<HTMLAttributes<HTMLDivElement>, 'style'>
