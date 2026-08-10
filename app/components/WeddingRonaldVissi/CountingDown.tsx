'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  data: any
  isOpen: boolean
}

export default function CountingDown({ data, isOpen }: Props) {
  const targetDate = new Date('2026-09-06T00:00:00')

  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance <= 0) {
        clearInterval(interval)
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((distance / (1000 * 60)) % 60)
      const seconds = Math.floor((distance / 1000) % 60)

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <section id="counting-down" className="counting-down relative w-full min-h-min bg-[url('/images/ronald-dan-vissi/mobile/bg-counting-down.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 z-[1] bg-[#0000005C] backdrop-blur-[2px]" />
        <div className="relative z-20 h-full pt-[68px] pb-[68px] text-center font-cormorantgaramond text-white">
          <h2 className="text-[28px] font-normal leading-[111.00000000000001%]  uppercase animate" data-animate="zoom-in">sunday, 6 september 2026</h2>
          <div className="flex gap-[14px] justify-center mt-[18px]">
            <TimeBox value={timeLeft.days} label="days" />
            <TimeBox value={timeLeft.hours} label="hours" />
            <TimeBox value={timeLeft.minutes} label="minutes" />
            <TimeBox value={timeLeft.seconds} label="seconds" />
          </div>
        </div>
      </section>
    </>
  )
}

function TimeBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1 pb-2 items-center w-[73px] min-h-min border-[1.5px] border-white rounded-[6px] bg-[#FFFFFF26] shadow-[0.71px_2.82px_6.39px_1.41px_#00000026] backdrop-blur-[4px] text-white animate" data-animate="zoom-in">
      <p className="font-cormorantgaramond font-medium text-[41px] leading-[104%]">
        {value}
      </p>
      <p className="font-cormorantgaramond font-medium text-[13px] leading-none capitalize">
        {label}
      </p>
    </div>
  )
}