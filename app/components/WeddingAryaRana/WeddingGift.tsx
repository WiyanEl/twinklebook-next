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
      <section id="wedding-gift" className="relative w-full min-h-min bg-[url('/images/arya-dan-rana/mobile/bg-things-to-do.png')] md:bg-[url('/images/arya-dan-rana/dekstop/bg-wedding-gift.png')] bg-cover bg-no-repeat pt-[24px]">
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[#DCCB9F]/10 mix-blend-multiply" />
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-[30vh] md:h-[50vh] z-[2] bg-[linear-gradient(180deg,#FEF7ED_0%,#FEF7ED_50%,rgba(254,247,237,0)_100%)]" />

        <div className="relative z-[3] h-full text-center font-cormorantgaramond text-[#001A3B] bg-[url('/images/arya-dan-rana/mobile/bg-kertas-wedding-gift.png')] md:bg-[url('/images/arya-dan-rana/dekstop/bg-kertas-wedding-gift.png')] bg-cover md:bg-contain bg-no-repeat bg-center pt-[168px] md:pt-[356px] pb-[182px] md:pb-[388px]">
          <h2 className="font-bochan text-2xl md:text-[32px] md:uppercase animate" data-animate="fade-up">Wedding Gift</h2>
          
          <p className="text-[15px] md:text-[22px] leading-[18px] md:leading-[26px] mt-8 md:mt-[60px] animate" data-animate="fade-up">
            Your presence and prayers <br /> are the greatest blessing to us.
          </p>
          <p className="text-[15px] md:text-[22px] leading-[18px] md:leading-[26px] mt-4 md:mt-[30px] animate" data-animate="fade-up">
            Should you wish to honor us with a gift, <br /> please find the details below <br /> for your convenience.
          </p>

          <div className="flex w-[285px] md:w-[480px] h-[66px] md:h-[120px] bg-[#FBF8EC] rounded-[10.92px] md:rounded-[20px] mt-[43px] md:mt-[78px] mx-auto shadow-[0_3px_5.5px_0_#00000040] animate" data-animate="fade-up">
            <div className="w-[23%] h-full flex">
              <Image src="/images/arya-dan-rana/mobile/logo-bca.png" alt="Picture of logo bca" width={45} height={45} className="w-[34px] md:w-[45px] mx-auto pointer-events-none m-auto" />
            </div>
            <div className="w-[54%] h-full flex flex-col text-start justify-center">
              <span className="font-garamond text-xs md:text-[22px] font-bold leading-[15px] md:leading-[25px]">0123456789</span>
              <span className="text-xs md:text-[22px] leading-[15px] md:leading-[25px] uppercase">bca</span>
              <span className="text-xs md:text-[22px] leading-[15px] md:leading-[25px]">Lorem Ipsum dolor</span>
            </div>
            <div onClick={() => handleCopy('0123456789', 1)} className="w-[23%] h-full flex justify-center items-center">
              <span className="text-xs md:text-xl font-bold leading-[13px] md:leading-[25px]">{copied ? "Copied" : "Copy"}</span>
            </div>
          </div>
        </div>

        {/* Image Absolute */}
        <Image src="/images/arya-dan-rana/mobile/img-kiri-atas-wedding-gift.png" alt="Picture of gambar kiri atas wedding gift" width={103} height={141} className={`md:hidden absolute z-[3] left-0 top-[24px] pointer-events-none`} />
        <Image src="/images/arya-dan-rana/mobile/img-kanan-atas-wedding-gift.png" alt="Picture of gambar kanan atas wedding gift" width={157} height={157} className={`md:hidden absolute z-[3] -right-[10px] top-0 pointer-events-none`} />

        <Image src="/images/arya-dan-rana/mobile/img-kiri-bawah-wedding-gift.png" alt="Picture of gambar kiri bawah wedding gift" width={250} height={375} className={`md:hidden w-[145px] absolute z-[3] left-0 bottom-0 pointer-events-none`} />
        <Image src="/images/arya-dan-rana/mobile/img-kanan-bawah-wedding-gift.png" alt="Picture of gambar kiri bawah wedding gift" width={177} height={180} className={`md:hidden w-[157px] absolute z-[3] right-0 bottom-0 pointer-events-none`} />

        {/* Dekstop */}
        <Image src="/images/arya-dan-rana/dekstop/img-kiri-atas-wedding-gift.png" alt="Picture of gambar kiri atas wedding gift" width={280} height={316} className={`hidden md:block absolute z-[3] left-[450px] top-[24px] pointer-events-none`} />
        <Image src="/images/arya-dan-rana/dekstop/img-kanan-atas-wedding-gift.png" alt="Picture of gambar kanan atas wedding gift" width={350} height={350} className={`hidden md:block absolute z-[3] right-[470px] top-0 pointer-events-none`} />

        <Image src="/images/arya-dan-rana/dekstop/img-kiri-bawah-wedding-gift.png" alt="Picture of gambar kiri bawah wedding gift" width={458} height={757} className={`hidden md:block absolute z-[3] left-[430px] bottom-0 pointer-events-none`} />
        <Image src="/images/arya-dan-rana/dekstop/img-kanan-bawah-wedding-gift.png" alt="Picture of gambar kiri bawah wedding gift" width={396} height={402} className={`hidden md:block absolute z-[3] right-[450px] bottom-0 pointer-events-none`} />
      </section>
    </>
  )
}