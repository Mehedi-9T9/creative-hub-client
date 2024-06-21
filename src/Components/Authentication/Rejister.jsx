import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

import useAuth from "../Hooks/useAuth";






const Rejister = () => {
    const { user } = useAuth()
    console.log(user);
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm()

    const onSubmit = (data) => {
        const { name, email, photo, password } = data
        console.log(data)
        const userInfo = {
            name,
            email,
            photo,
            password,
            role: "customer"
        }
        axiosPublic.post("/rejisterUser", userInfo)
            .then(res => {

                if (res.data.message) {
                    Swal.fire({
                        position: "top",
                        icon: "error",
                        title: `${res?.data?.message}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: `Rejister Successfull`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/")
                    reset()
                    localStorage.setItem("userEmail", JSON.stringify(email))
                }
            })

    }

    return (
        <div className='md:w-[550px] mx-auto mt-20 border-2 p-5 md:p-10 rounded-xl border-yellow-500 '>
            <h1 className='text-2xl font-bold font-poppins text-center'>Creative <span className='text-green-500'>Hub</span></h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-yellow-500 text-xl font-semibold font-poppins">Name</span>
                    </label>
                    <input type="text" {...register("name", { required: true })} placeholder="Name" className="input  input-warning font-poppins font-medium  text-[#111430]" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-yellow-500 text-xl font-semibold font-poppins">Photo URL</span>
                    </label>
                    <input type="url" {...register("photo", { required: true })} placeholder="Photo URL" className="input  input-warning font-poppins font-medium  text-[#111430]" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-yellow-500 text-xl font-semibold font-poppins">Email</span>
                    </label>
                    <input type="email" {...register("email", { required: true })} placeholder="Email" className="input  input-warning font-poppins font-medium  text-[#111430]" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-yellow-500 text-xl font-semibold font-poppins">Password</span>
                    </label>
                    <input type="password" {...register("password", { required: true })} placeholder="Password" className="input  input-warning font-poppins font-medium  text-[#111430] " />

                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-warning bg-[#111340] text-white font-poppins font-medium">Rejister</button>
                </div>
            </form>
            <p className='text-xl text-[#111340] font-poppins font-medium text-center -mt-5'>New Users <Link to="/login"><span className='text-blue-500 font-bold'>Go Login</span></Link></p>
        </div>
    );
};

export default Rejister;