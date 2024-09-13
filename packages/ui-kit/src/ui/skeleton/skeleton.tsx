import { FCC } from '@frontend/shared/types';
import { SkeletonProps, SkeletonVariant } from './model/types/skeleton';
import s from './skeleton.module.scss';
import clsx from 'clsx';

export const Skeleton: FCC<SkeletonProps> = (
    { children, className, composite, style, variant = SkeletonVariant.RECT },
) => (
    <div className={clsx(

    )}
    >
        {children ?? <>&nbsp;</>}
    </div>
);
