'use client'

import Image from 'next/image'

type Props = {
  data: any
  isOpen: boolean
}

export default function Footer({ data, isOpen }: Props) {
  return (
    <>
      <footer id="footer" className="relative w-full min-h-screen bg-[url('/images/ronald-dan-vissi/mobile/bg-footer.png')] bg-cover bg-center bg-no-repeat bg-fixed">
        <div className="relative h-full text-center font-cormorantgaramond text-[#FEF8EF] pt-[109px] md:pt-[150px]">
          <h2 className="font-slight text-[28px] md:text-[48px] leading-[25px] animate" data-animate="fade-up">Thank You</h2>

          <p className="text-[15px] md:text-[22px] leading-[20px] mt-[35px] md:mt-[79px] animate" data-animate="fade-up">
            For being part of our journey. <br /> We look forward to celebrating love, laughter, and <br /> happily ever after with you!
          </p>

          <p className="text-[15px] md:text-[22px] leading-[20px] mt-[21px] md:mt-[29px] animate" data-animate="fade-up">
            #LaBonneVie
          </p>

        </div>
        <Image src="/images/ronald-dan-vissi/mobile/logo-provite.png" alt="Picture of logo provite" width={89} height={89} className="md:w-[120px] absolute pointer-events-none bottom-[50px] left-1/2 -translate-x-1/2 mx-auto" />
      </footer>
    </>
  )
}