'use client'

import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function WeddingGift({ isOpen, isMobile }: Props) {
  const [copied, setCopied] = useState(false)
  const [copied2, setCopied2] = useState(false)

  const handleCopy = (norek:string) => {
    navigator.clipboard.writeText(norek);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 10000);
  };

  return (
    <>
      <div id="wedding-gift" className="relative z-10 w-full">
        <div className="relative overflow-hidden z-10 text-center h-full font-cormorantgaramond text-[#DFD28F] pt-[140px] md:pt-[209px]">
          <h2 className="font-milyuna text-2xl md:text-[48px] leading-[25px] animate" data-animate="zoom-in">Wedding Gift</h2>
          <Image src="/images/kevin-dan-michelle/img-garis-judul-mobile.png" alt="Picture of garis judul" width={211} height={38} className="w-[109px] md:w-[194px] mt-1 md:mt-[25px] mx-auto animate" data-animate="zoom-in" />

          <p className="md:hidden text-[14px] leading-[18px] mt-[56px] animate" data-animate="fade-up">
            Your presence and prayers <br /> are the greatest blessing to us.
          </p>
          <p className="md:hidden text-[14px] leading-[18px] mt-4 animate" data-animate="fade-up">
            Should you wish to honor us with a gift, <br /> please find the details below <br /> for your convenience.
          </p>

          <p className="hidden md:block text-[22px] leading-[30px] mt-[56px] animate" data-animate="fade-up">
            Your presence and prayers <br /> are the greatest blessing to us.
          </p>
          <p className="hidden md:block text-[22px] leading-[30px] mt-5 animate" data-animate="fade-up">
            Should you wish to honor us with a gift, <br /> please find the details below for your convenience.
          </p>

          <div className="flex justify-between items-center w-[241px] md:w-[664px] border-b border-[#DFD28F] pb-3 mx-auto mt-[37px] md:mt-[99px] animate" data-animate="zoom-in">
            <p className="text-left text-[14px] md:text-[22px] font-normal leading-[20px] md:leading-[25px]">
              <span>IDR</span> <br />
              <span className="mt-1">BCA - 3469991998</span> <br />
              <span className="mt-1">Kevin Axel Laurent Susanto</span>
            </p>
            <button onClick={() => handleCopy('3469991998')} className="w-[50px] h-[30px] border-b border-[#DFD28F] text-center" data-animate="zoom-in">
              <span className="text-[14px] md:text-lg font-normal leading-[81%] uppercase">{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>

          {/* Image Absolute */}
          <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-atas-wedding-gift-mobile.png" alt="Picture of tanaman atas kanan" width={219} height={219} className="md:hidden absolute w-[180px] -top-[85px] right-0 pointer-events-none" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-kiri-atas-wedding-gift-mobile.png" alt="Picture of tanaman atas kiri" width={219} height={219} className="md:hidden absolute w-[180px] -top-[85px] left-0 pointer-events-none" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-atas-wedding-gift-2-mobile.png" alt="Picture of tanaman atas kanan" width={147} height={147} className="md:hidden absolute -top-[75px] right-[70px] pointer-events-none" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-kiri-atas-wedding-gift-2-mobile.png" alt="Picture of tanaman atas kiri" width={147} height={147} className="md:hidden absolute -top-[75px] left-[70px] pointer-events-none" />

          <Image src="/images/kevin-dan-michelle/img-bintang-atas-location.png" alt="Picture of bintang atas" width={1488} height={1488} className="hidden md:block absolute -top-[1000px] left-0 pointer-events-none" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-atas-wedding-gift-mobile.png" alt="Picture of tanaman atas kanan" width={557} height={557} className="hidden md:block absolute w-[500px] -top-[250px] right-0 pointer-events-none" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-kiri-atas-wedding-gift-mobile.png" alt="Picture of tanaman atas kiri" width={557} height={557} className="hidden md:block absolute w-[500px] -top-[250px] left-0 pointer-events-none" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-atas-wedding-gift-2-mobile.png" alt="Picture of tanaman atas kanan" width={374} height={374} className="hidden md:block absolute -top-[200px] right-[200px] pointer-events-none" />
          <Image src="/images/kevin-dan-michelle/img-tanaman-kiri-atas-wedding-gift-2-mobile.png" alt="Picture of tanaman atas kiri" width={374} height={374} className="hidden md:block absolute -top-[200px] left-[200px] pointer-events-none" />
        </div>
      </div>
    </>
  )
}