'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function Location({ isOpen, isMobile }: Props) {
  return (
    <>
      <div id="location" className="relative z-10 w-full min-h-screen">
        <div className="relative overflow-hidden z-10 text-center h-full font-cormorantgaramond text-[#DFD28F] pt-[145px] md:pt-[210px] pb-[141px] md:pb-[200px]">
          <h2 className="md:hidden font-milyuna text-2xl leading-[25px] animate" data-animate="zoom-in">Time & Location</h2>
          <h2 className="hidden md:block font-milyuna text-[48px] leading-[25px] uppercase animate" data-animate="zoom-in">Location</h2>
          <Image src="/images/kevin-dan-michelle/img-garis-judul-mobile.png" alt="Picture of garis judul" width={185} height={10} className="mt-1 md:mt-[24px] w-[109px] md:w-[185px] mx-auto animate" data-animate="zoom-in" />

          <h4 className="font-hello text-[32px] md:text-[64px] leading-[18px] md:leading-[84px] mt-[51px] md:mt-[48px] animate" data-animate="fade-up">Holy Matrimony</h4>
          <p className="text-base md:text-[22px] leading-[25px] md:leading-[30px] uppercase mt-[13px] md:mt-[19px] animate" data-animate="fade-up">11.00 wib</p>
          <p className="text-[14px] md:text-[22px] leading-[20px] md:leading-[30px] uppercase mt-[13px] md:mt-[50px] animate" data-animate="fade-up">Kapel Abipraya Kota Baru <br className="md:hidden" /> Parahyangan</p>
          <p className="text-[14px] md:text-[22px] leading-[18px] md:leading-[30px] mt-3 md:mt-5 animate" data-animate="fade-up">Parahyangan St, Kertajaya, Padalarang, <br /> West Bandung Regency</p>
          <Link href="https://maps.app.goo.gl/TJX8AgM9pxE7wVWYA" target="_blank" className="relative z-50 flex items-center justify-center w-[160px] md:w-[294px] h-[33px] md:h-[47px] bg-[#CDA96A] rounded-[6px] text-[14px] md:text-[22px] leading-[17.16px] text-white uppercase mt-3 md:mt-[35px] mx-auto animate" data-animate="zoom-in">
            Google Maps
          </Link>

          <Image src="/images/kevin-dan-michelle/img-dot-mobile.png" alt="Picture of titik tengah" width={20} height={20} className="w-[12px] md:w-[20px] mt-[54px] md:mt-[94px] mx-auto animate" data-animate="zoom-in" />

          <h4 className="font-hello text-[32px] md:text-[64px] leading-[18px] md:leading-[84px] mt-[54px] md:mt-[94px] animate" data-animate="fade-up">Dinner Reception</h4>
          <p className="text-base md:text-[22px] leading-[25px] md:leading-[30px] uppercase mt-[13px] md:mt-[19px] animate" data-animate="fade-up">18.00 wib</p>
          <p className="text-[14px] md:text-[22px] leading-[20px] md:leading-[30px] uppercase mt-[13px] md:mt-[50px] animate" data-animate="fade-up"> Pullman Hotel Grand ballroom</p>
          <p className="text-[14px] md:text-[22px] leading-[18px] md:leading-[30px] mt-3 md:mt-5 animate" data-animate="fade-up">Jl. Diponegoro No.27, Citarum, <br /> Kec. Bandung Wetan, Kota Bandung</p>
          <Link href="https://maps.app.goo.gl/TVaxFoJTkMpHS7EV8" target="_blank" className="relative z-50 flex items-center justify-center w-[160px] md:w-[294px] h-[33px] md:h-[47px] bg-[#CDA96A] rounded-[6px] text-[14px] md:text-[22px] leading-[17.16px] text-white uppercase mt-3 md:mt-[35px] mx-auto animate" data-animate="zoom-in">
            Google Maps
          </Link>

          {/* Image Absolute */}
          <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-atas-location-mobile.png" alt="Picture of tanaman atas kanan" width={232} height={232} className="md:hidden absolute w-[200px] -top-[140px] right-0 pointer-events-none" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-kiri-atas-location-mobile.png" alt="Picture of tanaman atas kiri" width={232} height={232} className="md:hidden absolute w-[200px] -top-[140px] left-0 pointer-events-none" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-atas-location-2-mobile.png" alt="Picture of tanaman atas kanan" width={252} height={252} className="md:hidden absolute w-[200px] -top-[180px] right-[25px] pointer-events-none" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-kiri-atas-location-2-mobile.png" alt="Picture of tanaman atas kiri" width={252} height={252} className="md:hidden absolute w-[200px] -top-[180px] left-[25px] pointer-events-none" />

          <Image src="/images/kevin-dan-michelle/img-tanaman-bawah-kanan-location-mobile.png" alt="Picture of tanaman bawah kanan" width={219} height={219} className="md:hidden absolute w-[180px] -bottom-[90px] right-0 pointer-events-none" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-bawah-kiri-location-mobile.png" alt="Picture of tanaman bawah kiri" width={219} height={219} className="md:hidden absolute w-[180px] -bottom-[90px] left-0 pointer-events-none" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-bawah-kanan-location-2-mobile.png" alt="Picture of tanaman bawah kanan" width={147} height={147} className="md:hidden absolute w-[200px] -bottom-[120px] right-[50px] pointer-events-none" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-bawah-kiri-location-2-mobile.png" alt="Picture of tanaman bawah kiri" width={147} height={147} className="md:hidden absolute w-[200px] -bottom-[120px] left-[50px] pointer-events-none" />

          {/* Desktop */}
          <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-atas-location-mobile.png" alt="Picture of tanaman atas kanan" width={844} height={690} className="hidden md:block absolute w-[555px] -top-[350px] right-0 pointer-events-none" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-kiri-atas-location-mobile.png" alt="Picture of tanaman atas kiri" width={844} height={690} className="hidden md:block absolute w-[555px] -top-[350px] left-0 pointer-events-none" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-atas-location-2.png" alt="Picture of tanaman atas kanan" width={622} height={360} className="hidden md:block absolute -top-[280px] right-[20px] pointer-events-none" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-kiri-atas-location-2.png" alt="Picture of tanaman atas kiri" width={622} height={360} className="hidden md:block absolute -top-[280px] left-[20px] pointer-events-none" />

          <Image src="/images/kevin-dan-michelle/img-tanaman-bawah-kanan-location.png" alt="Picture of tanaman bawah kanan" width={557} height={557} className="hidden md:block absolute -bottom-[280px] right-0 pointer-events-none" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-bawah-kiri-location.png" alt="Picture of tanaman bawah kiri" width={557} height={557} className="hidden md:block absolute -bottom-[280px] left-0 pointer-events-none" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-bawah-kanan-location-2.png" alt="Picture of tanaman bawah kanan" width={374} height={374} className="hidden md:block absolute -bottom-[200px] right-[250px] pointer-events-none" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-bawah-kiri-location-2.png" alt="Picture of tanaman bawah kiri" width={374} height={374} className="hidden md:block absolute -bottom-[200px] left-[250px] pointer-events-none" />
        </div>
      </div>
    </>
  )
}