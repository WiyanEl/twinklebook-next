'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  data: any
  isOpen: boolean
}

export default function Profile({ data, isOpen }: Props) {
  return (
    <>
      <section id="profile" className="relative w-full min-h-screen">
        <div className="absolute inset-0 bg-[#F8F4EE]" />
        <div className="absolute inset-0 bg-[url('/images/ronald-dan-vissi/mobile/bg-profile.png')] bg-cover bg-center bg-no-repeat" />

        <div className="relative text-center h-full font-cormorantgaramond text-black pt-[73px] pb-[87px]">
          <p className="text-[15px] md:text-[22px] leading-[20px] md:leading-[30px] animate" data-animate="fade-up">
            By the Grace of Our God <br /> We request the honour of your presence <br className="md:hidden" /> of our wedding
          </p>

          <h2 className="font-slight text-2xl text-[#A4753A] mt-[54px] animate" data-animate="fade-up">
            Ronald Setyadi
          </h2>
          <Image src="/images/ronald-dan-vissi/mobile/img-pengantin-pria.png" alt="Picture of Pengantin pria" width={200} height={200} className="mx-auto mt-[52px] pointer-events-none animate" data-animate="fade-up" />
          <p className="text-[15px] md:text-[22px] leading-[20px] md:leading-[30px] mt-4 animate" data-animate="fade-up">
            The Son of
          </p>
          <p className="text-[15px] md:text-[22px] leading-[24px] md:leading-[30px] mt-1.5 animate" data-animate="fade-up">
            Mr. Suhadi (†) & Mrs. Lili Rumsari
          </p>

          <h2 className="font-slight text-2xl text-[#A4753A] mt-[44px] animate" data-animate="fade-up">
            Vissi El Alexandra
          </h2>
          <Image src="/images/ronald-dan-vissi/mobile/img-pengantin-wanita.png" alt="Picture of Pengantin wanita" width={200} height={200} className="mx-auto mt-[52px] pointer-events-none animate" data-animate="fade-up" />
          <p className="text-[15px] md:text-[22px] leading-[20px] md:leading-[30px] mt-4 animate" data-animate="fade-up">
            The Daughter of
          </p>
          <p className="text-[15px] md:text-[22px] leading-[24px] md:leading-[30px] mt-1.5 animate" data-animate="fade-up">
            Mr. Santo Herawan & Mrs. Melan
          </p>

          <p className="text-[15px] md:text-[22px] leading-[20px] md:leading-[30px] mt-[52px] animate" data-animate="fade-up">
            We would be honoured <br /> by your presence and blessing.
          </p>
        </div>
      </section>
    </>
  )
}