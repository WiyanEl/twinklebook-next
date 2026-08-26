'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  data: any
  isOpen: boolean
}

export default function Profile({ data, isOpen }: Props) {
  const dataEvent = data?.event

  return (
    <>
      <section id="profile" className="relative w-full min-h-screen bg-[url('/images/arya-dan-rana/mobile/bg-profile.png')] bg-cover bg-no-repeat pt-[20px] pb-[25px]">
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[#DCCB9F]/10 mix-blend-multiply" />
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-[20vh] z-[2] bg-[linear-gradient(180deg,#FEF7ED_0%,#FEF7ED_50%,rgba(254,247,237,0)_100%)]" />

        <div className="relative z-[3] min-h-screen text-center font-cormorantgaramond text-[#001A3B] bg-[url('/images/arya-dan-rana/mobile/bg-kertas-profile.png')] bg-cover bg-no-repeat bg-center pt-[70px]">
          <p className="text-[15px] font-medium leading-[20px] animate" data-animate="fade-up">We warmly invite you to a special evening <br /> celebrating the love and union we now share.</p>

          <h3 className="font-bochan font-medium text-lg text-[#6D761C] mt-10 animate" data-animate="fade-up">Arya Narottama <br /> Chaerul Santoso</h3>
          <p className="text-[15px] font-semibold mt-3 animate" data-animate="fade-up">The son of</p>
          <p className="text-[15px] font-semibold leading-[24px] mt-0.5 animate" data-animate="fade-up">Mr. Rachland Subandhi Nashidik and <br /> Mrs. Nurdiyati Kaplale (Alm.)</p>

          <h3 className="font-playfair text-[32px] mt-7 animate" data-animate="fade-up">&</h3>

          <h3 className="font-bochan font-medium text-lg text-[#6D761C] mt-7 animate" data-animate="fade-up">Rana Cinta <br /> Rahmania</h3>
          <p className="text-[15px] font-semibold mt-3 animate" data-animate="fade-up">The daughter of</p>
          <p className="text-[15px] font-semibold leading-[24px] mt-0.5 animate" data-animate="fade-up">Mr. Tri Pramudito Santoso (Alm.) and <br /> Mrs. Dara Malia Lengkong</p>

          <p className="text-[15px] font-medium leading-[20px] mt-10 animate" data-animate="fade-up">Our joy will be complete with <br /> your presence and blessings.</p>
        </div>

        {/* Image Absolute */}
        <Image src="/images/arya-dan-rana/mobile/img-kiri-atas-profile.png" alt="Picture of gambar kiri atas profile" width={214} height={280} className={`absolute z-[2] -left-[20px] -top-[40px] pointer-events-none`} />
        <Image src="/images/arya-dan-rana/mobile/img-kanan-atas-profile.png" alt="Picture of gambar kanan atas profile" width={125} height={143} className={`absolute z-[3] right-0 top-0 pointer-events-none`} />

        <Image src="/images/arya-dan-rana/mobile/img-kiri-tengah-profile.png" alt="Picture of gambar kiri tengah profile" width={277} height={277} className={`w-[135px] absolute z-[3] left-0 bottom-[236px] pointer-events-none`} />

        <Image src="/images/arya-dan-rana/mobile/img-kiri-bawah-profile.png" alt="Picture of gambar kiri bawah profile" width={175} height={194} className={`w-[145px] absolute z-[3] left-0 bottom-0 pointer-events-none`} />
        <Image src="/images/arya-dan-rana/mobile/img-kanan-bawah-profile.png" alt="Picture of gambar kiri bawah profile" width={250} height={375} className={`w-[135px] absolute z-[3] right-0 bottom-0 pointer-events-none`} />
      </section>
    </>
  )
}