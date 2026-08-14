'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

import { PostOpenInvitation } from '@/app/lib/event'

type HeroProps = {
  data: any
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function formatWeddingDate(date: string) {
  return new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
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
      <section id="hero" className="relative h-screen overflow-hidden">
        <video ref={videoRef} muted loop playsInline className={`fixed top-0 bottom-0 w-full h-full object-cover ${isOpen ? "md:left-auto md:right-0 md:w-[390px]" : "left-0"}`}>
          <source src="/images/ronald-dan-vissi/mobile/video-bg-hero.mp4" type="video/mp4" />
        </video>

        {!isOpen && (
          <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 z-[1] bg-[#00000040] backdrop-blur-[11.1px]" />
            <div className="relative z-20 flex items-center justify-center h-full">
              <div className="w-[290px] md:w-[416px] min-h-min rounded-[15px] md:rounded-[20px] shadow-[0px_8px_11.6px_0px_#0000008A] zoom-in">
                <div className="w-full h-[180px] md:h-[220px] rounded-tl-[15px] md:rounded-tl-[20px] rounded-tr-[15px] md:rounded-tr-[20px] bg-center bg-cover bg-no-repeat bg-[url('/images/ronald-dan-vissi/mobile/img-popup-hero.png')] md:bg-[url('/images/ronald-dan-vissi/desktop/img-popup-hero.png')]"></div>
                <div className="relative w-full pt-[28px] md:pt-[27px] pb-[28px] md:pb-[40px] rounded-bl-[15px] md:rounded-bl-[20px] rounded-br-[15px] md:rounded-br-[20px] font-cormorantgaramond text-black text-center bg-[#EBE8E5]">
                  <h6 className="text-xs md:text-lg font-normal leading-none md:uppercase">The Wedding of</h6>
                  <h2 className="font-slight text-[#A4753A] text-2xl md:text-[32px] leading-none font-normal mt-3.5">{dataEvent?.groomName} & {dataEvent?.brideName}</h2>
                  <h6 className="md:hidden text-xs md:text-base font-medium leading-[25px] md:leading-[31px] mt-2.5">Dear,</h6>
                  <h6 className="hidden md:block text-[14px] font-medium leading-[31px] md:leading-[31px] mt-[22px]">Dear,</h6>
                  <h6 className="text-[14px] md:text-lg font-medium leading-[31px] md:leading-[31px] capitalize">{dataGuest.name ?? '.........'}</h6>
                  <p className="text-[10px] md:text-xs font-medium leading-[13px] md:leading-[16px] mt-5">We sincerely apologize</p>
                  <p className="text-[10px] md:text-xs font-medium leading-[13px] md:leading-[16px]">for any misspelling of names or titles.</p>
                  <button onClick={() => handleOpen()} className="mx-auto mt-[17px] md:mt-[23px] w-[184px] md:w-[220px] h-[33px] md:h-[40px] bg-[#473B2F] rounded-[6px] md:rounded-[40px] flex items-center justify-center">
                    <span className="text-[14px] md:text-lg leading-none font-medium text-[#F6F6F4] uppercase">view invitation</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="h-full relative z-10 text-center font-cormorantgaramond text-[#FEF8EF] pt-[102px]">
          <h4 className={`text-[15px] md:text-[22px] tracking-wider md:tracking-[0.05em] uppercase ${isOpen ? 'zoom-in' : ''}`}>the wedding of</h4>
          <h2 className={`font-slight text-[32px] mt-5 ${isOpen ? 'zoom-in' : ''}`}>{dataEvent?.groomName} & {dataEvent?.brideName}</h2>
          <h4 className={`text-[15px] md:text-[22px] mt-5 ${isOpen ? 'zoom-in' : ''}`}>{formatWeddingDate(dataEvent?.date)}</h4>
        </div>
      </section>
    </>
  )
}