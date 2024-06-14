import React from 'react';

const SectionTitle = ({ heading_1, heading_2 }) => {
    return (
        <div className=''>
            <h1 className='text-2xl md:text-3xl font-semibold font-poppins text-center'>{heading_1} <span className='text-[#7AB259]'>{heading_2}</span></h1>

        </div>
    );
};

export default SectionTitle;