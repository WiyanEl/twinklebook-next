'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function CountingDown({ isOpen, isMobile }: Props) {
  const targetDate = new Date('2026-11-17T00:00:00')

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
      <section id="counting-down" className="counting-down relative z-20 w-full min-h-min bg-[#081930] shadow-[0px_4px_25px_4px_#0000002B]">
        <div className="relative h-full pt-[42px] md:pt-[49px] pb-[41px] md:pb-[53px] text-center font-milyuna text-white">
          <h2 className="text-xl md:text-[38px] font-normal leading-[18px] md:leading-none md:tracking-[0.043em] uppercase animate" data-animate="zoom-in">saturday, 17 october 2026</h2>
          <div className="flex gap-[14px] md:gap-[32px] justify-center mt-[18px] md:mt-[24px]">
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
    <div className="flex flex-col gap-1 md:gap-1.5 items-center w-[73px] md:w-[121px] h-[71px] md:h-[126px] rounded-[6px] md:rounded-[25px] bg-white shadow-[0.71px_2.82px_6.39px_1.41px_#00000026] pt-2 md:pt-3.5 text-[#000000] animate" data-animate="zoom-in">
      <p className="font-lora font-medium text-[41px] md:text-[62px] leading-[104%] md:leading-none md:tracking-[0.043em]">
        {value}
      </p>
      <p className="font-lora font-medium text-[10px] md:text-lg leading-none md:tracking-[0.043em] capitalize">
        {label}
      </p>
    </div>
  )
}