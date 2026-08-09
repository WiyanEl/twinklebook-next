'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  data: any
  isOpen: boolean
}

export default function Location({ data, isOpen }: Props) {
  return (
    <>
      <section id="location" className="relative w-full min-h-screen bg-[#DFD5CC]">
        <div className="relative text-center h-full font-cormorantgaramond py-[80px] px-[25px]">
          <div className="w-full md:w-[701px] h-full bg-[#EBE8E5] rounded-[30px] md:rounded-[60px] py-[80px] md:py-[120px] text-black md:mx-auto">
            <h2 className="font-slight text-[28px] md:text-[48px] leading-[25px] animate" data-animate="fade-up">Time & Location</h2>

            <Image src="/images/ronald-dan-vissi/mobile/img-imah-seniman.png" alt="Picture of Imah seniman" width={331} height={221} className="mx-auto pointer-events-none md:w-[500px] md:h-auto animate" data-animate="fade-up" />
            <p className="text-base leading-[20px] text-[#A4753A] uppercase mt-1 animate md:text-[22px] md:leading-[24px] md:mt-2" data-animate="fade-up">imah seniman</p>
            <p className="text-[15px] md:text-xl leading-[20px] mt-0.5 md:mt-1.5 animate" data-animate="fade-up">Jl. Kolonel Masturi No. VIII, Bandung</p>
            <Link href="https://maps.app.goo.gl/JamiHKG345ut2giV8" target="_blank" className="relative flex items-center justify-center w-[160px] md:w-[220px] h-[33px] md:h-[40px] bg-[#473B2F] mt-[14px] rounded-[6px] mx-auto animate" data-animate="fade-up">
              <span className="text-[15px] md:text-xl leading-[17.16px] text-white uppercase">google maps</span>
            </Link>

            <p className="text-base leading-[20px] text-[#A4753A] uppercase mt-[40px] md:mt-[50px] animate md:text-[22px] md:leading-[24px]" data-animate="fade-up">holy matrimony</p>
            <p className="text-[15px] md:text-xl leading-[20px] mt-0.5 md:mt-1.5 animate" data-animate="fade-up">12.00 wib</p>

            <p className="text-base leading-[20px] text-[#A4753A] uppercase mt-[30px] animate md:text-[22px] md:leading-[24px]" data-animate="fade-up">teapai</p>
            <p className="text-[15px] md:text-xl leading-[20px] mt-0.5 md:mt-1.5 animate" data-animate="fade-up">16.00 wib</p>

            <p className="text-base leading-[20px] text-[#A4753A] uppercase mt-[30px] animate md:text-[22px] md:leading-[24px]" data-animate="fade-up">resepsi</p>
            <p className="text-[15px] md:text-xl leading-[20px] mt-0.5 md:mt-1.5 animate" data-animate="fade-up">18.00 wib</p>
          </div>
        </div>
      </section>
    </>
  )
}