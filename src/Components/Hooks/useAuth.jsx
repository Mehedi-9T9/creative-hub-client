import React, { useContext } from 'react';
import { MyContext } from '../Provider/AuthProvider';

const useAuth = () => {
    const all = useContext(MyContext)
    return all

};

export default useAuth;