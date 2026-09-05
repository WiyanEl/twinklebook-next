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
      <div className="relative">
        <section id="profile" className="relative w-full min-h-screen bg-[url('/images/arya-dan-rana/mobile/bg-profile.png')] md:bg-[url('/images/arya-dan-rana/dekstop/bg-profile.png')] bg-cover bg-no-repeat pt-[30px] md:pt-0 md:pb-[50px] md:overflow-hidden">
          <div className="pointer-events-none absolute left-0 right-0 top-0 bottom-0 z-[1] bg-[#DCCB9F]/20 mix-blend-multiply" />
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-[50vh] md:h-[80vh] z-[2] bg-[linear-gradient(180deg,#FEF7ED_0%,#FEF7ED_50%,rgba(254,247,237,0)_100%)]" />

          <div className="relative z-[3] min-h-screen text-center font-cormorantgaramond text-[#001A3B] bg-[url('/images/arya-dan-rana/mobile/bg-kertas-profile.png')] md:bg-[url('/images/arya-dan-rana/dekstop/bg-kertas-profile.png')] bg-contain bg-no-repeat bg-center pt-[140px] pb-[150px] md:pt-[205px] md:pb-[241px] mx-auto">
            <p className="text-[15px] md:text-xl font-medium leading-[20px] animate" data-animate="fade-up">We warmly invite you to a special evening <br /> celebrating the love and union we now share.</p>

            <h3 className="font-bochan font-medium text-lg md:text-[45px] text-[#6D761C] md:leading-[135%] mt-10 md:mt-[60px] animate" data-animate="fade-up">
              {dataEvent?.groomFullName
                ?.split(' ')
                .map((word:string, index:number) => (
                  <span key={index}>
                    {index > 0 && index % 2 === 0 && <br />}
                    {word}{' '}
                  </span>
                ))}
            </h3>
            <p className="text-[15px] md:text-xl font-semibold mt-3 md:mt-[40px] animate" data-animate="fade-up">The son of</p>
            <p className="text-[15px] md:text-xl font-semibold leading-[24px] mt-0.5 animate" data-animate="fade-up">
              {dataEvent?.brideParent?.split(/\s+and\s+/).map((text:string, index:number) => (
                <span key={index}>
                  {index > 0 && <br />}
                  {text}
                </span>
              ))}
            </p>

            <h3 className="font-playfair text-[32px] md:text-[40px] mt-7 md:mt-[60px] animate" data-animate="fade-up">&</h3>

            <h3 className="font-bochan font-medium text-lg md:text-[45px] text-[#6D761C] md:leading-[135%] mt-7 md:mt-[40px] animate" data-animate="fade-up">
              {dataEvent?.brideFullName
                ?.split(' ')
                .map((word:string, index:number) => (
                  <span key={index}>
                    {index > 0 && index > 2 && <br />}
                    {word}{' '}
                  </span>
                ))}
            </h3>
            <p className="text-[15px] md:text-xl font-semibold mt-3 md:mt-[40px] animate" data-animate="fade-up">The daughter of</p>
            <p className="text-[15px] md:text-xl font-semibold leading-[24px] mt-0.5 animate" data-animate="fade-up">
              {dataEvent?.groomParent?.split(/\s+and\s+/).map((text:string, index:number) => (
                <span key={index}>
                  {index > 0 && <br />}
                  {text}
                </span>
              ))}
            </p>

            <p className="text-[15px] md:text-xl font-medium leading-[20px] mt-10 md:mt-[60px] animate" data-animate="fade-up">Our joy will be complete with <br /> your presence and blessings.</p>
          </div>

          {/* Image Absolute */}
          <Image src="/images/arya-dan-rana/mobile/img-kiri-atas-profile.png" alt="Picture of gambar kiri atas profile" width={214} height={280} className={`md:hidden absolute z-[2] -left-[10px] top-0 pointer-events-none`} />
          <Image src="/images/arya-dan-rana/mobile/img-kanan-atas-profile.png" alt="Picture of gambar kanan atas profile" width={125} height={143} className={`md:hidden absolute z-[3] right-0 top-[45px] pointer-events-none`} />

          <Image src="/images/arya-dan-rana/mobile/img-kiri-tengah-profile.png" alt="Picture of gambar kiri tengah profile" width={277} height={277} className={`md:hidden w-[115px] absolute z-[3] left-0 bottom-[286px] pointer-events-none`} />

          <Image src="/images/arya-dan-rana/mobile/img-kiri-bawah-profile.png" alt="Picture of gambar kiri bawah profile" width={175} height={194} className={`md:hidden w-[145px] absolute z-[3] left-0 bottom-[20px] pointer-events-none`} />
          <Image src="/images/arya-dan-rana/mobile/img-kanan-bawah-profile.png" alt="Picture of gambar kiri bawah profile" width={250} height={375} className={`md:hidden w-[135px] absolute z-[3] right-0 bottom-0 pointer-events-none`} />

          {/* Dekstop */}
          <Image src="/images/arya-dan-rana/dekstop/img-kiri-bawah-profile.png" alt="Picture of gambar kiri bawah profile" width={411} height={345} className={`hidden md:block absolute z-[3] left-[420px] bottom-[100px] w-[380px] pointer-events-none`} />
          <Image src="/images/arya-dan-rana/dekstop/img-kanan-bawah-profile.png" alt="Picture of gambar kiri bawah profile" width={425} height={669} className={`hidden md:block absolute z-[3] right-[380px] -bottom-[220px] w-[400px] pointer-events-none`} />
        </section>

        {/* Image Absolute */}
        <Image src="/images/arya-dan-rana/dekstop/img-kiri-atas-profile.png" alt="Picture of gambar kiri atas profile" width={386} height={506} className={`hidden md:block absolute z-[2] left-[420px] -top-[80px] pointer-events-none`} />
        <Image src="/images/arya-dan-rana/dekstop/img-kanan-atas-profile.png" alt="Picture of gambar kanan atas profile" width={308} height={246} className={`hidden md:block absolute z-[3] right-[450px] -top-[20px] pointer-events-none`} />
      </div>
    </>
  )
}