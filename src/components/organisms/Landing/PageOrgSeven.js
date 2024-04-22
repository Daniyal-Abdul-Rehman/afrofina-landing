'use client'
import { useState } from 'react';
import { AnimatedElement, Text, Image } from '@/components/atoms'
import ReactPlayer from 'react-player'
export default function PageOrgSeven() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const toggleVideo = () => {


        setIsVideoPlaying(!isVideoPlaying);

    };

    return (
        <div className='pt-24 p-5 animate-slide-in'>
            <div className='flex justify-center'>

                <Text className="lg:!text-[40px] !text-[20px] text-black custom-font !tracking-widest w-9/12 px-10 pb-12">
                    <AnimatedElement>
                        Get the most out of afrofina, watch this video to know  how you can utilize the full potential of Afrofina.

                    </AnimatedElement>
                </Text>
            </div>
            <AnimatedElement>
                <div className={`!h-[642px] flex justify-center items-end lg:rounded-xl rounded-none overflow-hidden relative`} style={{ backgroundImage: `url('/shop/story.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='bg-transparentGray w-full h-full absolute top-0 left-0 z-10 flex justify-center items-center' onClick={toggleVideo}>

                        {!isVideoPlaying && <Image src="/play.svg" width={94} height={94} alt={'play'} />}
                    </div>
                    {/* <video
                    id="shopVideo"
                    className={`min-w-full min-h-full object-cover z-0 ${isVideoPlaying ? '' : 'opacity-0 pointer-events-none'}`}
                    autoPlay
                    loop={true}
                    muted
                >
                    <source src="/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
                    <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' playing={isVideoPlaying} controls={true} className={`min-w-full min-h-full object-cover z-0`}
                    />
                </div>
            </AnimatedElement>
        </div>
    )
}
