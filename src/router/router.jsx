import { createBrowserRouter } from "react-router-dom";
import Main from '../layouts/main';
import Cities from '../pages/cities';
import Home from '../pages/home';

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
            }
        ]
    },
    {

    }
])

export default router;