import Login from '../page/Login';

import {createBrowserRouter} from "react-router-dom";
import Article from "../page/Article";
import Layout from "../page/Layout";
import Board from "../page/Board";
import About from "../page/About";
import NotFound from "../page/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Board/>,
            },
            {
                path: 'About',
                element: <About/>,
            }
        ]
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/article/:id",
        element: <Article />,
    },
    {
        path:"*",
        element: <NotFound />,
    }
]);

export default router;
