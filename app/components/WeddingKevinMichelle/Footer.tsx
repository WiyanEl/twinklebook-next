'use client'

import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function Footer({ isOpen, isMobile }: Props) {
  return (
    <>
      <div id="footer" className="relative z-10 w-full h-1/2">
        <div className="relative overflow-hidden z-10 text-center h-full font-cormorantgaramond text-[#DFD28F] pt-[72px] pb-[160px] md:pt-[223px] md:pb-[500px]">
          <h2 className="font-milyuna text-[40px] md:text-[68px] leading-[22px] md:leading-[44px] animate" data-animate="zoom-in">Thank You</h2>

          <p className="md:hidden text-[14px] leading-[20px] mt-[25px] animate" data-animate="fade-up">
            For being part of our journey. <br />
            We look forward to celebrating love, <br />
            aughter, and happily ever after with you!
          </p>

          <p className="hidden md:block text-[22px] leading-[30px] mt-[61px] animate" data-animate="fade-up">
            For being part of our journey. <br />
            We look forward to celebrating love, <br />
            aughter, and happily ever after with you!
          </p>

          <Image src="/images/kevin-dan-michelle/logo-provite.png" alt="Picture of logo provite" width={148} height={185} className="w-[89px] md:w-[148px] mt-10 md:mt-[49px] mx-auto" />

          {/* Image Absolute */}
          <Image src="/images/kevin-dan-michelle/img-tanaman-kiri-bawah-footer-mobile.png" alt="Picture of tanaman kiri bawah" width={329} height={329} className="md:hidden absolute bottom-0 left-0 w-[229px]" />
          <Image src="/images/kevin-dan-michelle/img-bintang-bawah-footer-mobile.png" alt="Picture of tanaman kiri bawah" width={553} height={553} className="md:hidden absolute bottom-0 right-0" />

          <Image src="/images/kevin-dan-michelle/img-tanaman-kiri-bawah-footer.png" alt="Picture of tanaman kiri bawah" width={1086} height={1086} className="hidden md:block absolute bottom-0 left-0" />
          <Image src="/images/kevin-dan-michelle/img-bintang-bawah-footer-mobile.png" alt="Picture of tanaman kiri bawah" width={1110} height={1110} className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2" />
        </div>
      </div>
    </>
  )
}