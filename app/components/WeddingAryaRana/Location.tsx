'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'

type Props = {
  data: any
  isOpen: boolean
}

export default function Location({ data, isOpen }: Props) {
  const dataEventSession = data.eventSession

  return (
    <>
      <div id="location" className="relative w-full md:min-h-screen bg-[url('/images/arya-dan-rana/mobile/bg-location.png')] md:bg-[url('/images/arya-dan-rana/dekstop/bg-location.png')] bg-cover bg-no-repeat md:flex md:items-center md:justify-center">
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[#DCCB9F]/20 mix-blend-multiply" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[60vh] md:h-[80vh] z-[2] bg-[linear-gradient(180deg,rgba(254,247,237,0)_0%,#FEF7ED_100%)]" />

        <div className="relative z-[3] h-full text-center font-cormorantgaramond text-[#001A3B] pt-[78px] md:pt-0 pb-[229px] md:pb-0">
          <h2 className="font-bochan text-2xl md:text-[32px] animate" data-animate="fade-up">Event Detail</h2>

          <Image src="/images/arya-dan-rana/mobile/img-gelas-location.png" alt="Picture of gelas location" width={109} height={146} className="mx-auto w-[67px] md:w-[109px] pointer-events-none mt-7 md:mt-[56px] animate" data-animate="fade-up" />

          <h6 className="font-bochan text-base md:text-[22px] text-[#6D761C] mt-4 md:mt-[40px] animate" data-animate="fade-up">Villa Ombak Biru</h6>
          <p className="font-medium text-[14px] md:text-xl animate mt-3.5 md:mt-[25px]" data-animate="fade-up">Jalan Batu Belig Gang Phalosa, Bali</p>
          <Link href="https://maps.app.goo.gl/WsAG8URLfmrWGi3p8" target="_blank" className="inline-block border-b-[1px] border-[#001A3B] mt-3 animate" data-animate="fade-up">
            <span className="text-[14px] md:text-[17px] font-medium leading-[17.16px] md:leading-none text-[#001A3B] uppercase">google maps</span>
          </Link>

          {dataEventSession?.map((session: any, index: number) => (
            <div key={session.id}>
              <h6
                className="font-bochan text-[15px] md:text-[22px] text-[#6D761C] mt-[38px] md:mt-[60px] animate"
                data-animate="fade-up"
              >
                {session.name || 'Wedding Party'}
              </h6>

              <p
                className="font-semibold text-lg md:text-xl uppercase mt-4 md:mt-5 animate"
                data-animate="fade-up"
              >
                {moment(session.date).format('HH:mm')} WITA
              </p>
            </div>
          ))}
        </div>

        {/* Image Absolute */}
        <Image src="/images/arya-dan-rana/mobile/img-kiri-atas-location.png" alt="Picture of gambar kiri atas location" width={138} height={245} className={`md:hidden absolute z-[3] left-0 top-0 pointer-events-none`} />
        <Image src="/images/arya-dan-rana/mobile/img-kanan-atas-location.png" alt="Picture of gambar kanan atas location" width={275} height={274} className={`md:hidden w-[225px] absolute z-[3] right-0 top-0 pointer-events-none`} />

        <Image src="/images/arya-dan-rana/mobile/img-kiri-bawah-location.png" alt="Picture of gambar kiri bawah location" width={319} height={253} className={`md:hidden w-[205px] absolute z-[3] left-0 bottom-0 pointer-events-none`} />
        <Image src="/images/arya-dan-rana/mobile/img-kanan-bawah-location.png" alt="Picture of gambar kiri bawah location" width={153} height={273} className={`md:hidden w-[125px] absolute z-[3] right-0 bottom-0 pointer-events-none`} />

        {/* Dekstop */}
        <Image src="/images/arya-dan-rana/dekstop/img-kiri-atas-location.png" alt="Picture of gambar kiri atas location" width={613} height={610} className={`hidden md:block absolute z-[3] left-0 top-0 pointer-events-none`} />
        <Image src="/images/arya-dan-rana/dekstop/img-kanan-atas-location.png" alt="Picture of gambar kanan atas location" width={684} height={682} className={`hidden md:block absolute z-[3] right-0 top-0 pointer-events-none`} />

        <Image src="/images/arya-dan-rana/dekstop/img-kiri-bawah-location.png" alt="Picture of gambar kiri bawah location" width={600} height={821} className={`hidden md:block md:w-[400px] absolute z-[3] left-0 bottom-0 md:-bottom-[400px] pointer-events-none`} />
        <Image src="/images/arya-dan-rana/dekstop/img-kanan-bawah-location.png" alt="Picture of gambar kiri bawah location" width={413} height={550} className={`hidden md:block md:w-[275px] absolute z-[3] right-0 bottom-0 md:-bottom-[350px] pointer-events-none`} />
      </div>
    </>
  )
}