
"use client"
import React, { useRef, useState, useEffect } from 'react';
import { TextIcon } from '@/components/molecules';
import { AnimatedElement, Image, Text } from "@/components/atoms"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './companyCarousel.css';

// import required modules
import { Pagination, Navigation ,Autoplay} from 'swiper/modules';
export default function CompanyCarousel({ data, selected, handleClick }) {
    const [isShow, setShow] = useState(true)
    const swiperRef = useRef(null);

    const handleReachEnd = () => {
        console.log('Last slide reached');
        setShow(false)
        // Perform any action when the last slide is reached
    };
    const handleReachBeginning = () => {
        console.log('First slide reached');
        setShow(true)
        // Perform any action when the first slide is reached
    };
    return (
        <Swiper
            slidesPerView={'auto'}
            // centeredSlides={true}
            autoplay={{
                delay: 2000,
                // disableOnInteraction: false,
              }}
            loop={true}
            spaceBetween={25}
            grabCursor={true}
            onReachEnd={handleReachEnd}
            onReachBeginning={handleReachBeginning}
            modules={[Navigation,Autoplay]}
            className="companyCarousel relative"
        // loop
        >
            {data?.map((val, index) => (<SwiperSlide key={index}>
                <AnimatedElement>
                <Image src={val}  width={268} height={63} className={'bg-transparent lg:w-[268px] w-[88px]'}/>
                </AnimatedElement>
            </SwiperSlide>))}
        </Swiper>
    )
}

