import React from 'react';

const Footer = () => {
    return (
        <div className='flex bg-[#FBD062] p-20'>
            <div className='md:w-1/2 md:px-10 space-y-3'>
                <h2 className='text-3xl font-semibold font-poppins text-[#111340]'>Let us handle your project, professionally.</h2>
                <p className='text-[#111340] font-poppins'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
            </div>
            <div className='md:w-1/2'>
                <form className='space-y-3'>
                    <input type="text" placeholder="Type Your Email" className="input input-bordered input-success w-full " />
                    <input type="text" placeholder="Your Name / Company Name" className="input input-bordered input-success w-full " />
                    <textarea placeholder="Your Message" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                    <button className="btn btn-neutral text-white px-10 font-poppins">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Footer;