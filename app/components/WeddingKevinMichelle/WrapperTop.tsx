'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Hero from './Hero'
import Profile from './Profile'
import CountingDown from './CountingDown'
import JourneyLove from './JourneyLove'

type WrapperProps = {
  data: any
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  isMobile: boolean
}

export default function WrapperTop({ data, isOpen, setIsOpen, isMobile }: WrapperProps) {
  return (
    <div className="relative w-full overflow-y-hidden">
      <Hero data={data} isOpen={isOpen} setIsOpen={setIsOpen} isMobile={isMobile} />
      <Profile isOpen={isOpen} isMobile={isMobile} />
      <JourneyLove isOpen={isOpen} isMobile={isMobile} />
      <CountingDown isOpen={isOpen} isMobile={isMobile} />

      <Image src="/images/kevin-dan-michelle/img-bunga-kiri-atas-hero-mobile.png" alt="Picture of Bunga bagian kiri atas" width={593} height={394} className="md:hidden absolute top-0 left-0 w-[593px]" />
      <Image src="/images/kevin-dan-michelle/img-bunga-kiri-atas-hero.png" alt="Picture of Bunga bagian kiri atas" width={1000} height={1000} className="hidden md:block absolute top-0 left-0" />

      <Image src="/images/kevin-dan-michelle/bg-lapisan-tengah-full-mobile.png" alt="Picture of background lapisan tengah" width={345} height={514} className="md:hidden absolute top-[80px] left-1/2 -translate-x-1/2 w-[345px]" />
      <Image src="/images/kevin-dan-michelle/bg-lapisan-atas-full-mobile.png" alt="Picture of background lapisan atas" width={308} height={500} className="md:hidden absolute top-[100px] left-1/2 -translate-x-1/2 w-[308px]" />
      <Image src="/images/kevin-dan-michelle/bg-lapisan-tengah-full.png" alt="Picture of background lapisan tengah" width={1530} height={4304} className="hidden md:block absolute top-[116px] left-1/2 -translate-x-1/2" />
      <Image src="/images/kevin-dan-michelle/bg-lapisan-atas-full.png" alt="Picture of background lapisan atas" width={1308} height={4205} className="hidden md:block absolute top-[197px] left-1/2 -translate-x-1/2" />
    </div>
  )
}