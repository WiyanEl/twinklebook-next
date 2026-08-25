'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function Location({ isOpen, isMobile }: Props) {
  return (
    <>
      <div id="location" className="relative z-10 w-full bg-[url('/images/arya-dan-rana/mobile/bg-location.png')] bg-cover bg-no-repeat overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[#DCCB9F]/10 mix-blend-multiply" />

        <div className="relative z-[3] h-full text-center font-cormorantgaramond text-[#001A3B] pt-[78px] pb-[106px]">
          <h2 className="font-bochan text-2xl animate" data-animate="fade-up">Event Detail</h2>

          <Image src="/images/arya-dan-rana/mobile/img-gelas-location.png" alt="Picture of gelas location" width={63} height={92} className="mx-auto pointer-events-none mt-7 animate" data-animate="fade-up" />

          <h6 className="font-bochan text-base text-[#6D761C] mt-4 animate" data-animate="fade-up">Villa Ombak Biru</h6>
          <p className="font-medium text-[14px] animate mt-3.5" data-animate="fade-up">Jalan Batu Belig Gang Phalosa, Bali</p>
          <Link href="https://maps.app.goo.gl/WsAG8URLfmrWGi3p8" target="_blank" className="inline-block border-b-[1px] border-[#001A3B] mt-3 animate" data-animate="fade-up">
            <span className="text-[14px] font-medium leading-[17.16px] text-[#001A3B] uppercase">google maps</span>
          </Link>

          <h6 className="font-bochan text-[15px] text-[#6D761C] mt-[38px] animate" data-animate="fade-up">Wedding Party</h6>
          <p className="font-semibold text-lg uppercase mt-4 animate" data-animate="fade-up">17:00 wita</p>

          <h6 className="font-bochan text-[15px] text-[#6D761C] mt-9 animate" data-animate="fade-up">After Party</h6>
          <p className="font-semibold text-lg uppercase mt-4 animate" data-animate="fade-up">00:00 wita</p>
        </div>

        {/* Image Absolute */}
        <Image src="/images/arya-dan-rana/mobile/img-kiri-atas-location.png" alt="Picture of gambar kiri atas location" width={138} height={245} className={`absolute z-[3] left-0 top-0 pointer-events-none`} />
        <Image src="/images/arya-dan-rana/mobile/img-kanan-atas-location.png" alt="Picture of gambar kanan atas location" width={275} height={274} className={`w-[225px] absolute z-[3] right-0 top-0 pointer-events-none`} />

        <Image src="/images/arya-dan-rana/mobile/img-kiri-bawah-location.png" alt="Picture of gambar kiri bawah location" width={319} height={253} className={`w-[205px] absolute z-[3] left-0 bottom-0 pointer-events-none`} />
        <Image src="/images/arya-dan-rana/mobile/img-kanan-bawah-location.png" alt="Picture of gambar kiri bawah location" width={153} height={273} className={`w-[125px] absolute z-[3] right-0 bottom-0 pointer-events-none`} />
      </div>
    </>
  )
}