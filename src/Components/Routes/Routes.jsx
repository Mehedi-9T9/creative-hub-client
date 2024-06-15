import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Pages/Home/Home';
import Login from '../Authentication/Login';
import Rejister from '../Authentication/Rejister';
import Dashboard from '../Layout/Dashboard/Dashboard';
import Order from '../Pages/Customer/Order';
import ServiceList from '../Pages/Customer/ServiceList';

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
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "order",
                element: <Order></Order>
            },
            {
                path: "serviceList",
                element: <ServiceList></ServiceList>
            }
        ]
    }
])

export default Routes;