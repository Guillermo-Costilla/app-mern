import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/main';
import Home from '../pages/home'
import Cities from '../pages/cities';
import CityDetails from '../pages/detailCities';

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

        ]
    },
    {

        path: '/cities/:id',
        element: <CityDetails />

    }
])

export default router;