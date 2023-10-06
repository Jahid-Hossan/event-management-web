import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import PrivetRouter from "../PrivetRouter/PrivetRouter";
import EventDetails from "../Pages/EventDetails/EventDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/service/:id',
                element: <PrivetRouter><EventDetails /></PrivetRouter>,
                loader: () => fetch('/data.json'),
            }
        ]
    }
])
export default router;