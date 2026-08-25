'use client'

import Image from 'next/image'

type Props = {
  data: any
  isOpen: boolean
}

export default function Footer({ data, isOpen }: Props) {
  return (
    <>
      <footer id="footer" className="relative w-full h-screen bg-[url('/images/arya-dan-rana/mobile/bg-footer.png')] bg-cover bg-top bg-no-repeat">
        <div className="relative h-full text-center font-cormorantgaramond text-[#001A3B] pt-[80px]">
          <h2 className="font-bochan text-[28px] animate" data-animate="fade-up">Thank You</h2>

          <p className="text-[15px] font-medium leading-[20px] mt-8 animate" data-animate="fade-up">
            For being part of our journey. <br /> We look forward to celebrating love, laughter, and <br /> happily ever after with you!
          </p>

        </div>
        <Image src="/images/arya-dan-rana/mobile/logo-provite.png" alt="Picture of logo provite" width={89} height={65} className="absolute pointer-events-none bottom-[31px] left-1/2 -translate-x-1/2 mx-auto" />
      </footer>
    </>
  )
}