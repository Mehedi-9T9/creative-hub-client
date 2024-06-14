import React from 'react';

const Login = () => {
    return (
        <div className='md:w-[550px] mx-auto mt-20 border-2 p-5 md:p-10 rounded-xl border-yellow-500 '>
            <h1 className='text-2xl font-bold font-poppins text-center'>Creative <span className='text-green-500'>Hub</span></h1>
            <form className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-yellow-500 text-xl font-semibold font-poppins">Email</span>
                    </label>
                    <input type="email" placeholder="Email" className="input  input-warning font-poppins font-medium  text-[#111430]" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-yellow-500 text-xl font-semibold font-poppins">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input  input-warning font-poppins font-medium  text-[#111430] " />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-warning bg-[#111340] text-white font-poppins font-medium">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;