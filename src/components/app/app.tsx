import cn from 'classnames';
import React, {Suspense, lazy} from 'react';

import packageJson from '../../../package.json';
import {Tellus} from '../tellus/Tellus';
//import {stylesHeader, stylesImage, stylesLink} from './app.module.scss';
// import '../../styles/styles';

// const LazyStrawberryIcon = lazy(() => import('./strawberry'));
export const App = (): React.ReactElement => (
    <div className={`app-react`}>
        <Tellus />
    </div>
);
