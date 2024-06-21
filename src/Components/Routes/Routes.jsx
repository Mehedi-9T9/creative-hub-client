import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Pages/Home/Home';
import Login from '../Authentication/Login';
import Rejister from '../Authentication/Rejister';
import Dashboard from '../Layout/Dashboard/Dashboard';
import Order from '../Pages/Customer/Order';
import ServiceList from '../Pages/Customer/ServiceList';
import CustomerReview from '../Pages/Customer/CustomerReview';
import ServicesList from '../Pages/AdminPage/ServicesList';
import AddServic from '../Pages/AdminPage/AddServic';
import MakeAdmin from '../Pages/AdminPage/MakeAdmin';

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
            }, {
                path: "review",
                element: <CustomerReview></CustomerReview>
            },
            {
                path: "servicesList",
                element: <ServicesList></ServicesList>
            }, {
                path: "addService",
                element: <AddServic></AddServic>
            },
            {
                path: "makeAdmin",
                element: <MakeAdmin></MakeAdmin>
            }
        ]
    }
])

export default Routes;