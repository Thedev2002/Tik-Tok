import HomePage from '~/pages/home';
import Profile from '~/pages/profile';

const publicRouter = [
    {
        path: '/',
        element: HomePage,
    },
    {
        path: '/profile',
        element: Profile,
    },
];
const privateRouter = [{}];

export { publicRouter, privateRouter };
