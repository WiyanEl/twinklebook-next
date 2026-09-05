'use client'

import Image from 'next/image'

type Props = {
  data: any
  isOpen: boolean
}

export default function Footer({ data, isOpen }: Props) {
  return (
    <>
      <footer id="footer" className="relative w-full h-screen bg-[url('/images/arya-dan-rana/mobile/bg-footer.png')] md:bg-[url('/images/arya-dan-rana/dekstop/bg-footer.png')] bg-cover bg-[position:center_bottom] bg-no-repeat">
        <div className="relative h-full text-center font-cormorantgaramond text-[#001A3B] pt-[108px]">
          <h2 className="font-bochan text-[28px] md:text-[32px]">Thank You</h2>

          <p className="md:hidden text-[15px] font-medium leading-[20px] mt-8">
            For being part of our journey. <br /> We look forward to celebrating love, laughter, and <br /> happily ever after with you!
          </p>
          <p className="hidden md:block text-xl mt-[61px]">
            Your presence and blessings have made this <br /> celebration more meaningful, and we are grateful <br /> to share it with you.
          </p>

        </div>
        <Image src="/images/arya-dan-rana/mobile/logo-provite.png" alt="Picture of logo provite" width={89} height={65} className="md:hidden absolute pointer-events-none bottom-[31px] left-1/2 -translate-x-1/2 mx-auto" />
        <Image src="/images/arya-dan-rana/dekstop/logo-provite.png" alt="Picture of logo provite" width={127} height={93} className="hidden md:block absolute pointer-events-none bottom-[31px] left-1/2 -translate-x-1/2 mx-auto" />
      </footer>
    </>
  )
}