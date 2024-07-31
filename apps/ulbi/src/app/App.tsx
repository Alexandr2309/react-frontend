import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { MainPage } from '@/pages/main';
import { AboutPage } from '@/pages/about';

export const App = () => (
    <Suspense fallback={<div>...Loading</div>}>
        <Link to={'/'}>
            Main page
        </Link>
        <Link to={'/about'}>
            About page
        </Link>
        <Routes>
            <Route
                path={'/'}
                element={<MainPage/>}
            />
            <Route
                path={'/about'}
                element={<AboutPage/>}
            />
        </Routes>
    </Suspense>
);
