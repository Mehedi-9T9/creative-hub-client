import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";


const Login = () => {
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()
    const onSubmit = (data) => {
        const { email, password } = data
        console.log(data)
        const userInfo = { email, password }
        axiosPublic.post("/loginData", userInfo)
            .then(res => {
                if (res.data.message == true) {
                    localStorage.setItem("userEmail", JSON.stringify(email))
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Your Successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else {
                    Swal.fire({
                        position: "top",
                        icon: "error",
                        title: " login Fail",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }
    return (
        <div className='md:w-[550px] mx-auto mt-20 border-2 p-5 md:p-10 rounded-xl border-yellow-500 '>
            <h1 className='text-2xl font-bold font-poppins text-center'>Creative <span className='text-green-500'>Hub</span></h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-yellow-500 text-xl font-semibold font-poppins">Email</span>
                    </label>
                    <input type="email"  {...register("email", { required: true })} placeholder="Email" className="input  input-warning font-poppins font-medium  text-[#111430]" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-yellow-500 text-xl font-semibold font-poppins">Password</span>
                    </label>
                    <input type="password"  {...register("password", { required: true })} placeholder="password" className="input  input-warning font-poppins font-medium  text-[#111430] " />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-warning bg-[#111340] text-white font-poppins font-medium">Login</button>
                </div>
            </form>
            <p className='text-xl text-[#111340] font-poppins font-medium text-center -mt-5'>New Users <Link to="/rejister"><span className='text-blue-500 font-bold'>Go Rejister</span></Link></p>
        </div>
    );
};

export default Login;