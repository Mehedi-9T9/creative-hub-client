import axios from 'axios';
import React from 'react';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});

const useAxiosSecure = () => {
    return axiosSecure

};

export default useAxiosSecure;