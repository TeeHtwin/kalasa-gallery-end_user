import React from 'react'
import Title from './components/common/Title'
import Main from './components/home/Main'
import Image from 'next/image'
const page = () => {
  return (
    <main className='bgImg relative p-0 m-0 flex items-center justify-center'>
  
  <div className="w-[900px] h-96 flex-col justify-start items-center gap-10 inline-flex">
    <Title className="text-white text-[88px] font-bold">Kalasa Art Space</Title>
    <Title className="w-[900px] text-center text-amber-100 text-5xl font-bold">A Space where there is Heart, there is Art</Title>
    <p className="text-center w-full text-white text-xl font-medium font-['Inter'] leading-10">We need to work then give time for Heart. If you would love to feed your soul and heart, don’t forget to visit Kalasa Art. You can enjoy various art works for your soul and fresh healthy juice for your body here. Don’t miss it out, my dear all. We open daily 9:30 Am to 9:00 Pm daily.</p>
</div>

      
    </main>
  )
}

export default page

