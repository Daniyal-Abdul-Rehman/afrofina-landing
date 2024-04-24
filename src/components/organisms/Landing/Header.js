'use client'
import React from 'react'
import { Image, Text, Button } from "../../atoms"
import Link from 'next/link'
import { TextIcon } from '@/components/molecules'
export default function Header({ handleClick }) {
    return (
        <div className='p-4 flex justify-between sticky top-0 z-[999999] bg-white px-6 border-b border-primary'>
            <Image src={"/logoMain.png"} className={'lg:w-[235px] w-[104px]'} width={235} height={32} />
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

            <div className="drawer drawer-end lg:hidden dropdown dropdown-end w-10 flex justify-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}

                    <label htmlFor="my-drawer-4" className="drawer-button"><TextIcon text="Menu" textClass="sf-pro text-black !text-[12px] pr-4 " iconSrc="/landing/burger.svg" iconWidth={24} mainClass="flex lg:hidden flex-row-reverse items-center " />
                    </label>
                </div>
                <div className="drawer-side z-[999999]">
                    <ul className="menu p-4 w-full bg-[#63257B] h-screen overflow-hidden text-base-content flex flex-col">

                        <div className='flex justify-between items-center pb-12 w-full'>
                            <Image src={"/logoWhite.png"} className={'lg:w-[235px] w-[154px]'} width={154} height={32} />
                            <label htmlFor="my-drawer-4" aria-label="close sidebar">
                                <TextIcon text="Close" textClass="sf-pro text-white !text-[12px] pr-4 " iconSrc="/closeWhite.svg" iconWidth={24} mainClass="flex drawer-overlay items-center flex-row-reverse" />
                            </label>
                        </div>
                        {/* Sidebar content here */}
                        <div className='pl-12 space-y-2 w-full' htmlFor="my-drawer-4" aria-label="close sidebar">
                            <Text className='text-white !font-light cursor-pointer clash-display !text-[32px]' align="left" onClick={() => handleClick('shop')}>
                                <label htmlFor="my-drawer-4" aria-label="close sidebar">

                                    Shop
                                </label>
                            </Text>
                            <Text className='text-white !font-light cursor-pointer clash-display !text-[32px]' align="left" onClick={() => handleClick('sell')}>
                                <label htmlFor="my-drawer-4" aria-label="close sidebar">

                                    Sell
                                </label>
                            </Text>
                            <Text className='text-white !font-light cursor-pointer clash-display !text-[32px]' align="left" onClick={() => handleClick('ship')}>
                                <label htmlFor="my-drawer-4" aria-label="close sidebar">

                                    Ship
                                </label>
                            </Text>
                            <Text className='text-white !font-light cursor-pointer clash-display !text-[32px]' align="left" onClick={() => handleClick('partnerships')}>
                                <label htmlFor="my-drawer-4" aria-label="close sidebar">

                                    Partnerships
                                </label>
                            </Text>
                            <Text className='text-white !font-light cursor-pointer clash-display !text-[32px]' align="left" onClick={() => handleClick('royal')}>
                                <label htmlFor="my-drawer-4" aria-label="close sidebar">

                                    Royal
                                </label>
                            </Text>
                            <Text className='text-white !font-light cursor-pointer clash-display !text-[32px]' align="left" onClick={() => handleClick('track')}>
                                <label htmlFor="my-drawer-4" aria-label="close sidebar">

                                    Track
                                </label>
                            </Text>


                            <Text className='text-white !font-light cursor-pointer clash-display !text-[32px]' align="left" onClick={() => handleClick('help')}>

                                <label htmlFor="my-drawer-4" aria-label="close sidebar">Help
                                </label>
                            </Text>
                            <div className='pt-10 space-y-4'>
                                <TextIcon text="Sign in" textClass="sf-pro text-white !text-[20px] border-b border-white " iconSrc="/signin.svg" iconWidth={18} mainClass="flex drawer-overlay items-center space-x-3" />
                                <TextIcon text="Get Started" textClass="sf-pro text-white !text-[20px] border-b border-white " iconSrc="/signin.svg" iconWidth={18} mainClass="flex drawer-overlay items-center space-x-3" />

                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div >
    )
}
