'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Reservation from './Reservation'

type Props = {
  data: any
  isOpen: boolean
}

export default function Dresscode({ data, isOpen }: Props) {
  return (
    <>
      <div className="relative w-full">
        <div className="absolute inset-0 bg-[#F8F4EE]" />
        <div className="absolute inset-0 bg-[url('/images/ronald-dan-vissi/mobile/bg-profile.png')] bg-cover bg-center bg-no-repeat" />

        <section id="dresscode" className="relative w-full min-h-min">
          <div className="relative text-center h-full font-cormorantgaramond text-black pt-[79px] pb-[104px]">
            <h2 className="font-slight [-webkit-text-stroke:0.5px_black] text-[28px] leading-[25px] animate" data-animate="fade-up">Dress Code</h2>

            <p className="text-[15px] leading-[20px] mt-[32px] animate" data-animate="fade-up">
              Attire in colors from the suggested palette <br /> is greatly appreciated.
            </p>

            <div className="flex justify-center w-full mt-[37px] mx-auto">
              <div className="w-[60px] h-[60px] rounded-full bg-white shadow-[0px_4px_7.1px_0px_#00000029] animate" data-animate="fade-right" />
              <div className="w-[60px] h-[60px] rounded-full bg-[#E9D7BF] -ml-4 shadow-[0px_4px_7.1px_0px_#00000029] animate" data-animate="fade-down" />
              <div className="w-[60px] h-[60px] rounded-full bg-[#976D55] -ml-4 shadow-[0px_4px_7.1px_0px_#00000029] animate" data-animate="fade-up" />
              <div className="w-[60px] h-[60px] rounded-full bg-[#5A3A11] -ml-4 shadow-[0px_4px_7.1px_0px_#00000029] animate" data-animate="fade-left" />
            </div>
          </div>
        </section>

        <Reservation data={data} />
      </div>
    </>
  )
}