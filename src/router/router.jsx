import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/main';
import Home from '../pages/home'
import Cities from '../pages/cities';
import CityDetails from '../pages/detailCities';
import SignIn from '../pages/signIn';
import SignUp from '../pages/signup';
import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cities',
                element: <Cities />

            },
            {
                path: '/cities/:id',
                element: <CityDetails />
            }
        ]
    },
    {
        path: '/cities/:id',
        element: <CityDetails />
    },
    {
        path: '/signin',
        element: <ProtectedRoute path='/'>
            <SignIn />
        </ProtectedRoute>
    }, {
        path: '/signup',
        element: <SignUp />
    }

])

export default router;