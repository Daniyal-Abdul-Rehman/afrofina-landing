'use client'
import { useState } from 'react';
import { AnimatedElement, Text, Image } from '@/components/atoms'
import ReactPlayer from 'react-player'
export default function PageOrgSeven({refTrack}) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const toggleVideo = () => {


        setIsVideoPlaying(!isVideoPlaying);

    };

    return (
        <div ref={refTrack} className='pt-24 p-5 animate-slide-in'>
            <div className='flex justify-center'>

                <Text className="lg:!text-[40px] !text-[20px] text-black custom-font !tracking-widest w-9/12 px-10 pb-12">
                    <AnimatedElement>
                        Get the most out of afrofina, watch this video to know  how you can utilize the full potential of Afrofina.

                    </AnimatedElement>
                </Text>
            </div>
            <AnimatedElement>
                <div className={`lg:!h-[790px] !h-[254px] flex justify-center items-end lg:rounded-xl rounded-none overflow-hidden relative`} >
                    <div className='bg-transparentGray w-full h-full absolute top-0 left-0 z-10 flex justify-center items-center' onClick={toggleVideo}>
                        {!isVideoPlaying && <Image src="/play.svg" width={94} height={94} alt={'play'} />}
                    </div>
                    <ReactPlayer
                        url='/background.mp4'
                        playing={isVideoPlaying}
                        controls={true}
                        className={`absolute top-0 left-0 w-full h-full z-0`}
                        width='100%'
                        height='100%'
                        style={{ objectFit: 'cover' }} // Ensure the video covers the entire div
                    />
                </div>

            </AnimatedElement>
        </div>
    )
}
