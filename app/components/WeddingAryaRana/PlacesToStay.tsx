'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  data: any
  isOpen: boolean
}

export default function PlacesToStay({ data, isOpen }: Props) {
  return (
    <>
      <div className="relative">
        <section id="places-to-stay" className="relative w-full min-h-min bg-[url('/images/arya-dan-rana/mobile/bg-places-to-stay.png')] md:bg-[url('/images/arya-dan-rana/dekstop/bg-places-to-stay.png')] bg-cover bg-no-repeat md:pt-0 md:pb-[50px] overflow-hidden">
          <div className="pointer-events-none absolute left-0 right-0 top-0 bottom-0 z-[1] bg-[#DCCB9F]/20 mix-blend-multiply" />
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-[30vh] md:h-[80vh] z-[2] bg-[linear-gradient(180deg,#FEF7ED_0%,#FEF7ED_50%,rgba(254,247,237,0)_100%)]" />

          <div className="relative z-[3] min-h-min text-center font-cormorantgaramond text-[#001A3B] bg-[url('/images/arya-dan-rana/mobile/bg-kertas-places-to-stay.png')] md:bg-[url('/images/arya-dan-rana/dekstop/bg-kertas-places-to-stay.png')] bg-contain bg-no-repeat bg-center pt-[153px] pb-[156px] md:pb-[200px] mx-auto">
            <h2 className="font-bochan text-2xl md:text-[32px] md:mt-[80px] uppercase md:capitalize animate" data-animate="fade-up">places to stay</h2>

            <div className="w-[266px] md:w-[492px] mt-[30px] md:mt-[60px] mx-auto text-center">
              <p className="text-[15px] md:text-[22px] animate" data-animate="fade-up">
                We're so excited to have you join us for our wedding celebration! We highly recommend staying at <span className="font-bold">Aloft by Marriott Bali Seminyak</span>, conveniently located just 10-15 minutes from our wedding venue.
              </p>
              <p className="text-[15px] md:text-[22px] mt-[15px] md:mt-[30px] animate" data-animate="fade-up">
                To make your stay as comfortable and convenient as possible, complimentary shuttle service will be provided to and from the wedding venue.
              </p>
              <p className="text-[15px] md:text-[22px] mt-[15px] md:mt-[30px] animate" data-animate="fade-up">
                We would also be happy to assist you with your hotel reservation at a <span className="font-bold">special rate</span>.
              </p>
              <p className="text-[15px] md:text-[22px] mt-[20px] md:mt-[40px] font-bold animate" data-animate="fade-up">
                Aloft Bali Seminyak
              </p>
              <p className="text-[15px] md:text-[22px] animate" data-animate="fade-up">
                Jl. Batu Belig No. 228, Kerobokan Kelod, Seminyak, Bali
              </p>
              <p className="text-[15px] md:text-[22px] mt-[15px] md:mt-[40px] md:mb-[80px] animate" data-animate="fade-up">
                Please click <Link href="https://maps.app.goo.gl/iRVH98wx4hW3zPNt7" target="_blank" rel="noopener noreferrer" className="underline">here</Link> for directions to Aloft Bali Seminyak.
              </p>
            </div>
          </div>

          {/* Image Absolute */}
          <Image src="/images/arya-dan-rana/mobile/img-kiri-atas-places-to-stay.png" alt="Picture of gambar kiri atas places to stay" width={138} height={153} className={`md:hidden w-[120px] absolute z-[3] left-0 top-[20px] pointer-events-none`} />
          <Image src="/images/arya-dan-rana/mobile/img-kanan-atas-places-to-stay.png" alt="Picture of gambar kiri atas places to stay" width={214} height={280} className={`md:hidden absolute z-[2] -right-[10px] top-0 pointer-events-none`} />

          <Image src="/images/arya-dan-rana/mobile/img-kiri-tengah-places-to-stay.png" alt="Picture of gambar kiri tengah places to stay" width={238} height={238} className={`md:hidden w-[155px] absolute z-[3] left-0 bottom-[212px] pointer-events-none`} />

          <Image src="/images/arya-dan-rana/mobile/img-kiri-bawah-places-to-stay.png" alt="Picture of gambar kiri bawah places to stay" width={250} height={360} className={`md:hidden w-[120px] absolute z-[3] left-0 -bottom-[20px] pointer-events-none`} />
          <Image src="/images/arya-dan-rana/mobile/img-kanan-bawah-places-to-stay.png" alt="Picture of gambar kiri bawah places to stay" width={124} height={163} className={`md:hidden absolute z-[3] right-0 bottom-[40px] pointer-events-none`} />

          {/* Dekstop */}
          <Image src="/images/arya-dan-rana/dekstop/img-kiri-atas-places-to-stay.png" alt="Picture of gambar kiri atas places to stay" width={313} height={347} className={`hidden md:block absolute z-[3] left-[480px] top-0 pointer-events-none`} />

          <Image src="/images/arya-dan-rana/dekstop/img-kiri-bawah-places-to-stay.png" alt="Picture of gambar kiri bawah places to stay" width={605} height={630} className={`hidden md:block md:w-[400px] absolute z-[3] left-[480px] -bottom-[200px] pointer-events-none`} />
          <Image src="/images/arya-dan-rana/dekstop/img-kanan-bawah-places-to-stay.png" alt="Picture of gambar kiri bawah places to stay" width={230} height={272} className={`hidden md:block md:w-[275px] absolute z-[3] right-[520px] bottom-[50px] pointer-events-none`} />
        </section>

        {/* Image Absolute */}
        <Image src="/images/arya-dan-rana/dekstop/img-kanan-atas-places-to-stay.png" alt="Picture of gambar kiri atas places to stay" width={386} height={506} className={`hidden md:block absolute z-[2] right-[480px] -top-[80px] pointer-events-none`} />
      </div>
    </>
  )
}