import React from 'react'
import { Text, Image } from '@/components/atoms'
import Link from 'next/link'
export default function Card(props) {
    const {
        text,
        imageSrc,
        iconSrc,
        link
    } = props
    return (
        <div className='relative w-full lg:h-[321px] h-[236px]'>
            {/* Background image */}
            <div className='w-full rounded-3xl' style={{ backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
                {/* Image container */}
                <div className='w-full flex flex-col justify-between h-full p-3 pb-6'>
                    <div className='flex justify-end'>
                        <Link href={link}>
                            <Image src={iconSrc} width={40} />
                        </Link>
                    </div>
                    <Text variant="h4" className="custom-font !tracking-widest ">
                        {text}
                    </Text>
                </div>
            </div>
        </div>
    )
}
