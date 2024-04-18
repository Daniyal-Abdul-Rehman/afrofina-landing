'use client'
import Input from "@/components/atoms/Input";
import { Text,Image } from "@/components/atoms";
import { HeaderLanding } from "@/components/organisms";
import dynamic from 'next/dynamic'
import { FaqLanding, PageOrgTen,FooterLanding } from "@/components/organisms";
import withLazyLoad from "@/components/organisms/withLazy";
const PageOrgOne = dynamic(() => import('@/components/organisms/Landing/PageOrgOne'))
const PageOrgTwo = dynamic(() => import('@/components/organisms/Landing/PageOrgTwo'))
const PageOrgThree = dynamic(() => import('@/components/organisms/Landing/PageOrgThree'))
const PageOrgFour = dynamic(() => import('@/components/organisms/Landing/PageOrgFour'))
const PageOrgFive = dynamic(() => import('@/components/organisms/Landing/PageOrgFive'))
const PageOrgSix = dynamic(() => import('@/components/organisms/Landing/PageOrgSix'))
const PageOrgSeven = dynamic(() => import('@/components/organisms/Landing/PageOrgSeven'))
const PageOrgEight = dynamic(() => import('@/components/organisms/Landing/pageOrgEight'))
const PageOrgNine = dynamic(() => import('@/components/organisms/Landing/pageOrgNine'))

const LazyPageOrgOne=withLazyLoad(PageOrgOne)
const LazyPageOrgTwo=withLazyLoad(PageOrgTwo)
const LazyPageOrgThree=withLazyLoad(PageOrgThree)
const LazyPageOrgFour=withLazyLoad(PageOrgFour)
const LazyPageOrgFive=withLazyLoad(PageOrgFive)
const LazyPageOrgSix=withLazyLoad(PageOrgSix)
const LazyPageOrgSeven=withLazyLoad(PageOrgSeven)
const LazyPageOrgEight=withLazyLoad(PageOrgEight)
const LazyPageOrgNine=withLazyLoad(PageOrgNine)
export default function Home() {
  return (
    <div className="bg-light-gray h-screen overflow-auto ">

      <HeaderLanding />
      <div className="">
        <LazyPageOrgOne />
        <div className="lg:p-5 p-0">
        <LazyPageOrgTwo />
        <LazyPageOrgThree />
        </div>
        <LazyPageOrgFour />
        <LazyPageOrgFive />
        <LazyPageOrgSix />
        <LazyPageOrgSeven />
        <LazyPageOrgEight />
        <LazyPageOrgNine />
        <FaqLanding />
        <PageOrgTen />
        <div className="flex justify-center py-12">
          <Image src={'/landing/logo.svg'} width={800}/>
        </div>
        <FooterLanding/>

        <Text className="text-black !text-[18px]  sf-pro pt-8 pb-6" align="center">
                All rights reserved | Afrofina  2023
            </Text>
      </div>
    </div>
  );
}
