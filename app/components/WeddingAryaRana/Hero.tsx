'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import moment from 'moment'

import { PostOpenInvitation } from '@/app/lib/event'

type HeroProps = {
  data: any
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Hero({ data, isOpen, setIsOpen }: HeroProps) {
  const dataGuest = data?.guest
  const dataEvent = data?.event
  const [pin, setPin] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setPin(localStorage.getItem('pin'))
  }, [])

  useEffect(() => {
    if (!videoRef.current) return;

    if (isOpen) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen])

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
      <section id="hero" className="relative min-h-[115vh] bg-[url('/images/arya-dan-rana/mobile/bg-hero.png')] md:bg-[url('/images/arya-dan-rana/dekstop/bg-hero.png')] bg-cover bg-no-repeat bg-center">
        <div className="pointer-events-none absolute left-0 right-0 top-0 bottom-[-25%] z-[1] bg-[#DCCB9F]/20 mix-blend-multiply" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[60vh] md:h-[25vh] z-[2] bg-[linear-gradient(180deg,rgba(254,247,237,0)_0%,#FEF7ED_100%)]" />

        {!isOpen && (
          <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 z-[1] bg-[#00000040] backdrop-blur-[11.1px]" />
            <div className="relative z-20 flex items-center justify-center h-full">
              <div className="w-[290px] md:w-[416px] min-h-min rounded-[15px] md:rounded-[20px] shadow-[0px_8px_11.6px_0px_#0000008A] zoom-in">
                <div className="w-full h-[180px] md:h-[220px] rounded-tl-[15px] md:rounded-tl-[20px] rounded-tr-[15px] md:rounded-tr-[20px] bg-center bg-cover bg-no-repeat bg-[url('/images/arya-dan-rana/mobile/img-popup-hero.png')] md:bg-[url('/images/arya-dan-rana/mobile/img-popup-hero.png')]"></div>
                <div className="relative w-full pt-[28px] md:pt-[27px] pb-[28px] md:pb-[40px] rounded-bl-[15px] md:rounded-bl-[20px] rounded-br-[15px] md:rounded-br-[20px] font-cormorantgaramond text-black text-center bg-[#EBE8E5]">
                  <h6 className="text-xs md:text-lg font-normal leading-none md:uppercase">The Wedding of</h6>
                  <h2 className="font-bochan text-[#6D761C] text-[28px] md:text-[32px] leading-[36px] font-normal mt-3.5">{dataEvent?.groomName} & {dataEvent?.brideName}</h2>
                  <h6 className="md:hidden text-[14px] md:text-base font-medium leading-[25px] md:leading-[31px] mt-2.5">Dear,</h6>
                  <h6 className="hidden md:block text-[14px] font-medium leading-[31px] md:leading-[31px] mt-[22px]">Dear Mr./Mrs./Ms.</h6>
                  <h6 className="text-lg md:text-lg font-medium leading-[31px] md:leading-[31px] capitalize">{dataGuest.name ?? '.........'}</h6>
                  <p className="text-xs font-medium leading-[13px] md:leading-[16px] mt-5">We sincerely apologize</p>
                  <p className="text-xs font-medium leading-[13px] md:leading-[16px]">for any misspelling of names or titles.</p>
                  <button onClick={() => handleOpen()} className="mx-auto mt-[13px] md:mt-[23px] w-[154px] md:w-[220px] h-[30px] md:h-[40px] bg-[#001A3B] rounded-[52px] md:rounded-[40px] flex items-center justify-center">
                    <span className="text-xs md:text-lg leading-[20px] font-medium text-[#F6F6F4] uppercase">view invitation</span>
                  </button>

                  {/* Image Absolute */}
                  <Image src="/images/arya-dan-rana/mobile/img-kiri-atas-popup-hero.png" alt="Picture of gambar kiri atas popup hero" width={43} height={63} className={`md:hidden absolute left-0 top-0 pointer-events-none`} />

                  <Image src="/images/arya-dan-rana/mobile/img-kanan-bawah-popup-hero.png" alt="Picture of gambar kanan bawah popup hero" width={58} height={97} className={`md:hidden absolute right-0 bottom-0 pointer-events-none`} />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="h-full relative z-10 text-center font-cormorantgaramond text-[#162F4E] pt-[177px]">
          <Image src="/images/arya-dan-rana/mobile/logo-singkatan-pengantin.png" alt="Picture of logo singkatan pengantin" width={122} height={122} className={`md:hidden pointer-events-none mx-auto ${isOpen ? 'zoom-in' : ''}`} />
          <Image src="/images/arya-dan-rana/dekstop/logo-singkatan-pengantin.png" alt="Picture of logo singkatan pengantin" width={221} height={221} className={`hidden md:block pointer-events-none mx-auto ${isOpen ? 'zoom-in' : ''}`} />
          <h4 className={`text-base md:text-[28px] font-medium uppercase mt-[39px] md:mt-[47px] ${isOpen ? 'zoom-in' : ''}`}>the wedding of</h4>
          <div className="w-[222px] md:w-[362px] mt-[11px] md:mt-[21px] mx-auto text-left">
            <h2 className={`font-bochan text-[#6D761C] text-[48px] md:text-[72px] leading-[62px] md:leading-[105.29px] ${isOpen ? 'zoom-in' : ''}`}>{dataEvent?.groomName} <br /> & {dataEvent?.brideName}</h2>
          </div>
          <h4 className={`text-lg md:text-3xl font-medium mt-[9px] md:mt-[21px] ${isOpen ? 'zoom-in' : ''}`}>{moment(dataEvent?.date).format('DD . MM . YYYY')}</h4>
        </div>

        {/* Image absolute */}
        <Image src="/images/arya-dan-rana/mobile/img-kiri-atas-hero.png" alt="Picture of gambar kiri atas hero" width={193} height={343} className={`md:hidden w-[150px] absolute z-[3] left-0 top-0 pointer-events-none`} />
        <Image src="/images/arya-dan-rana/mobile/img-kanan-atas-hero.png" alt="Picture of gambar kiri atas hero" width={372} height={457} className={`md:hidden w-[250px] absolute z-[3] right-0 top-0 pointer-events-none`} />

        <Image src="/images/arya-dan-rana/mobile/img-kiri-bawah-hero.png" alt="Picture of gambar kiri bawah hero" width={363} height={424} className={`md:hidden w-[200px] absolute z-[3] left-0 -bottom-[20px] pointer-events-none`} />
        <Image src="/images/arya-dan-rana/mobile/img-kanan-bawah-hero.png" alt="Picture of gambar kiri bawah hero" width={392} height={352} className={`md:hidden w-[175px] absolute z-[3] right-0 -bottom-[30px] pointer-events-none`} />

        {/* Dekstop */}
        <Image src="/images/arya-dan-rana/dekstop/img-kiri-atas-hero.png" alt="Picture of gambar kiri atas hero" width={320} height={569} className={`hidden md:block w-[250px] absolute z-[3] left-0 top-0 pointer-events-none`} />
        <Image src="/images/arya-dan-rana/dekstop/img-kanan-atas-hero.png" alt="Picture of gambar kiri atas hero" width={615} height={697} className={`hidden md:block w-[500px] absolute z-[3] right-0 top-0 pointer-events-none`} />

        <Image src="/images/arya-dan-rana/dekstop/img-kiri-bawah-hero.png" alt="Picture of gambar kiri bawah hero" width={642} height={751} className={`hidden md:block w-[350px] absolute z-[3] left-0 -bottom-[50px] pointer-events-none`} />
        <Image src="/images/arya-dan-rana/dekstop/img-kanan-bawah-hero.png" alt="Picture of gambar kiri bawah hero" width={649} height={583} className={`hidden md:block w-[350px] absolute z-[3] right-0 -bottom-[150px] pointer-events-none`} />
      </section>
    </>
  )
}