'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Rsvp from './Rsvp'

type Props = {
  data: any
  isOpen: boolean
}

export default function Dresscode({ data, isOpen }: Props) {
  return (
    <>
      <div className="relative w-full min-h-screen bg-[url('/images/arya-dan-rana/mobile/bg-dresscode.png')] md:bg-[url('/images/arya-dan-rana/dekstop/bg-dresscode.png')] bg-cover bg-no-repeat pb-[209px] md:pb-[269px] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[#DCCB9F]/30 mix-blend-multiply" />
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-[70vh] z-[2] bg-[linear-gradient(180deg,#FEF7ED_0%,#FEF7ED_50%,rgba(254,247,237,0)_100%)]" />

        <section id="dresscode" className="relative w-full min-h-min overflow-hidden">
          <div className="relative z-[3] min-h-min text-center font-cormorantgaramond text-[#001A3B] pt-[157px] md:pt-[217px]">
            <h2 className="font-bochan text-2xl md:text-[32px] uppercase animate" data-animate="fade-up">dress code</h2>

            <p className="text-[15px] md:text-[22px] text-[#1B1C1D] leading-[20px] mt-[30px] md:mt-[60px] animate" data-animate="fade-up">We'd love to see you dressed in</p>
            <p className="text-[15px] md:text-[22px] text-[#1B1C1D] leading-[20px] md:mt-2 animate" data-animate="fade-up">Tropical Formal attire.</p>

            <Image src="/images/arya-dan-rana/mobile/img-dresscode.png" alt="Picture of dresscode" width={400} height={252} className="w-[276px] md:w-[400px] mx-auto pointer-events-none mt-[14px] md:mt-[30px] animate" data-animate="fade-up" />

            <p className="text-[14px] md:text-[22px] text-[#1B1C1D] italic leading-[20px] md:leading-none md:mt-[32px] animate" data-animate="fade-up">
              As we'll be celebrating by the beach,
            </p>
            <p className="md:hidden text-[14px] md:text-[22px] text-[#1B1C1D] italic leading-[20px] md:leading-none md:mt-2 animate" data-animate="fade-up">
              comfortable shoes and breathable fabrics
            </p>
            <p className="md:hidden text-[14px] md:text-[22px] text-[#1B1C1D] italic leading-[20px] md:leading-none md:mt-2 animate" data-animate="fade-up">
              are warmly encouraged.
            </p>
            <p className="hidden md:block text-[14px] md:text-[22px] text-[#1B1C1D] italic leading-[20px] md:leading-none md:mt-2 animate" data-animate="fade-up">
              comfortable shoes and breathable fabrics are warmly encouraged.
            </p>
          </div>

          {/* Image Absolute */}
          <Image src="/images/arya-dan-rana/mobile/img-daun-kiri-atas-dresscode.png" alt="Picture of gambar kiri atas hero" width={141} height={251} className={`md:hidden w-[100px] absolute z-[3] left-0 top-0 pointer-events-none ${isOpen ? 'sway-stretch-left' : ''}`} style={{ animationDelay: '0.5s' }} />
          <Image src="/images/arya-dan-rana/mobile/img-atas-dresscode.png" alt="Picture of gambar atas dresscode" width={616} height={389} className={`md:hidden absolute z-[3] left-0 top-0 pointer-events-none`} />
          <Image src="/images/arya-dan-rana/mobile/img-daun-kanan-atas-dresscode.png" alt="Picture of gambar kiri atas hero" width={152} height={271} className={`md:hidden w-[80px] absolute z-[3] right-0 top-0 pointer-events-none ${isOpen ? 'sway-stretch-right' : ''}`} style={{ animationDelay: '0.5s' }} />
          <Image src="/images/arya-dan-rana/mobile/img-daun-kanan-atas-dresscode-1.png" alt="Picture of gambar kiri atas hero" width={133} height={237} className={`md:hidden absolute z-[3] right-0 top-0 pointer-events-none ${isOpen ? 'sway-stretch-right' : ''}`} style={{ animationDelay: '0.5s' }} />

          {/* Dekstop */}
          <Image src="/images/arya-dan-rana/mobile/img-daun-kiri-atas-dresscode.png" alt="Picture of gambar kiri atas hero" width={278} height={494} className={`hidden md:block absolute z-[3] left-0 -top-[80px] pointer-events-none ${isOpen ? 'sway-stretch-left' : ''}`} style={{ animationDelay: '0.5s' }} />
          <Image src="/images/arya-dan-rana/dekstop/img-atas-dresscode.png" alt="Picture of gambar atas dresscode" width={1905} height={879} className={`hidden md:block w-full absolute z-[3] left-0 top-0 pointer-events-none`} />
          <Image src="/images/arya-dan-rana/mobile/img-daun-kanan-atas-dresscode.png" alt="Picture of gambar kiri atas hero" width={262} height={466} className={`hidden md:block w-[200px] absolute z-[3] right-0 -top-[150px] pointer-events-none ${isOpen ? 'sway-stretch-right' : ''}`} style={{ animationDelay: '0.5s' }} />
          <Image src="/images/arya-dan-rana/mobile/img-daun-kanan-atas-dresscode-1.png" alt="Picture of gambar kiri atas hero" width={301} height={431} className={`hidden md:block absolute z-[3] right-[50px] -top-[50px] pointer-events-none ${isOpen ? 'sway-stretch-right' : ''}`} style={{ animationDelay: '0.5s' }} />
        </section>

        <Rsvp data={data} />

        {/* Image Absolute */}
        <Image src="/images/arya-dan-rana/mobile/img-gelas-kiri-bawah-hero.png" alt="Picture of gambar kiri bawah hero" width={149} height={261} className={`md:hidden w-[120px] absolute z-[3] -left-[50px] bottom-[60px] pointer-events-none ${isOpen ? 'sway-up' : ''}`} style={{ animationDelay: '0.5s' }} />
        <Image src="/images/arya-dan-rana/mobile/img-gelas-kiri-bawah-hero.png" alt="Picture of gambar kiri bawah hero" width={149} height={261} className={`md:hidden absolute z-[3] -right-[60px] bottom-[120px] pointer-events-none ${isOpen ? 'sway-up' : ''}`} style={{ animationDelay: '0.5s' }} />
        <Image src="/images/arya-dan-rana/mobile/img-bawah-dresscode.png" alt="Picture of gambar bawah dresscode" width={584} height={589} className={`md:hidden absolute z-[3] left-0 bottom-0 pointer-events-none`} />
        <Image src="/images/arya-dan-rana/mobile/img-daun-kanan-bawah-dresscode.png" alt="Picture of gambar bawah dresscode" width={181} height={271} className={`md:hidden absolute z-[3] right-0 bottom-0 pointer-events-none ${isOpen ? 'sway-up' : ''}`} style={{ animationDelay: '0.5s' }} />
        <Image src="/images/arya-dan-rana/mobile/img-kanan-bawah-dresscode.png" alt="Picture of gambar bawah dresscode" width={158} height={158} className={`md:hidden w-[80px] absolute z-[3] right-0 bottom-0 pointer-events-none`} />
        <Image src="/images/arya-dan-rana/mobile/animasi-burung.gif" alt="Picture of gambar kiri atas profile" width={157} height={157} className={`md:hidden absolute z-[3] -left-[30px] bottom-[60px] pointer-events-none`} />

        {/* Dekstop */}
        <Image src="/images/arya-dan-rana/mobile/img-gelas-kiri-bawah-hero.png" alt="Picture of gambar kiri bawah hero" width={262} height={459} className={`hidden md:block absolute z-[3] -left-[50px] bottom-[100px] pointer-events-none ${isOpen ? 'sway-up' : ''}`} style={{ animationDelay: '0.5s' }} />
        <Image src="/images/arya-dan-rana/mobile/img-gelas-kiri-bawah-hero.png" alt="Picture of gambar kiri bawah hero" width={295} height={517} className={`hidden md:block absolute z-[3] -right-[60px] bottom-[120px] pointer-events-none ${isOpen ? 'sway-up' : ''}`} style={{ animationDelay: '0.5s' }} />
        <Image src="/images/arya-dan-rana/dekstop/img-daun-bawah-kiri-dresscode.png" alt="Picture of gambar bawah dresscode" width={267} height={475} className={`hidden md:block absolute z-[3] left-0 bottom-0 pointer-events-none ${isOpen ? 'sway-up' : ''}`} style={{ animationDelay: '0.5s' }} />
        <Image src="/images/arya-dan-rana/dekstop/img-bawah-dresscode.png" alt="Picture of gambar bawah dresscode" width={1905} height={1037} className={`hidden md:block absolute z-[3] left-0 bottom-0 pointer-events-none`} />
        <Image src="/images/arya-dan-rana/mobile/img-daun-kanan-bawah-dresscode.png" alt="Picture of gambar bawah dresscode" width={397} height={475} className={`hidden md:block absolute z-[3] right-[30px] bottom-0 pointer-events-none ${isOpen ? 'sway-up' : ''}`} style={{ animationDelay: '0.5s' }} />
        <Image src="/images/arya-dan-rana/mobile/img-kanan-bawah-dresscode.png" alt="Picture of gambar bawah dresscode" width={278} height={278} className={`hidden md:block w-[200px] absolute z-[3] right-0 bottom-0 pointer-events-none`} />
        <Image src="/images/arya-dan-rana/mobile/animasi-burung.gif" alt="Picture of gambar kiri atas profile" width={376} height={376} className={`hidden md:block absolute z-[3] -left-[30px] bottom-[60px] pointer-events-none`} />
      </div>
    </>
  )
}