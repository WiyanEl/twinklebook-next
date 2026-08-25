'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  data: any
  isOpen: boolean
}

export function formatWeddingDate(date: string) {
  return new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}

export default function CountingDown({ data, isOpen }: Props) {
  const dataEvent = data?.event
  const targetDate = new Date('2026-10-24T00:00:00') //new Date(dataEvent?.date)

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
      <section id="counting-down" className="counting-down relative w-full min-h-min bg-[url('/images/arya-dan-rana/mobile/bg-counting-down.png')] bg-cover bg-center bg-no-repeat"> 
        <div className="relative z-20 h-full pt-[41px] pb-[41px] text-center font-cormorantgaramond text-[#001A3B]">
          <h2 className="text-[24px] font-semibold leading-[20px] animate" data-animate="fade-up">SATURDAY, 24 October 2026</h2>
          <div className="flex gap-[14px] justify-center mt-[27px]">
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
    <div className="flex flex-col gap-1 pb-2 items-center w-[73px] min-h-min border-[1.5px] border-[#001A3B] rounded-[6px] bg-[#001A3B] shadow-[0.71px_2.82px_6.39px_1.41px_#00000026] text-white animate" data-animate="zoom-in">
      <p className="font-cormorantgaramond font-medium text-[41px] leading-[104%]">
        {value}
      </p>
      <p className="font-cormorantgaramond font-medium text-xs leading-none capitalize mt-1">
        {label}
      </p>
    </div>
  )
}