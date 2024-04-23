'use client'
import React from 'react'
import { Image, Text, Button } from "../../atoms"
import Link from 'next/link'
import { TextIcon } from '@/components/molecules'
export default function Header({ handleClick }) {
    return (
        <div className='p-4 flex justify-between px-6 border-b border-primary'>
            <Image src={"/logo.svg"} className={'lg:!w-[235px] w-[104px]'} width={235} height={32} />
            <div className='lg:flex hidden items-center space-x-12'>
                <Text className='text-black cursor-pointer' onClick={() => handleClick('shop')}>
                    Shop
                </Text>
                <Text className='text-black cursor-pointer' onClick={() => handleClick('sell')}>
                    Sell
                </Text>
                <Text className='text-black cursor-pointer' onClick={() => handleClick('ship')}>
                    Ship
                </Text>
                <Text className='text-black cursor-pointer' onClick={() => handleClick('partnerships')}>
                    Partnerships
                </Text>
                <Text className='text-black cursor-pointer' onClick={() => handleClick('royal')}>
                    Royal
                </Text>
                <Text className='text-black cursor-pointer' onClick={() => handleClick('track')}>
                    Track
                </Text>
                <Text className='text-black cursor-pointer' onClick={() => handleClick('help')}>
                    Help
                </Text>

            </div>
            <div className='lg:flex hidden items-center space-x-3'>
                <Link href={"https://afrofina-user.vercel.app/ecom/auth/sign-in"}>
                    <Text>
                        Sign in
                    </Text>
                </Link>
                <Link href={"https://afrofina-user.vercel.app/ecom/auth/sign-up"}>
                    <Button className="bg-primary rounded-full flex py-2 px-3">

                        <TextIcon text="Get Started" iconSrc="/landing/logo-short.svg" textClass="text-black" iconWidth={41} mainClass="flex py-0 items-center space-x-3" />
                    </Button>
                </Link>
            </div>
            <TextIcon text="Menu" textClass="sf-pro text-black !text-[12px] pr-4 " iconSrc="/landing/burger.svg" iconWidth={24} mainClass="flex lg:hidden flex-row-reverse items-center " />
        </div>
    )
}
