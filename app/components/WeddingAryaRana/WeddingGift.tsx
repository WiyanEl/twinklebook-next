'use client'

import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

type Props = {
  data: any
  isOpen: boolean
}

export default function WeddingGift({ data, isOpen }: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopy = (norek:string, copyke: number) => {
    navigator.clipboard.writeText(norek)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 10000)
  }

  return (
    <>
      <section id="wedding-gift" className="relative w-full min-h-min bg-[url('/images/arya-dan-rana/mobile/bg-wedding-gift.png')] bg-cover bg-no-repeat pt-[54px]">
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[#DCCB9F]/10 mix-blend-multiply" />
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-[30vh] z-[2] bg-[linear-gradient(180deg,#FEF7ED_0%,#FEF7ED_50%,rgba(254,247,237,0)_100%)]" />

        <div className="relative z-[3] h-full text-center font-cormorantgaramond text-[#001A3B] bg-[url('/images/arya-dan-rana/mobile/bg-kertas-wedding-gift.png')] bg-cover bg-no-repeat bg-center pt-[168px] pb-[182px]">
          <h2 className="font-bochan text-2xl animate" data-animate="fade-up">Wedding Gift</h2>
          
          <p className="text-[15px] leading-[18px] mt-8 animate" data-animate="fade-up">
            Your presence and prayers <br /> are the greatest blessing to us.
          </p>
          <p className="text-[15px] leading-[18px] mt-4 animate" data-animate="fade-up">
            Should you wish to honor us with a gift, <br /> please find the details below <br /> for your convenience.
          </p>

          <div className="flex w-[285px] h-[66px] bg-[#FBF8EC] rounded-[10.92px] mt-[43px] mx-auto shadow-[0_3px_5.5px_0_#00000040] animate" data-animate="fade-up">
            <div className="w-[66px] h-full flex">
              <Image src="/images/arya-dan-rana/mobile/logo-bca.png" alt="Picture of logo bca" width={34} height={34} className="mx-auto pointer-events-none m-auto" />
            </div>
            <div className="w-[153px] h-full p-2.5 flex flex-col text-start">
              <span className="font-garamond text-xs font-bold leading-[15px]">0123456789</span>
              <span className="text-xs leading-[15px] uppercase">bca</span>
              <span className="text-xs leading-[15px]">Lorem Ipsum dolor</span>
            </div>
            <div onClick={() => handleCopy('0123456789', 1)} className="w-[66px] h-full flex justify-center items-center">
              <span className="text-xs font-bold leading-[13px]">{copied ? "Copied" : "Copy"}</span>
            </div>
          </div>
        </div>

        {/* Image Absolute */}
        <Image src="/images/arya-dan-rana/mobile/img-kiri-atas-wedding-gift.png" alt="Picture of gambar kiri atas wedding gift" width={103} height={141} className={`absolute z-[3] left-0 top-[54px] pointer-events-none`} />
        <Image src="/images/arya-dan-rana/mobile/img-kanan-atas-wedding-gift.png" alt="Picture of gambar kanan atas wedding gift" width={157} height={157} className={`absolute z-[3] -right-[10px] top-[20px] pointer-events-none`} />

        <Image src="/images/arya-dan-rana/mobile/img-kiri-bawah-wedding-gift.png" alt="Picture of gambar kiri bawah wedding gift" width={250} height={375} className={`w-[145px] absolute z-[3] left-0 bottom-0 pointer-events-none`} />
        <Image src="/images/arya-dan-rana/mobile/img-kanan-bawah-wedding-gift.png" alt="Picture of gambar kiri bawah wedding gift" width={177} height={180} className={`w-[157px] absolute z-[3] right-0 bottom-0 pointer-events-none`} />
      </section>
    </>
  )
}