import Login from '../page/Login';

import {createBrowserRouter} from "react-router-dom";
import Article from "../page/Article";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/article",
        element: <Article />,
    }
]);

export default router;
