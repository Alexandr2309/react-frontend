import { WithClassname } from '@frontend/shared/types';
import clsx from 'clsx';
import s from './Img.module.scss';

interface ImgProps extends WithClassname {
    imgPath: string;
}

export const Img = ({ imgPath, className }: ImgProps) => (
    <div className={clsx(s.container, className)}>
        <img
            src={imgPath}
            alt={'border'}
            className={s.img}
        />
    </div>
);
