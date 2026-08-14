'use client'

import { useState, useEffect, useRef } from 'react'

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
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const dataEvent = data?.event
  const dataContent = data?.content
  const audioRef = useRef<HTMLAudioElement>(null)
  console.log(data)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  
  useEffect(() => {
    if (!isOpen) {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }

    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
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

  useEffect(() => {
    if (!audioRef.current) return

    if (isOpen) {
      audioRef.current.play().catch((error) => {
        console.log('Audio gagal diputar:', error)
      })
    } else {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }, [isOpen])

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="https://media.twinklebook.com/Media/File/2026/08/10b0244b-a2a4-485e-bc17-d8d628c05aeb.mp3"
      />
      <div className="md:flex">
        <div className="hidden md:block fixed left-0 top-0 h-screen w-[calc(100%-390px)]">
          <div className="w-full h-full relative bg-cover" style={{ backgroundImage: `url('https://media.twinklebook.com/${dataContent.primaryImageData[0].url}')` }}>
            <div className={`absolute inset-0 bg-[#000000B5]`} />
            <div className="w-full absolute left-1/2 -translate-x-1/2 bottom-[160px] text-white text-center flex flex-col gap-1">
              <p className={`font-cormorantgaramond font-normal text-[20px] leading-none uppercase ${isOpen ? 'opacity-0 fade-right' : ''}`}>
                the wedding of
              </p>
              <h1 className={`font-slight font-normal text-[48px] leading-none mt-8 ${isOpen ? 'opacity-0 fade-right' : ''}`}>
                {dataEvent?.groomName} & {dataEvent?.brideName}
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