'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Location from './Location'
import Reservation from './Reservation'
import Gallery from './Gallery'
import WeddingGift from './WeddingGift'
import Wishes from './Wishes'
import Footer from './Footer'

type WrapperProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  isMobile: boolean
}

export default function WrapperBootom({ isOpen, setIsOpen, isMobile }: WrapperProps) {
  return (
    <div className="relative w-full overflow-y-hidden">
      <Location isOpen={isOpen} isMobile={isMobile} />
      <Gallery isOpen={isOpen} isMobile={isMobile} />
      <Reservation isOpen={isOpen} isMobile={isMobile} />
      <WeddingGift isOpen={isOpen} isMobile={isMobile} />
      <Wishes isOpen={isOpen} isMobile={isMobile} />
      <Footer isOpen={isOpen} isMobile={isMobile} />


      <Image src="/images/kevin-dan-michelle/img-tanaman-bawah-footer-mobile.png" alt="Picture of tanaman bawah bagian footer" width={501} height={448} className="md:hidden absolute bottom-0 right-0 w-[300px]" />
      <Image src="/images/kevin-dan-michelle/img-tanaman-bawah-footer.png" alt="Picture of tanaman bawah bagian footer" width={1522} height={1464} className="hidden md:block absolute bottom-0 right-0 w-[1200px]" />

      <Image src="/images/kevin-dan-michelle/bg-lapisan-tengah-full-bottom-mobile.png" alt="Picture of background lapisan tengah" width={346} height={4254} className="md:hidden absolute z-0 -top-[125px] left-1/2 -translate-x-1/2" />
      <Image src="/images/kevin-dan-michelle/bg-lapisan-atas-full-bottom-mobile.png" alt="Picture of background lapisan atas" width={308} height={4238} className="md:hidden absolute z-0 -top-[100px] left-1/2 -translate-x-1/2" />

      {/* <Image src="/images/kevin-dan-michelle/bg-lapisan-tengah-bottom-1-mobile.png" alt="Picture of background lapisan tengah" width={345} height={626} className="md:hidden absolute bottom-[400px] left-1/2 -translate-x-1/2" />

      <Image src="/images/kevin-dan-michelle/bg-lapisan-tengah-bottom-mobile.png" alt="Picture of background lapisan tengah" width={345} height={626} className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2" />
      <Image src="/images/kevin-dan-michelle/bg-lapisan-atas-bottom-mobile.png" alt="Picture of background lapisan atas" width={308} height={600} className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2" />
      <Image src="/images/kevin-dan-michelle/bg-lapisan-atas-bottom-1-mobile.png" alt="Picture of background lapisan atas" width={308} height={600} className="md:hidden absolute bottom-[435px] left-1/2 -translate-x-1/2" /> */}

      <Image src="/images/kevin-dan-michelle/bg-lapisan-tengah-full-bottom.png" alt="Picture of background lapisan tengah" width={1530} height={6939} className="hidden md:block absolute -top-[80px] left-1/2 -translate-x-1/2" />
      <Image src="/images/kevin-dan-michelle/bg-lapisan-atas-full-bottom.png" alt="Picture of background lapisan atas" width={1338} height={6919} className="hidden md:block absolute -top-[330px] left-1/2 -translate-x-1/2" />
    </div>
  )
}