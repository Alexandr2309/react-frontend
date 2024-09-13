import { Img } from '@/z-shared/ui';
import s from './Hero.module.scss';
import Beautiful1 from '@/z-shared/assets/beautiful1.jpg';
import Beautiful2 from '@/z-shared/assets/beautiful2.jpg';
import Avatar from '@/z-shared/assets/avatar.jpg';

export const Hero = () => (
    <section className={s.container}>
        <div className={s.top}/>
        <div className={s.bottom}/>
        <h1 className={s.title}>
            Чувственность которой нет предела
        </h1>
        <Img
            imgPath={Beautiful1}
            className={s.first}
        />
        <Img
            imgPath={Beautiful2}
            className={s.second}
        />
        <Img
            imgPath={Avatar}
            className={s.center}
        />
    </section>
);
