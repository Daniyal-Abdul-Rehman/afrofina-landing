
'use client'
import { useEffect, useRef } from "react";
import dynamic from 'next/dynamic'
import Input from "@/components/atoms/Input";

import { Text, Image, AnimatedElement } from "@/components/atoms";
import { HeaderLanding } from "@/components/organisms";
import { PageOrgOne, PageOrgTwo, PageOrgThree, PageOrgFour, PageOrgFive, PageOrgSix, PageOrgEight, PageOrgNine, FaqLanding, PageOrgTen, FooterLanding } from "@/components/organisms";
const PageOrgSeven = dynamic(() => import('../components/organisms/Landing/PageOrgSeven'))

export default function Home() {
  const refShop = useRef(null);
  const refSell = useRef(null);
  const refShip = useRef(null);
  const refPartnerships = useRef(null)
  const refRoyal = useRef(null);
  const refTrack = useRef(null);
  const refHelp = useRef(null);
  const handleClick = (val) => {
    console.log(val, refShop)
    if (val === 'shop') {
      refShop.current?.scrollIntoView({ behavior: 'smooth' });
    }
    if (val === 'sell') {
      refSell.current?.scrollIntoView({ behavior: 'smooth' });
    }
    if (val === 'ship') {
      refShip.current?.scrollIntoView({ behavior: 'smooth' });
    }
    if (val === 'partnerships') {
      refPartnerships.current?.scrollIntoView({ behavior: 'smooth' });
    }
    if (val === 'royal') {
      refRoyal.current?.scrollIntoView({ behavior: 'smooth' });
    }
    if (val === 'track') {
      refTrack.current?.scrollIntoView({ behavior: 'smooth' });
    }
    if (val === 'help') {
      refHelp.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(()=>{
    localStorage.setItem('isVideoPlaying',true)
  },[])
  return (
    <div className="bg-light-gray h-screen overflow-auto ">

      <HeaderLanding handleClick={handleClick} />
      <div className="">
        <PageOrgOne />
        <div className="lg:p-5 p-0" >
          <PageOrgTwo refShop={refShop} />
        </div>

        <PageOrgThree refSell={refSell} />
        <PageOrgFour refShip={refShip} />
        <PageOrgFive refPartnerships={refPartnerships}/>
        <PageOrgSix refRoyal={refRoyal}/>
        <PageOrgSeven refTrack={refTrack} playing={true}/>
        <PageOrgEight />
        <PageOrgNine />
        <FaqLanding refHelp={refHelp}/>
        <PageOrgTen />
        <div className="flex justify-center py-12">
          <AnimatedElement>
            <Image src={'/landing/logo.svg'} width={800} />
          </AnimatedElement>
        </div>
        <FooterLanding />

        <Text className="text-black !text-[18px]  sf-pro pt-8 pb-6" align="center">
          All rights reserved | Afrofina  2023
        </Text>
      </div>
    </div>
  );
}