'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Reservation from './Reservation'
import Rsvp from '../rsvp/RSVPBased'

type Props = {
  data: any
  isOpen: boolean
}

export default function Dresscode({ data, isOpen }: Props) {
  return (
    <>
      <div className="relative w-full min-h-screen bg-[url('/images/arya-dan-rana/mobile/bg-dresscode.png')] bg-cover bg-no-repeat overflow-hidden pb-[209px]">
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[#DCCB9F]/10 mix-blend-multiply" />
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-[70vh] z-[2] bg-[linear-gradient(180deg,#FEF7ED_0%,#FEF7ED_50%,rgba(254,247,237,0)_100%)]" />

        <section id="dresscode" className="relative w-full min-h-min">
          <div className="relative z-[3] min-h-min text-center font-cormorantgaramond text-[#001A3B] pt-[157px]">
            <h2 className="font-bochan text-2xl uppercase animate" data-animate="fade-up">dress code</h2>

            <p className="text-[15px] text-[#1B1C1D] leading-[20px] mt-[30px] animate" data-animate="fade-up">We'd love to see you dressed in <br /> Tropical Formal attire.</p>

            <Image src="/images/arya-dan-rana/mobile/img-dresscode.png" alt="Picture of dresscode" width={276} height={174} className="mx-auto pointer-events-none mt-[14px] animate" data-animate="fade-up" />

            <p className="text-[14px] text-[#1B1C1D] italic leading-[20px] animate" data-animate="fade-up">
              As we'll be celebrating by the beach, <br />
              comfortable shoes and breathable fabrics <br />
              are warmly encouraged.
            </p>
          </div>

          {/* Image Absolute */}
          <Image src="/images/arya-dan-rana/mobile/img-atas-dresscode.png" alt="Picture of gambar atas dresscode" width={616} height={389} className={`absolute z-[3] left-0 top-0 pointer-events-none`} />
        </section>

        <Rsvp data={data} />

        {/* Image Absolute */}
        <Image src="/images/arya-dan-rana/mobile/img-bawah-dresscode.png" alt="Picture of gambar bawah dresscode" width={584} height={589} className={`absolute z-[3] left-0 bottom-0 pointer-events-none`} />
      </div>
    </>
  )
}