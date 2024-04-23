import React from 'react'
import { Image, Text, Button } from "../../atoms"
import Link from 'next/link'
import { TextIcon } from '@/components/molecules'
export default function Header() {
    return (
        <div className='p-4 flex justify-between px-6 border-b border-primary'>
            <Image src={"/logo.svg"} width={235} height={32} />
            <div className='lg:flex hidden items-center space-x-12'>
                <Link href={"https://afrofina-user.vercel.app/ecom/shop"}>
                    <Text>
                        Shop
                    </Text>
                </Link>
                <Link href={"/"}>
                    <Text>
                        Sell
                    </Text>
                </Link>
                <Link href={"https://afrofina-user.vercel.app/ecom/ship/u-cargo-agent"}>
                    <Text>
                        Ship
                    </Text>
                </Link>
                <Link href={"/"}>
                    <Text>
                        Partnerships
                    </Text>
                </Link>
                <Link href={"https://afrofina-user.vercel.app/ecom/explore/royal"}>
                    <Text>
                        Royal
                    </Text>
                </Link>
                <Link href={"https://afrofina-user.vercel.app/ecom/orders"}>
                    <Text>
                        Track
                    </Text>
                </Link>
                <Link href={"https://afrofina-user.vercel.app/ecom/support"}>
                    <Text>
                        Help
                    </Text>
                </Link>
            </div>
            <div className='lg:flex hidden items-center space-x-3'>
                <Link href={"https://afrofina-user.vercel.app/ecom/auth/sign-in"}>
                    <Text>
                        Sign in
                    </Text>
                </Link>
                <Link href={"https://afrofina-user.vercel.app/ecom/auth/sign-up"}>
                    <Button className="bg-primary rounded-full flex py-2 px-3">

                        <TextIcon text="Get Started"  iconSrc="/landing/logo-short.svg" textClass="text-black" iconWidth={41} mainClass="flex py-0 items-center space-x-3"/>
                    </Button>
                </Link>
            </div>
            <TextIcon text="Menu" textClass="sf-pro text-black !text-[12px] pr-4 " iconSrc="/landing/burger.svg" iconWidth={24} mainClass="flex lg:hidden flex-row-reverse items-center " />
        </div>
    )
}
