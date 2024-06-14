import React from 'react';
import './Bannar.css'

const Bannar = () => {
    return (
        <div className=''>
            <div className='md:flex md:flex-row-reverse gap-x-5 bg-[#FBD062] items-center custom-shape md:px-20'>

                <div className='md:w-3/5'>
                    <img src="https://i.ibb.co/YDZ37sB/Frame.png" className='p-20' alt="" />
                </div>
                <div className='md:w-2/5 space-y-3 pb-5 md:mb-0'>
                    <h2 className='font-poppins text-3xl md:text-5xl font-bold md:leading-[60px] px-10 md:px-5'>Let’s Grow Your
                        Brand To The
                        Next Level</h2>
                    <p className=' font-poppins text-base px-10 md:px-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <button className='btn btn-warning bg-black text-white text-lg ml-10 md:ml-5 px-10'>Hire US</button>
                </div>
            </div>
            {/* <div className="custom-shape-divider-bottom-1718302326">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div> */}
            <div className='md:flex justify-center items-center md:gap-x-10 p-10 space-y-3 md:space-y-0'>
                <img src="https://i.ibb.co/v4FM3x3/airbnb.png" className='w-52 p-5' alt="" />
                <img src="https://i.ibb.co/X5bpWFn/google.png" className='w-52 p-5' alt="" />
                <img src="https://i.ibb.co/QCW1GJ9/netflix.png" className='w-52 p-5' alt="" />
                <img src="https://i.ibb.co/3kSWzTp/slack.png" className='w-52 p-5' alt="" />
                <img src="https://i.ibb.co/3RdkX9v/uber.png" className='w-52 p-5' alt="" />

            </div>
        </div>
    );
};

export default Bannar;