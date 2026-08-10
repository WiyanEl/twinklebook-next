'use client'

import { useState, useEffect } from 'react'

import Header from './Header'
import Hero from './Hero'
import Profile from './Profile'
import CountingDown from './CountingDown'
import Location from './Location'
import Gallery from './Gallery'
import Dresscode from './Dresscode'
import WeddingGift from './WeddingGift'
import Wishes from './Wishes'
import Footer from './Footer'

interface Props {
  data: any
  isPreview: boolean
  dataValidation: any
}

export default function WeddingRonaldVissi({ data }: Props) {
  const [isOpen, setIsOpen] = useState(false) // default false
  const [isMobile, setIsMobile] = useState(false)
  console.log(data)
  
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll('.animate');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const animation = el.dataset?.animate;

          if (animation) {
            el.classList.add(animation);
          }
        }
      });
    }, {
      threshold: 0.1
    });

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isOpen]);

  return (
    <>
      <div className="md:flex">
        <div className="hidden md:block fixed left-0 top-0 h-screen w-[calc(100%-390px)]">
          <div className="w-full h-full relative bg-cover" style={{ backgroundImage: "url('/images/ronald-dan-vissi/desktop/bg-hero.png')" }}>
            <div className={`absolute inset-0 bg-[#000000B5]`} />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[160px] text-white text-center flex flex-col gap-1">
              <p className={`font-cormorantgaramond font-normal text-[20px] leading-none uppercase ${isOpen ? 'opacity-0 fade-right' : ''}`}>
                the wedding of
              </p>
              <h1 className={`font-slight font-normal text-[32px] leading-none uppercase mt-8 ${isOpen ? 'opacity-0 fade-right' : ''}`}>
                Ronald dan Vissi
              </h1>
            </div>
          </div>
        </div>
        <div className={`w-full ${isOpen ? 'md:w-[390px] md:ml-auto' : ''}`}>
          <Header isOpen={isOpen} />
          <Hero data={data} isOpen={isOpen} setIsOpen={setIsOpen} />
          <Profile data={data} isOpen={isOpen} />
          <CountingDown data={data} isOpen={isOpen} />
          <Location data={data} isOpen={isOpen} />
          <Gallery data={data} isOpen={isOpen} isMobile={isMobile} />
          <Dresscode data={data} isOpen={isOpen} />
          <WeddingGift data={data} isOpen={isOpen} />
          <Wishes data={data} isOpen={isOpen} />
          <Footer data={data} isOpen={isOpen} />
        </div>
      </div>
    </>
  )
}