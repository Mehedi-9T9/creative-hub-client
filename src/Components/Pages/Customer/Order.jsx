import React from 'react';
import CustomerHeading from '../../Shared/CustomerHeading';
import { FaFile } from 'react-icons/fa';

const Order = () => {
    return (
        <div>
            <CustomerHeading heading="Order"></CustomerHeading>
            <div className='md:w-1/2 p-5 md:p-0 md:py-10 md:px-20 mt-5 md:mt-0'>
                <form className='space-y-3'>
                    <input type="text" placeholder="Your Name / Company Name" className="input input-bordered input-success w-full " />
                    <input type="text" placeholder="Type Your Email" className="input input-bordered input-success w-full " />
                    <input type="text" placeholder="Graphic Design" className="input input-bordered input-success w-full " />

                    <textarea placeholder="Your Message" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                    <div className='flex gap-x-10'>
                        <input type="text" placeholder="Price" className="input input-bordered input-success w-full " />
                        <label className="input input-bordered flex items-center gap-2">
                            <FaFile></FaFile>
                            <input type="url" className="grow" placeholder="Upload Image" />
                        </label>
                    </div>
                    <button className="btn btn-neutral text-white px-10 font-poppins">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Order;