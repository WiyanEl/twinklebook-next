'use client'

import Image from 'next/image'

type Props = {
  data: any
  isOpen: boolean
}

export default function Footer({ data, isOpen }: Props) {
  return (
    <>
      <footer id="footer" className="relative w-full min-h-screen bg-[url('/images/ronald-dan-vissi/mobile/bg-footer.png')] bg-cover bg-top bg-no-repeat">
        <div className="relative h-full text-center font-cormorantgaramond text-[#FEF8EF] pt-[109px]">
          <h2 className="font-slight [-webkit-text-stroke:0.5px_#FEF8EF] text-[28px] leading-[25px] animate" data-animate="fade-up">Thank You</h2>

          <p className="text-[15px] leading-[20px] mt-[35px] animate" data-animate="fade-up">
            For being part of our journey. <br /> We look forward to celebrating love, laughter, and <br /> happily ever after with you!
          </p>

          <p className="text-[15px] leading-[20px] mt-[21px] animate" data-animate="fade-up">
            #LaBonneVie
          </p>

        </div>
        <Image src="/images/ronald-dan-vissi/mobile/logo-provite.png" alt="Picture of logo provite" width={89} height={89} className="absolute pointer-events-none bottom-[50px] left-1/2 -translate-x-1/2 mx-auto" />
      </footer>
    </>
  )
}