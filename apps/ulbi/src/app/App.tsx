import './styles/global.scss';

import { MainPage } from '@/pages/main';
import { AppLoader } from '@frontend/ui-kit/appLoader';
import { Suspense } from 'react';

export const App = () => (
    <Suspense fallback={<AppLoader/>}>
        <MainPage/>
    </Suspense>
);
