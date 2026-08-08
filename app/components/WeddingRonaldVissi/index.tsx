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
    </>
  )
}