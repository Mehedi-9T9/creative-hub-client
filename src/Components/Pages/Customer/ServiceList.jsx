
import CustomerHeading from '../../Shared/CustomerHeading';

const ServiceList = () => {
    return (
        <div>
            <CustomerHeading heading="Services List"></CustomerHeading>
            <div className='p-5 md:p-0 md:py-10 md:px-20 mt-5 md:mt-0 md:grid grid-cols-2 gap-x-10'>
                <div className="card md:w-96 bg-base-100 drop-shadow-md md:m-0 m-5">
                    <div className='flex justify-between '>
                        <figure className="px-10 pt-10">
                            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="w-24 h-24 rounded-full" />
                        </figure>
                        <button className='btn bg-[#FFE3E3] px-10 m-5'>Pending</button>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-poppins text-[#111340] ">Web & Mobile design</h2>
                        <p className="text-[#111340] font-poppins  ">We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>

                    </div>
                </div>
                <div className="card md:w-96 bg-base-100 drop-shadow-md md:m-0 m-5">
                    <div className='flex justify-between '>
                        <figure className="px-10 pt-10">
                            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="w-24 h-24 rounded-full" />
                        </figure>
                        <button className='btn bg-[#FFE3E3] px-10 m-5'>Pending</button>
                    </div>
                    <div className="card-body ">
                        <h2 className="card-title text-2xl font-poppins text-[#111340] ">Web & Mobile design</h2>
                        <p className="text-[#111340] font-poppins ">We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;