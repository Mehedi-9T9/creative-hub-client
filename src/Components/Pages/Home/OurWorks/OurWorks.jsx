import React from 'react';
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Zoom, Navigation, Pagination, Autoplay } from 'swiper/modules';


const OurWorks = () => {
    return (
        <div className='bg-[#111340] p-10 md:p-20 mb-20'>
            <h2 className='text-3xl font-poppins font-bold text-white text-center mb-10'>Here are some of <span className='text-green-500'>our works</span></h2>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#111340',
                    '--swiper-pagination-color': '#fff',
                }}
                zoom={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                slidesPerView={3}
                spaceBetween={30}
                navigation={false}
                pagination={{
                    clickable: true,
                }}
                modules={[Zoom, Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="swiper-zoom-container md:mb-10">
                        <img src="https://i.ibb.co/MM5S8VX/carousel-1.png" className='md:h-[300px]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src="https://i.ibb.co/t4TW54S/carousel-2.png" className='md:h-[300px]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src="https://i.ibb.co/NZ2vdYS/carousel-3.png" className='md:h-[280px] ' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src="https://i.ibb.co/vq2Zgrd/carousel-4.png" className='md:h-[300px]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src="https://i.ibb.co/sRrGpp4/carousel-5.png" className='md:h-[300px]' />
                    </div>
                </SwiperSlide>

            </Swiper>


        </div>
    );
};

export default OurWorks;