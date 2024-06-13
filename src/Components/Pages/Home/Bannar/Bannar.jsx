import React from 'react';
import './Bannar.css'

const Bannar = () => {
    return (
        <>
            <div className='flex  gap-x-5 bg-[#FBD062] items-center custom-shape'>
                <div className='md:w-2/5 space-y-3'>
                    <h2 className='font-poppins text-5xl font-bold leading-[60px] px-10'>Let’s Grow Your
                        Brand To The
                        Next Level</h2>
                    <p className=' font-poppins text-base px-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <button className='btn btn-warning bg-black text-white text-lg ml-10'>Hire US</button>
                </div>
                <div className='md:w-3/5'>
                    <img src="https://i.ibb.co/YDZ37sB/Frame.png" className='p-20' alt="" />
                </div>
            </div>
            <div class="custom-shape-divider-bottom-1718302326">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
        </>
    );
};

export default Bannar;