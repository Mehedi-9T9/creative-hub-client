import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Pages/Home/Home';
import Login from '../Authentication/Login';
import Rejister from '../Authentication/Rejister';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/rejister",
                element: <Rejister></Rejister>
            }
        ]
    }
])

export default Routes;