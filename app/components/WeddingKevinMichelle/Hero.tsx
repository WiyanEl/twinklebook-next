'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

import { PostOpenInvitation } from '@/app/lib/event'

type HeroProps = {
  data: any
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  isMobile: boolean
}

export default function Hero({ data, isOpen, setIsOpen, isMobile }: HeroProps) {
  const dataGuest = data?.guest
  const dataEvent = data?.event
  const [pin, setPin] = useState<string | null>(null)

  useEffect(() => {
    setPin(localStorage.getItem('pin'))
  }, [])

  const handleOpen = async () => {
    const json = {
      eventId: dataEvent.id,
      pin: pin
    }

    try {
      const res = await PostOpenInvitation(json)

      console.log('Sent Open')
    } catch (error) {
      
    } finally {
      setIsOpen(true)
    }
  }

  return (
    <>
      <section id="hero" className="relative overflow-hidden z-20 hero w-full h-screen">

        {!isOpen && (
          <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 z-[1] bg-[#00000040] backdrop-blur-[11.1px]" />
            <div className="relative z-20 flex items-center justify-center h-full">
              <div className="w-[290px] md:w-[416px] min-h-min rounded-[15px] md:rounded-[20px] shadow-[0px_8px_11.6px_0px_#0000008A] zoom-in">
                <div className="w-full h-[180px] md:h-[220px] rounded-tl-[15px] md:rounded-tl-[20px] rounded-tr-[15px] md:rounded-tr-[20px] bg-center bg-cover bg-no-repeat bg-[url('/images/kevin-dan-michelle/img-popup-hero-mobile.png')]"></div>
                <div className="relative w-full pt-[47px] md:pt-[62px] pb-[54px] rounded-bl-[15px] md:rounded-bl-[20px] rounded-br-[15px] md:rounded-br-[20px] font-cormorantgaramond text-[#DFD28F] text-center bg-[#081930]">
                  <h6 className="text-xs md:text-lg font-normal leading-none md:uppercase">The Wedding of</h6>
                  <h2 className="font-milyuna text-[26px] md:text-[40px] leading-none font-normal mt-2">Kevin & Michelle</h2>
                  <h6 className="md:hidden text-xs md:text-base font-medium leading-[25px] md:leading-[31px] mt-3">Dear,</h6>
                  <h6 className="hidden md:block text-xs md:text-base font-medium leading-[25px] md:leading-[31px] mt-3">Dear Mr. /Mrs. / Ms.</h6>
                  <h6 className="text-[14px] md:text-xl font-medium leading-[25px] md:leading-[31px] capitalize">{dataGuest.name ?? '.........'}</h6>
                  <p className="text-[10px] md:text-[14px] font-medium leading-[13px] md:leading-[16px] mt-5">We sincerely apologize</p>
                  <p className="text-[10px] md:text-[14px] font-medium leading-[13px] md:leading-[16px]">for any misspelling of names or titles.</p>
                  <button onClick={() => handleOpen()} className="mx-auto mt-4 md:mt-[23px] w-[184px] md:w-[220px] h-[33px] md:h-[40px] bg-[#CDA96A] rounded-[6px] md:rounded-[10px] flex items-center justify-center">
                    <span className="text-[14px] md:text-lg leading-none font-medium text-[#F6F6F4] uppercase">view invitation</span>
                  </button>

                  {/* Image Absolute */}
                  <Image src="/images/kevin-dan-michelle/img-tanaman-kiri-atas-popup-hero-mobile.png" alt="Picture of Tanaman Kiri Atas" width={112} height={127} className="absolute top-0 left-0 w-[83px] md:w-[112px] pointer-events-none" />
                  <Image src="/images/kevin-dan-michelle/img-tanaman-bawah-kanan-popup-hero-mobile.png" alt="Picture of Tanaman Kanan Bawah" width={112} height={127} className="absolute bottom-0 right-0 w-[83px] md:w-[112px] pointer-events-none" />

                  <Image src="/images/kevin-dan-michelle/img-bintang-atas-popup-hero-mobile.png" alt="Picture of Bintang Kanan Atas" width={268} height={213} className="absolute top-0 right-0 w-[218px] md:w-[268px] pointer-events-none" />
                  <Image src="/images/kevin-dan-michelle/img-bintang-bawah-popup-hero-mobile.png" alt="Picture of Bintang Kiri Bawah" width={268} height={213} className="absolute bottom-0 left-0 w-[218px] md:w-[268px] pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="h-full relative z-10 text-center font-cormorantgaramond text-[#DFD28F] pt-[274px] md:pt-[297px]">
          <h4 className={`text-[14px] md:text-[22px] tracking-wider md:tracking-[0.05em] uppercase ${isOpen ? 'zoom-in' : ''}`}>the wedding</h4>
          <h2 className={`font-milyuna text-[42px] md:text-[96px] mt-1 ${isOpen ? 'zoom-in' : ''}`}>Kevin</h2>
          <h2 className={`font-milyuna text-2xl md:text-[48px] mt-2 ${isOpen ? 'zoom-in' : ''}`}>&</h2>
          <h2 className={`font-milyuna text-[42px] md:text-[96px] mt-2 ${isOpen ? 'zoom-in' : ''}`}>Michelle</h2>
          <h4 className={`text-base md:text-[26px] tracking-[0.09em] mt-2 md:mt-0 ${isOpen ? 'zoom-in' : ''}`}>12  .  09  .  26</h4>
          <div className="w-full absolute bottom-[100px] text-center">
            <p className={`text-[14px] md:text-[22px] leading-[16px] md:leading-[30px] font-light ${isOpen ? 'zoom-in' : ''}`}>“So they are no longer two, but one flesh. <br /> Therefore what God has joined together, <br className="md:hidden" /> let no one separate.”</p>
            <p className={`text-[14px]  md:text-[22px] leading-[18px] md:leading-[30px] font-light mt-4 ${isOpen ? 'zoom-in' : ''}`}>Matthew 19:6</p>
          </div>
        </div>

        <Image src="/images/kevin-dan-michelle/img-bintang-kiri-bawah-hero-mobile.png" alt="Picture of background lapisan atas" width={359} height={359} className="md:hidden absolute bottom-0 left-0 w-[259px] pointer-events-none" />
        <Image src="/images/kevin-dan-michelle/img-bintang-hero-mobile.png" alt="Picture of background lapisan atas" width={409} height={409} className="md:hidden absolute top-0 left-0 w-[409px] pointer-events-none" />
        <Image src="/images/kevin-dan-michelle/img-bintang-hero.png" alt="Picture of background lapisan atas" width={1343} height={1343} className="hidden md:block absolute -top-[100px] right-0 pointer-events-none" />
      </section>
    </>
  )
}