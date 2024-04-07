import React from 'react'
import { Text, Image } from '../atoms'
export default function Counter({mainClass,textClass}) {
  return (
    <div className={mainClass}>
      <Image src={'/shop/product/subtract.svg'} width={16} />
      <Text className={textClass}>
        1
      </Text>
      <Image src={'/shop/product/add.svg'} width={16} />
    </div>
  )
}
Counter.defaultProps={
  mainClass:'flex border border-[#D8D8D8] space-x-4 py-0.5 rounded',
  textClass:"text-black !text-[14px] sf-pro"
}
