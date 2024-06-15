import { Link, NavLink, Outlet } from "react-router-dom";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { FcServices } from "react-icons/fc";
import { MdRateReview } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";


const Dashboard = () => {
    const [show, setShow] = useState(false)
    return (
        <div className="md:flex">

            <div className="md:w-[20%] bg-[#FBD062] md:h-screen">
                <div className="flex flex-row items-center px-10 py-9">
                    <div onClick={() => setShow(!show)} className="block md:hidden">
                        <FaBars />
                    </div>
                    <a className="btn btn-ghost text-3xl font-bold">Creative <span className='text-white'> Hub</span></a>

                </div>
                <div onClick={() => setShow(false)} className={show ? "block md:hidden bg-[#F7F7F7] text-[#111340]" : "hidden"}>
                    <div className="">
                        <NavLink to="/dashboard/order"><li className="flex items-center gap-x-3 text-xl font-poppins px-10 "><FaShoppingCart></FaShoppingCart> Order</li></NavLink>
                        <NavLink to="/dashboard/serviceList"><li className="flex items-center gap-x-3 text-xl font-poppins px-10"><FaHandshake /> Services List</li></NavLink>
                        <NavLink to="/dashboard/review"><li className="flex items-center gap-x-3 text-xl font-poppins px-10"><MdRateReview /> Review</li></NavLink>
                    </div>

                </div>
                <div className="hidden md:block">
                    <NavLink to="/dashboard/order"><li className="flex items-center gap-x-3 text-xl font-poppins px-10 "><FaShoppingCart></FaShoppingCart> Order</li></NavLink>
                    <NavLink to="/dashboard/serviceList"><li className="flex items-center gap-x-3 text-xl font-poppins px-10 pt-2"><FaHandshake /> Services List</li></NavLink>
                    <NavLink to="/dashboard/review"><li className="flex items-center gap-x-3 text-xl font-poppins px-10 pt-2"><MdRateReview /> Review</li></NavLink>
                </div>
            </div>
            <div className="md:w-[80%] bg-[#F4F7FC]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;