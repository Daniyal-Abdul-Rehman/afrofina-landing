'use client'
import React, { useRef } from 'react';
import { Text, Image, AnimatedElement } from '@/components/atoms';
import LandingReviewCarousel from './landingReview';

export default function PageOrgEight() {
    const swiperRef = useRef(null);

    const goNext = () => {
        console.log('sw',swiperRef.current.swiper.slideNext())
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <div className='bg-black py-12 pb-24 animate-slide-in'>
            <div className='flex lg:flex-row flex-col  items-center justify-between lg:px-12 px-5 pb-12'>
                <Text className="!text-primary lg:!text-[72px] !text-[28px] custom-font !tracking-widest lg:w-8/12 w-full lg:!text-left !text-center" align="left">
                    <AnimatedElement>
                        Here is what people have to say about afrofina
                    </AnimatedElement>
                </Text>
                <div className='flex justify-end w-full lg:pb-0 pb-6'>
                <Image src={'/landing/pageOrgEight/right.svg'} width={47} className={'swiper-button-next-landing cursor-pointer lg:!w-[47px] w-[24px]'} onClick={goNext} />
                </div>
            </div>
            <AnimatedElement>
                <div className='relative lg:pl-12 pl-5'>
                    <Image src={'/landing/pageOrgEight/line.svg'} width={1280.5} className={'w-full pt-24 -mb-[180px] '} />
                    <div className=''>
                        <LandingReviewCarousel swiperRef={swiperRef} />
                    </div>
                </div>
            </AnimatedElement>
        </div>
    );
}

