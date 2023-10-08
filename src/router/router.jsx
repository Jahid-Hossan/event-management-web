import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import PrivetRouter from "../PrivetRouter/PrivetRouter";
import EventDetails from "../Pages/EventDetails/EventDetails";
import Login from './../Pages/Login/Login';
import Register from "../Pages/Register/Register";
import ServicePage from './../Pages/ServicePage/ServicePage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/projects.json'),
            },
            {
                path: '/service',
                element: <PrivetRouter><ServicePage></ServicePage></PrivetRouter>
            },
            {
                path: '/service/:id',
                element: <PrivetRouter><EventDetails /></PrivetRouter>,
                loader: () => fetch('/data.json'),
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])
export default router;