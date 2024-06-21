import React, { createContext, useEffect, useState } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
// import { createBrowserRouter } from 'react-router-dom';


export const MyContext = createContext(null)
const AuthProvider = ({ children }) => {
    const axiosSecure = useAxiosSecure()
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const userEmail = localStorage.getItem("userEmail")
        const parseUser = JSON.parse(userEmail)
        axiosSecure.get(`/usersData?email=${parseUser}`)
            .then(res => {
                setUser(res.data)
                setLoading(false)
            })

    }, [axiosSecure])
    console.log(user);
    console.log(loading);
    const contexInfo = { user, setUser }
    return (
        <div>
            <MyContext.Provider value={contexInfo}>
                {children}
            </MyContext.Provider>

        </div>
    )


};

export default AuthProvider;