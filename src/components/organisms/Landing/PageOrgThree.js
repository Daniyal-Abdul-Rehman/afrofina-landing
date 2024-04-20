import React from 'react'
import { Image, AnimatedElement } from '@/components/atoms'
import { Card } from '@/components/molecules'
export default function PageOrgThree() {
  return (
    <AnimatedElement>
      <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-0 pt-10 animate-slide-in'>
        <Image src={'/landing/PageOrgThree/first.svg'} width={720} height={720} className={'w-full lg:rounded-[20px] rounded-none'} />
        <Card header="Become an Afrofina vendor now."
          isTextIcon
          textIconsIcon={'/landing/PageOrgThree/icons/store.svg'}
          textIconsText="Afrofina Vendors ?"
          isBorderd={false}
          mainClass='lg:rounded-[20px] rounded-none flex  flex-col items-center justify-center lg:px-12 px-6 lg:py-0 py-8 space-y-6'
          bgColor="bg-[#63257B]"
          headerClass='text-white'
          descriptionClass='text-white'
          description="Have product that you would like to sell or scale afrofina helps you take your 
        business,store from local to international, get your products out there to millions
        of customers now."
          buttonText="I want to become a vendor"
          isButtonIcon={true} buttonIcon={'/rightIconPurple.svg'}
          buttonClass='bg-white px-5 text-[#63257B] rounded-full py-2 flex items-center'
        />
      </div>
    </AnimatedElement>
  )
}
