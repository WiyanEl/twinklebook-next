'use client'

import { useState, useEffect } from 'react'
import WrapperTop from './WrapperTop'
import WrapperBottom from './WrapperBottom'
import Header from './Header'

interface Props {
    data: any
    isPreview: boolean
    dataValidation: any
}

export default function WeddingKevinMichelle({ data }: Props) {
  const [isOpen, setIsOpen] = useState(false) // default false
  const [isMobile, setIsMobile] = useState(false)

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
      <div className="relative w-full min-h-screen overflow-x-hidden bg-top bg-cover bg-no-repeat bg-[url('/images/kevin-dan-michelle/bg-full-mobile.png')] md:bg-[url('/images/kevin-dan-michelle/bg-full.png')]">
        <Header isOpen={isOpen} />
        <WrapperTop data={data} isOpen={isOpen} setIsOpen={setIsOpen} isMobile={isMobile} />
        <WrapperBottom data={data} isOpen={isOpen} setIsOpen={setIsOpen} isMobile={isMobile} />
      </div>
    </>
  )
}