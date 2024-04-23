"use client"
import React from 'react'
import { Card } from '@/components/molecules'
import { Carousel, Image, AnimatedElement } from '@/components/atoms'

export default function PageOrgOne() {
    return (

        <div className='grid lg:grid-cols-3 grid-cols-1  lg:gap-5 gap-0 lg:space-y-0 space-y-5 lg:p-5 p-2 animate-slide-in'>
            <div className='col-span-2'>
                <Carousel
                    next={() => {/* Do stuff */ }}
                    prev={() => {/* Do other stuff */ }}
                >
                    <div className='relative lg:!h-[600px] h-400px  rounded-lg overflow-hidden'>
                        <Image src={"/landing/PageOrgOne/first.svg"} width={921} height={600} className={"w-full rounded-lg "} priority={true} />
                        <Card mainClass="absolute bottom-0 border-l-[3.6px] border-white pl-3 lg:ml-14 ml-6 mb-8 space-y-4"
                            header="Shop for loved ones"
                            description="Put a smile on the faces of people you love by sending them gifts with Afrofina, "
                            isButton={false}
                            isBorderd={false}
                            headerClass="text-white custom-font !tracking-widest"
                            descriptionClass="text-white"
                            bgColor="bg-none"
                            textAlign='left'
                        />
                    </div>

                    <div className='relative lg:!h-[600px] h-400px'>
                        <Image src={"/landing/PageOrgOne/second.svg"} width={921} height={600} className={"w-full rounded-lg"} priority={true} />
                        <Card mainClass="absolute bottom-0 border-l-[3.6px] border-white pl-3 lg:ml-14 ml-6 mb-8 space-y-4"
                            header="Home delivery"
                            description="Get your package delivered right to your door step with Afrofina shipping."
                            isButton={false}
                            isBorderd={false}
                            headerClass="text-white custom-font !tracking-widest"
                            descriptionClass="text-white"
                            bgColor="bg-none"
                            textAlign='left'
                        />
                    </div>
                    <div className='relative lg:!h-[600px] h-400px'>
                        <Image src={"/landing/PageOrgOne/third.svg"} width={921} height={600} className={"w-full rounded-lg"} priority={true} />
                        <Card mainClass="absolute bottom-0 border-l-[3.6px] border-white pl-3 lg:ml-14 ml-6 mb-8 space-y-4"
                            header="Grocery Shopping"
                            description="Buy groceries for yourself and your loved ones in different cities with afrofina."
                            isButton={false}
                            isBorderd={false}
                            headerClass="text-white custom-font !tracking-widest"
                            descriptionClass="text-white"
                            bgColor="bg-none"

                            textAlign='left'
                        />
                    </div>
                </Carousel>

            </div>
            <div className='space-y-6'>
                <AnimatedElement>
                    <Card isBorderd={false} isButtonIcon={true} buttonIcon={'/landing/PageOrgOne/icons/store.svg'}
                        buttonClass='bg-dark px-5 text-primary rounded-full py-2 flex flex-row-reverse items-center'
                        headerClass="custom-font !text-black lg:!text-[24px] !tracking-widest !text-[20px]" />
                </AnimatedElement>
                <AnimatedElement>
                    <Card header="Get a Quote"
                        headerClass="custom-font !text-black lg:!text-[24px] !tracking-widest !text-[20px]"
                        description="Get an estimated cost for your package,
                                    compare estimates and find the best 
                                    cost to match your budget."
                        buttonText="Get quote" isBorderd={true} isButtonIcon={true} buttonIcon={'/landing/PageOrgOne/icons/list.svg'}
                        buttonClass='bg-dark px-5 text-white rounded-full py-2 flex flex-row-reverse items-center' />
                </AnimatedElement>
            </div>
        </div>
    )
}
