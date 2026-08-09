'use client'

import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

type Props = {
  data: any
  isOpen: boolean
}

export default function WeddingGift({ data, isOpen }: Props) {
  const [copied, setCopied] = useState(false)
  const [copied2, setCopied2] = useState(false)

  const handleCopy = (norek:string) => {
    navigator.clipboard.writeText(norek);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 10000);
  };

  return (
    <>
      <div id="wedding-gift" className="relative z-10 w-full min-h-min bg-[url('/images/ronald-dan-vissi/mobile/bg-wedding-gift.png')] bg-cover bg-center bg-no-repeat">
        <div className="relative overflow-hidden z-10 text-center h-full font-cormorantgaramond text-[#FEF8EF] py-[109px]">
          <h2 className="font-slight text-[28px] md:text-[48px] leading-[25px] animate" data-animate="fade-up">Wedding Gift</h2>

          <p className="md:hidden text-[15px] leading-[20px] mt-[42px] animate" data-animate="fade-up">
            Your presence and prayers <br /> are the greatest blessing to us.
          </p>
          <p className="md:hidden text-[15px] leading-[20px] mt-4 animate" data-animate="fade-up">
            Should you wish to honor us with a gift, <br /> please find the details below <br /> for your convenience.
          </p>

          <p className="hidden md:block text-[22px] leading-[30px] mt-[56px] animate" data-animate="fade-up">
            Your presence and prayers <br /> are the greatest blessing to us.
          </p>
          <p className="hidden md:block text-[22px] leading-[30px] mt-5 animate" data-animate="fade-up">
            Should you wish to honor us with a gift, <br /> please find the details below for your convenience.
          </p>

          <div className="flex justify-between items-center w-[241px] md:w-[664px] border-b border-[#FEF8EF] pb-3 mx-auto mt-[37px] md:mt-[99px] animate" data-animate="zoom-in">
            <p className="text-left text-[15px] md:text-[22px] font-normal leading-[20px] md:leading-[25px]">
              <span>BCA</span> <br />
              <span className="mt-1">282 082 0846</span> <br />
              <span className="mt-1">a/n VISSI</span>
            </p>
            <button onClick={() => handleCopy('2820820846')} className="w-[50px] h-[30px] border-b border-[#FEF8EF] text-center" data-animate="zoom-in">
              <span className="text-[15px] md:text-lg font-normal leading-[81%] uppercase">{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>

          <div className="flex justify-between items-center w-[241px] md:w-[664px] border-b border-[#FEF8EF] pb-3 mx-auto mt-[38px] md:mt-[99px] animate" data-animate="zoom-in">
            <p className="text-left text-[15px] md:text-[22px] font-normal leading-[20px] md:leading-[25px]">
              <span>BCA</span> <br />
              <span className="mt-1">4372295566</span> <br />
              <span className="mt-1">a/n RONALD</span>
            </p>
            <button onClick={() => handleCopy('437 229 5566')} className="w-[50px] h-[30px] border-b border-[#FEF8EF] text-center" data-animate="zoom-in">
              <span className="text-[15px] md:text-lg font-normal leading-[81%] uppercase">{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}