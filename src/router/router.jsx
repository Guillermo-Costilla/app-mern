import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/main';
import Home from '../pages/home'
import Cities from '../pages/cities';
import CityDetails from '../pages/detailCities';
import SignIn from '../pages/signIn';
import SignUp from '../pages/signup';
import ProtectedRoute from './ProtectedRoute';
import CreateCity from '../pages/CreateCity';
import MyCities from '../pages/MyCities';

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
                path: '/my-cities',
                element: <MyCities />
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
    },
    {
        path: '/create-city',
        element: <CreateCity />
    }
])

export default router;