'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function JourneyLove({ isOpen, isMobile }: Props) {
  return (
    <>
      <div id="journey-love" className="journey-love relative z-10 w-full min-h-screen">
        <div className="relative overflow-hidden z-10 h-full font-cormorantgaramond text-[#DFD28F] pt-[148px] pb-[187px]">
          <div className="w-[259px] md:w-[783px] mx-auto">
            <h2 className="font-milyuna text-2xl md:text-[48px] leading-[25px] md:leading-[48px] animate" data-animate="fade-up">Kevin & <br /> Michelle</h2>
            <p className="text-[14px] md:text-[22px] leading-[20px] md:leading-[30px] text-justify mt-[37px] md:mt-[61px] animate" data-animate="fade-up">
              It all began in 2016, on the very first day of medical school. We were classmates and happened to be placed in the same practical group. Like many first meetings, it started with a simple introduction—but instead of talking about the lab session, we found ourselves laughing about the challenges that medical school would bring.
            </p>
            <p className="text-[14px] md:text-[22px] leading-[20px] md:leading-[30px] text-justify mt-3 md:mt-4 animate" data-animate="fade-up">
              As days turned into months, we became close friends. We studied together, spent countless hours in practical sessions, and shared unforgettable moments with the same group of friends. Somewhere along the way, friendship quietly grew into something much more. On November 30, 2017, Kevin asked Michelle to be his girlfriend, and we officially began our journey together.
            </p>
            <p className="text-[14px] md:text-[22px] leading-[20px] md:leading-[30px] text-justify mt-3 md:mt-4 animate" data-animate="fade-up">
              From that day on, we faced every milestone side by side. We survived endless lectures, late-night study sessions, clinical rotations, writing our theses, completing clerkships, and preparing for the national medical licensing examination. Through every challenge, we became each other's greatest source of strength.
            </p>
            <p className="text-[14px] md:text-[22px] leading-[20px] md:leading-[30px] text-justify mt-3 md:mt-4 animate" data-animate="fade-up">
              In 2023, after years of hard work, we achieved our dream of graduating together as doctors. To celebrate this milestone, Kevin took Michelle to Japan. On June 29, 2023, with the breathtaking view of Lake Kawaguchiko and Mount Fujistanding majestically in the background, Kevin asked the most important question of their lives—and Michelle said yes.
            </p>
            <p className="text-[14px] md:text-[22px] leading-[20px] md:leading-[30px] text-justify mt-3 md:mt-4 animate" data-animate="fade-up">
              A few months later, on December 3, 2023, our families came together for our Tingjing Ceremony, marking the beginning of a new chapter with the blessing of those we love most. In 2024, life took us to different cities as we completed our one-year medical internship. Although distance separated us, it only strengthened our commitment and reminded us that home was always wherever the other person was.
            </p>
            <p className="text-[14px] md:text-[22px] leading-[20px] md:leading-[30px] text-justify mt-3 md:mt-4 animate" data-animate="fade-up">
              When our internship ended in 2025 and we both returned to Bandung, we knew it was finally time. After growing together through every season of life—from students to doctors, from best friends to soulmates—we made the decision to begin our greatest adventure yet: A lifetime together.
            </p>
            <p className="text-[14px] md:text-[22px] leading-[20px] md:leading-[30px] text-justify mt-3 md:mt-4 animate" data-animate="fade-up">
              What started with a simple introduction in a medical school classroom has become a love story built on friendship, perseverance, and unwavering support. And now, surrounded by the people we love, we cannot wait to write the next chapter—together, forever.
            </p>
          </div>

          {/* Absoulte Image */}
          <Image src="/images/kevin-dan-michelle/img-bintang-kanan-journey-mobile.png" alt="Picture of bintang atas" width={514} height={514} className="md:hidden absolute top-[650px] right-0 pointer-events-none" />
          <Image src="/images/kevin-dan-michelle/img-bintang-kiri-bawah-journey-mobile.png" alt="Picture of bintang bawah kiri" width={514} height={514} className="absolute -bottom-[100px] left-0 pointer-events-none" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-kiri-bawah-journey-mobile.png" alt="Picture of bintang atas" width={232} height={232} className="md:hidden absolute w-[200px] -bottom-[130px] left-0 pointer-events-none" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-bawah-journey-mobile.png" alt="Picture of bintang atas" width={232} height={232} className="md:hidden absolute w-[200px] -bottom-[130px] right-0 pointer-events-none" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-kiri-bawah-journey-2-mobile.png" alt="Picture of bintang atas" width={252} height={252} className="md:hidden absolute -bottom-[230px] left-[5px] pointer-events-none" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-bawah-journey-2-mobile.png" alt="Picture of bintang atas" width={252} height={252} className="md:hidden absolute -bottom-[230px] right-[5px] pointer-events-none" />

          <Image src="/images/kevin-dan-michelle/img-tanaman-kiri-bawah-journey.png" alt="Picture of bintang atas" width={844} height={690} className="hidden md:block w-[570px] absolute -bottom-[270px] left-0 pointer-events-none" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-bawah-journey.png" alt="Picture of bintang atas" width={571} height={513} className="hidden md:block w-[700px] absolute -bottom-[250px] right-0 pointer-events-none" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-kiri-bawah-journey-2.png" alt="Picture of bintang atas" width={622} height={360} className="hidden md:block absolute -bottom-[300px] left-[30px] pointer-events-none" />
        </div>

        {/* Absoulte Image */}
        <Image src="/images/kevin-dan-michelle/img-tanaman-kiri-atas-journey-mobile.png" alt="Picture of tanaman atas" width={237} height={237} className="md:hidden absolute -top-[100px] left-0 w-[200px] pointer-events-none" />
        <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-atas-journey-mobile.png" alt="Picture of tanaman atas" width={237} height={237} className="md:hidden absolute -top-[100px] right-0 w-[200px]" />
        <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-atas-journey.png" alt="Picture of tanaman atas" width={774} height={771} className="hidden md:block absolute -top-[400px] right-0 pointer-events-none" />
      </div>
    </>
  )
}