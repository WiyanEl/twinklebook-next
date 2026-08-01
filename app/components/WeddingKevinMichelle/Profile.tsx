'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function Profile({ isOpen, isMobile }: Props) {
  return (
    <>
      <div id="profile" className="profile relative z-10 w-full min-h-screen">
        <div className="relative overflow-hidden z-10 text-center h-full font-cormorantgaramond text-[#DFD28F] pt-[159px]">
          <p className="text-[14px] md:text-[22px] leading-[20px] md:leading-[30px] animate" data-animate="fade-up">
            We request the honour of your presence <br /> at the wedding of <br className="md:hidden" /> our beloved son and daughter
          </p>

          <Image src="/images/kevin-dan-michelle/img-pengantin-pria-mobile.png" alt="Picture of Pengantin pria" width={200} height={262} className="md:hidden w-[200px] mt-[60px] mx-auto pointer-events-none animate" data-animate="zoom-in" />
          <Image src="/images/kevin-dan-michelle/img-pengantin-pria.png" alt="Picture of Pengantin pria" width={261} height={338} className="hidden md:block mt-[71px] mx-auto pointer-events-none animate" data-animate="zoom-in" />
          <h2 className="font-milyuna text-[26px] md:text-[64px] leading-[30px] md:leading-[63px] mt-[36px] md:mt-[50px] animate" data-animate="zoom-in">dr. Kevin Axel Laurent <br /> Susanto</h2>
          <p className="text-[14px] md:text-[22px] leading-[20px] font-light mt-5 md:mt-[25px] animate" data-animate="fade-up">
            The Son of
          </p>
          <p className="text-[14px] md:text-[22px] leading-[24px] md:leading-[30px] font-light mt-3 animate" data-animate="fade-up">
            Mr. Agus Susanto, SE <br className="md:hidden" /> and <br className="md:hidden" /> Mrs. Cin Mei
          </p>

          <Image src="/images/kevin-dan-michelle/img-pengantin-wanita-mobile.png" alt="Picture of Pengantin wanita" width={200} height={262} className="md:hidden w-[200px] mt-[55px] mx-auto pointer-events-none animate" data-animate="zoom-in" />
          <Image src="/images/kevin-dan-michelle/img-pengantin-wanita.png" alt="Picture of Pengantin wanita" width={261} height={338} className="hidden md:block mt-[98px] mx-auto pointer-events-none animate" data-animate="zoom-in" />
          <h2 className="font-milyuna text-[26px] md:text-[64px] leading-[30px] md:leading-[63px] mt-[36px] md:mt-[50px] animate" data-animate="zoom-in">dr. Michelle Cannissa <br /> Hendrawan</h2>
          <p className="text-[14px] md:text-[22px] leading-[20px] font-light mt-5 md:mt-[25px] animate" data-animate="fade-up">
            The Daughter of
          </p>
          <p className="text-[14px] md:text-[22px] leading-[24px] md:leading-[30px] font-light mt-3 animate" data-animate="fade-up">
            Mr. Iwan Hendrawan <br className="md:hidden" /> and <br className="md:hidden" /> Mrs. Rosmiati
          </p>

          <p className="text-[14px] md:text-[22px] leading-[20px] md:leading-[30px] mt-[52px] md:mt-[65px] animate" data-animate="fade-up">
            We would be honoured <br /> by your presence and blessing.
          </p>
        </div>

        {/* Absolute Image */}
        <Image src="/images/kevin-dan-michelle/img-bintang-atas-profile-mobile.png" alt="Picture of bintang atas" width={359} height={359} className="md:hidden absolute -top-[200px] left-0 pointer-events-none" />
        <Image src="/images/kevin-dan-michelle/img-tanaman-kiri-atas-profile-mobile.png" alt="Picture of tanaman atas kiri" width={318} height={390} className="md:hidden absolute -top-[170px] left-0 w-[179px] pointer-events-none" />
        <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-atas-profile-mobile.png" alt="Picture of tanaman atas kanan" width={318} height={390} className="md:hidden absolute -top-[170px] right-0 w-[179px] pointer-events-none" />
        <Image src="/images/kevin-dan-michelle/img-tanaman-kiri-atas-profile.png" alt="Picture of tanaman atas kiri" width={932} height={1142} className="hidden md:block absolute -top-[550px] left-0 pointer-events-none w-[600px]" />
        <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-atas-profile.png" alt="Picture of tanaman atas kanan" width={932} height={1142} className="hidden md:block absolute -top-[550px] right-0 pointer-events-none w-[600px]" />

        <Image src="/images/kevin-dan-michelle/img-bintang-atas-kanan-profile-mobile.png" alt="Picture of bintang atas kanan" width={359} height={359} className="absolute -top-[100px] right-0 w-[229px] pointer-events-none" />
        <Image src="/images/kevin-dan-michelle/img-bintang-kiri-samping-pengantin-pria-mobile.png" alt="Picture of bintang samping pengantin pria" width={481} height={481} className="md:hidden absolute top-[100px] left-0 w-[281px] pointer-events-none" />
        <Image src="/images/kevin-dan-michelle/img-bintang-kanan-samping-pengantin-wanita-mobile.png" alt="Picture of bintang samping pengantin wanita" width={481} height={481} className="md:hidden absolute top-[550px] right-0 w-[261px] pointer-events-none" />
        <Image src="/images/kevin-dan-michelle/img-bintang-kiri-bawah-profile-mobile.png" alt="Picture of bintang bawah profile" width={583} height={680} className="md:hidden absolute -bottom-[350px] left-0 pointer-events-none" />

        <Image src="/images/kevin-dan-michelle/img-bintang-atas-kanan-profile.png" alt="Picture of bintang atas kanan" width={1343} height={1343} className="hidden md:block w-[900px] absolute -top-[75px] right-0 pointer-events-none" />
      </div>
    </>
  )
}