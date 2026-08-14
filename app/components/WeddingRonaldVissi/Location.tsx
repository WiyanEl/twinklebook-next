'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  data: any
  isOpen: boolean
}

export function formatTime(date: string) {
  return new Intl.DateTimeFormat('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
    .format(new Date(date))
    .replace(':', '.')
}

export default function Location({ data, isOpen }: Props) {
  const dataEventSession = data.eventSession

  return (
    <>
      <section id="location" className="relative w-full">
        <div className="relative text-center h-full font-cormorantgaramond py-[80px] px-[25px]">
          <div className="w-full h-full bg-[#EBE8E5] rounded-[30px] py-[80px] text-black">
            <h2 className="font-slight [-webkit-text-stroke:0.5px_black] text-[28px] leading-[25px] mt-4 animate" data-animate="fade-up">Time & Location</h2>

            <Image src="/images/ronald-dan-vissi/mobile/img-imah-seniman.png" alt="Picture of Imah seniman" width={331} height={221} className="mx-auto pointer-events-none animate" data-animate="fade-up" />
            <p className="text-base font-bold leading-[20px] text-[#A4753A] uppercase mt-1 animate" data-animate="fade-up">{dataEventSession[0]?.addressName}</p>
            <p className="text-[15px] leading-[20px] mt-0.5 animate" data-animate="fade-up">Jl. Kolonel Masturi No. VIII, Bandung</p>
            <Link href="https://maps.app.goo.gl/64m21hxcrHcmVFYX9" target="_blank" className="relative flex items-center justify-center w-[160px] h-[33px] bg-[#473B2F] mt-[14px] rounded-[6px] mx-auto animate" data-animate="fade-up">
              <span className="text-[15px] leading-[17.16px] text-white uppercase">google maps</span>
            </Link>

            <p className="text-base font-bold leading-[20px] text-[#A4753A] uppercase mt-[40px]" data-animate="fade-up">holy matrimony</p>
            <p className="text-[15px] leading-[20px] mt-1.5 uppercase animate" data-animate="fade-up">{formatTime(dataEventSession[0]?.date)} wib</p>

            <p className="text-base font-bold leading-[20px] text-[#A4753A] uppercase mt-[30px] animate" data-animate="fade-up">teapai</p>
            <p className="text-[15px] leading-[20px] mt-1.5 uppercase animate" data-animate="fade-up">{formatTime(dataEventSession[1]?.date)} wib</p>

            <p className="text-base font-bold leading-[20px] text-[#A4753A] uppercase mt-[30px] animate" data-animate="fade-up">resepsi</p>
            <p className="text-[15px] leading-[20px] mt-1.5 uppercase animate" data-animate="fade-up">{formatTime(dataEventSession[2]?.date)} wib</p>
          </div>
        </div>
      </section>
    </>
  )
}