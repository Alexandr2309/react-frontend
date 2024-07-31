import s from './appLoader.module.scss';
import clsx from 'clsx';

export const AppLoader = () => (
    <div className={s['pyramid-loader']}>
        <div className={s['wrapper']}>
            <span className={clsx(s['side'], s['side1'])}/>
            <span className={clsx(s['side'], s['side2'])}/>
            <span className={clsx(s['side'], s['side3'])}/>
            <span className={clsx(s['side'], s['side4'])}/>
            <span className={s['shadow']}/>
        </div>
    </div>
);
