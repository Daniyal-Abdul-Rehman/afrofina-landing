'use client'
import React, { useRef } from 'react';
import { Text, Image, AnimatedElement } from '@/components/atoms';
import LandingReviewCarousel from './landingReview';

export default function PageOrgEight() {
    const swiperRef = useRef(null);

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <div className='bg-black py-12 pb-24 animate-slide-in'>
            <div className='flex lg:flex-row flex-col  items-center justify-between px-12 pb-12'>
                <Text className="!text-primary lg:!text-[72px] !text-[28px] custom-font !tracking-widest lg:w-8/12 w-full" align="left">
                    <AnimatedElement>
                        Here is what people have to say about afrofina
                    </AnimatedElement>
                </Text>
                <Image src={'/landing/pageOrgEight/right.svg'} width={47} className={'swiper-button-next-landing cursor-pointer'} onClick={goNext} />
            </div>
            <AnimatedElement>
                <div className='relative pl-12'>
                    <Image src={'/landing/pageOrgEight/line.svg'} width={1280.5} className={'w-full pt-24 -mb-[180px] '} />
                    <div className=''>
                        <LandingReviewCarousel swiperRef={swiperRef} />
                    </div>
                </div>
            </AnimatedElement>
        </div>
    );
}

