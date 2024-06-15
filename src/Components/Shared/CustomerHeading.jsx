import React from 'react';

const CustomerHeading = ({ heading }) => {
    return (
        <div className='flex p-10 bg-[#FBD062] justify-between'>
            <h2 className='text-3xl font-bold text-[#111340]'>{heading}</h2>
            <h2 className='text-2xl font-medium text-[#111340]'>Mehedi Hasan</h2>

        </div>
    );
};

export default CustomerHeading;