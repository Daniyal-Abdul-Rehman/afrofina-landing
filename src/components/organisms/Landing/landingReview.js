"use client"
// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { TextIcon } from '@/components/molecules';
// import { Image, Text } from "@/components/atoms";
// import 'swiper/css';
// import 'swiper/css/pagination';
// import './landingReviewCarousel.css';
// // import SwiperCore, { Navigation,Autoplay } from 'swiper/core';
// import { Pagination, Navigation, Autoplay } from 'swiper/modules';
// // SwiperCore.use([Navigation,Autoplay]);

// export default function LandingReviewCarousel({ swiperRef }) {
//     const [isShow, setShow] = useState(true);

//     const handleReachEnd = () => {
//         console.log('Last slide reached');
//         setShow(false);
//         // Perform any action when the last slide is reached
//     };

//     const handleReachBeginning = () => {
//         console.log('First slide reached');
//         setShow(true);
//         // Perform any action when the first slide is reached
//     };

//     return (
//         <>
//             <Swiper
//                 ref={swiperRef}
//                 slidesPerView={'auto'}
//                 loop={true}
//                 // centeredSlides={true}
//                 autoplay={{
//                     delay: 2000,
//                     // disableOnInteraction: false,
//                 }}
//                 initialSlide={'lastSlide'}
//                 spaceBetween={15}
//                 grabCursor={true}
//                 navigation={true} // Disable Swiper's built-in navigation
//                 onReachEnd={handleReachEnd}
//                 onReachBeginning={handleReachBeginning}

//                 modules={[Navigation,Autoplay]}
//                 className="landingReviewCarousel relative"
//             >
//                 {[0, 1, 2, 3, 4, 5].map((index) => (
//                     <SwiperSlide key={index}>
//                         <div className='lg:h-[347px] h-[234px] bg-primary w-full flex flex-col justify-center items-center  rounded-lg  border-spacing-[5px] border-black shadow-lg'>
//                             <Text className="text-black sf-pro lg:!text-[22px] !text-[14px]">
//                                 “I’m able to earn while I do what I love most (Travel), love the U-cargo agent feature on afrofina.”
//                             </Text>
//                             <TextIcon iconSrc="/landing/pageOrgEight/avatar.svg" iconWidth={55.18} iconClass="lg:w-[55.18px]" text="James Appiah" textClass="lg:!text-[22px] !text-[14px] custom-font text-black !tracking-widest" mainClass="flex items-center lg:space-x-6 space-x-3" />
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </>
//     );
// }
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './landingReviewCarousel.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { TextIcon } from '@/components/molecules';
import { Image, Text } from "@/components/atoms";
// Important: Make sure to install Swiper's React wrapper and core modules:
// npm install swiper react-id-swiper

export default function LandingReviewCarousel({ swiperRef }) {
    const [isShow, setShow] = useState(true);

    const handleReachEnd = () => {
        console.log('Last slide reached');
        setShow(false);
        // Perform any action when the last slide is reached
    };

    const handleReachBeginning = () => {
        console.log('First slide reached');
        setShow(true);
        // Perform any action when the first slide is reached
    };

    useEffect(() => {
        const swiperInstance = swiperRef.current.swiper;
        if (swiperInstance) {
            swiperInstance.on('reachEnd', handleReachEnd);
            swiperInstance.on('reachBeginning', handleReachBeginning);
        }
    }, [swiperRef]);

    return (
        <Swiper
            ref={swiperRef}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            initialSlide={0}
            spaceBetween={15}
            grabCursor={true}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="landingReviewCarousel relative"
        >
            {[0, 1, 2, 3, 4, 5].map((index) => (
                <SwiperSlide key={index}>
                    <div className='lg:h-[347px] h-[234px] bg-primary w-full flex flex-col justify-center items-center  rounded-lg  border-spacing-[5px] border-black shadow-lg'>
                        <Text className="text-black sf-pro lg:!text-[22px] !text-[14px]">
                            “I’m able to earn while I do what I love most (Travel), love the U-cargo agent feature on afrofina.”
                        </Text>
                        <TextIcon iconSrc="/landing/pageOrgEight/avatar.svg" iconWidth={55.18} iconClass="lg:w-[55.18px]" text="James Appiah" textClass="lg:!text-[22px] !text-[14px] custom-font text-black !tracking-widest" mainClass="flex items-center lg:space-x-6 space-x-3" />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
