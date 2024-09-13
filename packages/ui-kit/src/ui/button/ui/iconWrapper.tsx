import { FCC } from '@frontend/shared/types';
import { ButtonProps } from '../model/types/buttonTypes';
import clsx from 'clsx';
import s from './iconWrapper.module.scss';

interface IconWrapperProps extends Pick<ButtonProps, 'iconAligment'> {
    createWrapper: boolean;
    justifyCenter?: boolean;
    gap?: 'l' | 's';
}

export const IconWrapper: FCC<IconWrapperProps> = (
    { createWrapper, iconAligment, children, gap = 'l', justifyCenter },
) => createWrapper
    ? (
        <div className={clsx(
                s['icon-wrapper'],
                s[`icon-wrapper_align--${iconAligment}`],
                s[`icon-wrapper_gap--${gap}`],
                justifyCenter && s['icon-wrapper--center'],
            )}
        >
            {children}
        </div>
    )
    : (
        <>
            {children}
        </>
    );
