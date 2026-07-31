'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useScrollSmooth } from '@/app/hooks/useScrollSmooth'

export default function Header({ isOpen }: {isOpen: boolean}) {
  const [show, setShow] = useState(true)
  const [lastScroll, setLastScroll] = useState(0)
  const [open, setOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const { handleScrollDown } = useScrollSmooth()

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY

      if (current <= 10) {
        setShow(true)
      } else if (current > lastScroll) {
        setShow(false)
      } else {
        setShow(true)
      }

      setLastScroll(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScroll])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setOpen(false)
      setIsClosing(false)
    }, 250)
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-500
        md:translate-x-0
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`
      }>
      <div className="w-[92vw] max-w-6xl">
        {!open && (
          <div className="flex items-center justify-start text-white">
            <button onClick={() => setOpen(!open)} className="relative top-[21px] left-[22px] md:top-[50px] md:left-[50px]">
              <Image src="/images/kevin-dan-michelle/icon-menu-toggle.png" alt="Picture of icon menu" width={25} height={17} className="md:w-[45px] md:h-[30px]" />
            </button>
          </div>
        )}

        {(open || isClosing) && (
          <>
            <div onClick={handleClose} className="w-screen h-screen fixed inset-0 z-40" />
            <div className={`relative z-50 top-[12px] md:top-[24px] left-[22px] md:left-[41px] w-[255px] md:w-[424px] min-h-min bg-[#7B7B7B]/70 flex gap-2 ps-[6px] ${isClosing ? 'animate-menu-out' : 'animate-menu-in'}`} style={{ transformOrigin: 'top left' }}>
              <div>
                <button className={`font-ibm text-2xl md:text-[34px] font-light leading-none text-white uppercase opacity-0 mt-[6px] md:mt-[18px] md:ml-[13px] ${isClosing ? 'animate-close-menu-out' : 'animate-close-menu-in'}`} onClick={() => handleClose()}>x</button>
              </div>
              <div className={`flex flex-col font-noto text-white mt-[36px] md:mt-[55px] mb-[32px] ${isClosing ? 'animate-close-menu-out' : ''}`}>
                <div className="overflow-hidden min-h-min">
                  <Link href="#hero" className="flex items-center gap-1 relative left-[-18px] md:left-[-25px] hover:left-0 transition-all duration-300 uppercase opacity-0 animate-item-menu-in" onClick={handleScrollDown}>
                    <img src="/images/kevin-dan-michelle/arrow-right.png" className="w-[15px] md:w-[20px]" alt="" />
                    <span className="text-xs md:text-lg leading-none font-medium">home</span>
                  </Link>
                </div>
                <div className="overflow-hidden min-h-min mt-2.5">
                  <Link href="#profile" className="flex items-center gap-1 relative left-[-18px] md:left-[-25px] hover:left-0 transition-all duration-300 uppercase opacity-0 animate-item-menu-in" onClick={handleScrollDown} style={{ animationDelay: '0.05s' }}>
                    <img src="/images/josiah-dan-stevie/arrow-right.png" className="w-[15px]  md:w-[20px]" alt="" />
                    <span className="text-xs md:text-lg leading-none font-medium">profile</span>
                  </Link>
                </div>
                <div className="overflow-hidden min-h-min mt-2.5">
                  <Link href="#counting-down" className="flex items-center gap-1 relative left-[-18px] md:left-[-25px] hover:left-0 transition-all duration-300 uppercase opacity-0 animate-item-menu-in" onClick={handleScrollDown} style={{ animationDelay: '0.25s' }}>
                    <img src="/images/josiah-dan-stevie/arrow-right.png" className="w-[15px]  md:w-[20px]" alt="" />
                    <span className="text-xs md:text-lg leading-none font-medium">date</span>
                  </Link>
                </div>
                <div className="overflow-hidden min-h-min mt-2.5">
                  <Link href="#location" className="flex items-center gap-1 relative left-[-18px] md:left-[-25px] hover:left-0 transition-all duration-300 uppercase opacity-0 animate-item-menu-in" onClick={handleScrollDown} style={{ animationDelay: '0.45s' }}>
                    <img src="/images/josiah-dan-stevie/arrow-right.png" className="w-[15px] md:w-[20px]" alt="" />
                    <span className="text-xs md:text-lg leading-none font-medium">location</span>
                  </Link>
                </div>
                <div className="overflow-hidden min-h-min mt-2.5">
                  <Link href="#gallery" className="flex items-center gap-1 relative left-[-18px] md:left-[-25px] hover:left-0 transition-all duration-300 uppercase opacity-0 animate-item-menu-in" onClick={handleScrollDown} style={{ animationDelay: '0.55s' }}>
                    <img src="/images/josiah-dan-stevie/arrow-right.png" className="w-[15px] md:w-[20px]" alt="" />
                    <span className="text-xs md:text-lg leading-none font-medium">gallery</span>
                  </Link>
                </div>
                <div className="overflow-hidden min-h-min mt-2.5">
                  <Link href="#reservation" className="flex items-center gap-1 relative left-[-18px] md:left-[-25px] hover:left-0 transition-all duration-300 uppercase opacity-0 animate-item-menu-in" onClick={handleScrollDown} style={{ animationDelay: '0.45s' }}>
                    <img src="/images/josiah-dan-stevie/arrow-right.png" className="w-[15px] md:w-[20px]" alt="" />
                    <span className="text-xs md:text-lg leading-none font-medium">rsvp</span>
                  </Link>
                </div>
                <div className="overflow-hidden min-h-min mt-2.5">
                  <Link href="#wedding-gift" className="flex items-center gap-1 relative left-[-18px] md:left-[-25px] hover:left-0 transition-all duration-300 uppercase opacity-0 animate-item-menu-in" onClick={handleScrollDown} style={{ animationDelay: '0.45s' }}>
                    <img src="/images/josiah-dan-stevie/arrow-right.png" className="w-[15px] md:w-[20px]" alt="" />
                    <span className="text-xs md:text-lg leading-none font-medium">wedding gift</span>
                  </Link>
                </div>
                <div className="overflow-hidden min-h-min mt-2.5">
                  <Link href="#wishes" className="flex items-center gap-1 relative left-[-18px] md:left-[-25px] hover:left-0 transition-all duration-300 uppercase opacity-0 animate-item-menu-in" onClick={handleScrollDown} style={{ animationDelay: '0.45s' }}>
                    <img src="/images/josiah-dan-stevie/arrow-right.png" className="w-[15px] md:w-[20px]" alt="" />
                    <span className="text-xs md:text-lg leading-none font-medium">wishes</span>
                  </Link>
                </div>
                <div className="overflow-hidden min-h-min mt-[34px]">
                  <p className="text-[8px] md:text-[14px] font-light leading-[106%] opacity-0 animate-item-in" style={{ animationDelay: '0.65s' }}>
                    Select a section above to continue
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

      </div>
    </header>
  )
}