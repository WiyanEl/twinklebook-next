'use client'

import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

type Props = {
  data: any
  isOpen: boolean
}

export default function ThingsToDo({ data, isOpen }: Props) {
  const [showDetail1, setShowDetail1] = useState(false);
  const [showDetail2, setShowDetail2] = useState(false);
  const [showDetail3, setShowDetail3] = useState(false);
  const [showDetail4, setShowDetail4] = useState(false);
  const [showDetail5, setShowDetail5] = useState(false);

  return (
    <>
      <section id="things-to-do" className="relative w-full min-h-min bg-[url('/images/arya-dan-rana/mobile/bg-things-to-do.png')] md:bg-[url('/images/arya-dan-rana/dekstop/bg-things-to-do.png')] bg-cover bg-no-repeat pt-[24px]">
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[#DCCB9F]/10 mix-blend-multiply" />

        <div className="relative z-[3] h-full text-center font-cormorantgaramond text-[#001A3B] pt-[80px] pb-[176px] md:pb-[200px]">
          <h2 className="font-bochan text-2xl md:text-[32px] uppercase animate" data-animate="fade-up">things to do</h2>

          <p className="text-[15px] md:text-[22px] mt-[30px] md:mt-[60px] animate" data-animate="fade-up">
            Discover a curated selection of places to explore, <br /> experience, and enjoy during your stay.
          </p>

          <div
            onClick={() => {
              if (showDetail1) {
                setShowDetail1(false);
              }
            }}
            className="relative z-[3] w-[340px] md:w-[500px] rounded-[15px] md:rounded-[23px] bg-[url('/images/arya-dan-rana/mobile/img-todo-1.png')] bg-cover bg-center bg-no-repeat mx-auto mt-[20px] md:mt-[40px] py-[20px] md:py-[30px] text-center animate cursor-pointer"
            data-animate="fade-up"
          >
            <div className="pointer-events-none absolute inset-0 z-[1] rounded-[15px] bg-[#000000]/70 mix-blend-multiply" />
            <div className="relative z-[3]">
              <h3 className="text-white text-[32px] md:text-[48px] italic font-bold">
                Arts & Culture
              </h3>

              {!showDetail1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowDetail1(true);
                  }}
                  className="text-white text-base md:text-[22px] leading-[81%] underline italic cursor-pointer mt-[10px]"
                >
                  Detail
                </button>
              )}
            </div>

            {/* Detail */}
            <div
              className={`
                relative z-[3] text-left w-[314px] md:w-[430px] mx-auto
                overflow-hidden
                transition-all duration-700
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${
                  showDetail1
                    ? "max-h-[300px] opacity-100 mt-[15px] md:mt-[25px] translate-y-0"
                    : "max-h-0 opacity-0 mt-0 -translate-y-[10px]"
                }
              `}
            >
              <ul className="list-disc pl-[20px]">
                <li className="text-white text-[15px] md:text-[22px] leading-[153%] font-semibold">
                  Experience Melukat in one of the Ubud temples
                </li>

                <li className="text-white text-[15px] md:text-[22px] leading-[153%] font-semibold">
                  Watch Kecak Dance in Uluwatu
                </li>

                <li className="text-white text-[15px] md:text-[22px] leading-[153%] font-semibold">
                  Visit Nyaman Gallery in Seminya
                  <br />
                  <span className="font-light italic">
                    *shop and sunset at La Brisa Sunday Market
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div
            onClick={() => {
              if (showDetail2) {
                setShowDetail2(false);
              }
            }}
            className="relative z-[3] w-[340px] md:w-[500px] rounded-[15px] md:rounded-[23px] bg-[url('/images/arya-dan-rana/mobile/img-todo-2.png')] bg-cover bg-center bg-no-repeat mx-auto mt-[15px] md:mt-[25px] py-[20px] md:py-[30px] text-center animate cursor-pointer"
            data-animate="fade-up"
          >
            <div className="pointer-events-none absolute inset-0 z-[1] rounded-[15px] bg-[#000000]/70 mix-blend-multiply" />
            <div className="relative z-[3]">
              <h3 className="text-white text-[32px] md:text-[48px] italic font-bold">
                Sports
              </h3>

              {!showDetail2 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowDetail2(true);
                  }}
                  className="text-white text-base md:text-[22px] leading-[81%] underline italic cursor-pointer mt-[10px]"
                >
                  Detail
                </button>
              )}
            </div>

            {/* Detail */}
            <div
              className={`
                relative z-[3] text-left w-[314px] md:w-[430px] mx-auto
                overflow-hidden
                transition-all duration-700
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${
                  showDetail2
                    ? "max-h-[300px] opacity-100 mt-[15px] md:mt-[25px] translate-y-0"
                    : "max-h-0 opacity-0 mt-0 -translate-y-[10px]"
                }
              `}
            >
              <ul className="list-disc pl-[20px]">
                <li className="text-white text-[15px] md:text-[22px] leading-[153%] font-semibold">
                  Water Sports in the Nusa Dua beaches
                </li>

                <li className="text-white text-[15px] md:text-[22px] leading-[153%] font-semibold">
                  Yoga in Desa Potato Head, Seminyak
                </li>

                <li className="text-white text-[15px] md:text-[22px] leading-[153%] font-semibold">
                  Learn to surf in Kedungu
                </li>
              </ul>
            </div>
          </div>

          <div
            onClick={() => {
              if (showDetail3) {
                setShowDetail3(false);
              }
            }}
            className="relative z-[3] w-[340px] md:w-[500px] rounded-[15px] md:rounded-[23px] bg-[url('/images/arya-dan-rana/mobile/img-todo-3.png')] bg-cover bg-center bg-no-repeat mx-auto mt-[15px] md:mt-[25px] py-[20px] md:py-[30px] text-center animate cursor-pointer"
            data-animate="fade-up"
          >
            <div className="pointer-events-none absolute inset-0 z-[1] rounded-[15px] bg-[#000000]/70 mix-blend-multiply" />
            <div className="relative z-[3]">
              <h3 className="text-white text-[32px] md:text-[48px] italic font-bold">
                Beach and Travel
              </h3>

              {!showDetail3 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowDetail3(true);
                  }}
                  className="text-white text-base md:text-[22px] leading-[81%] underline italic cursor-pointer mt-[10px]"
                >
                  Detail
                </button>
              )}
            </div>

            {/* Detail */}
            <div
              className={`
                relative z-[3] text-left w-[314px] md:w-[430px] mx-auto
                overflow-hidden
                transition-all duration-700
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${
                  showDetail3
                    ? "max-h-[300px] opacity-100 mt-[15px] md:mt-[25px] translate-y-0"
                    : "max-h-0 opacity-0 mt-0 -translate-y-[10px]"
                }
              `}
            >
              <ul className="list-disc pl-[20px]">
                <li className="text-white text-[15px] md:text-[22px] leading-[153%] font-semibold">
                  Snorkel and take a fast boat to Nusa Penida 
                </li>

                <li className="text-white text-[15px] md:text-[22px] leading-[153%] font-semibold">
                  Visit the black sand Cemagi Beach
                </li>

                <li className="text-white text-[15px] md:text-[22px] leading-[153%] font-semibold">
                  Visit goa rang reng waterfall in Ubud
                </li>
              </ul>
            </div>
          </div>

          <div
            onClick={() => {
              if (showDetail4) {
                setShowDetail4(false);
              }
            }}
            className="relative z-[3] w-[340px] md:w-[500px] rounded-[15px] md:rounded-[23px] bg-[url('/images/arya-dan-rana/mobile/img-todo-4.png')] bg-cover bg-center bg-no-repeat mx-auto mt-[15px] md:mt-[25px] py-[20px] md:py-[30px] text-center animate cursor-pointer"
            data-animate="fade-up"
          >
            <div className="pointer-events-none absolute inset-0 z-[1] rounded-[15px] bg-[#000000]/70 mix-blend-multiply" />
            <div className="relative z-[3]">
              <h3 className="text-white text-[32px] md:text-[48px] italic font-bold">
                Food and Drinks
              </h3>

              {!showDetail4 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowDetail4(true);
                  }}
                  className="text-white text-base md:text-[22px] leading-[81%] underline italic cursor-pointer mt-[10px]"
                >
                  Detail
                </button>
              )}
            </div>

            {/* Detail */}
            <div
              className={`
                relative z-[3] text-left w-[314px] mx-auto
                overflow-hidden
                transition-all duration-700
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${
                  showDetail4
                    ? "max-h-[300px] opacity-100 mt-[15px] md:mt-[25px] translate-y-0"
                    : "max-h-0 opacity-0 mt-0 -translate-y-[10px]"
                }
              `}
            >
              <ul className="list-disc pl-[20px]">
                <li className="text-white text-[15px] md:text-[22px] leading-[153%] font-semibold">
                  Warung Eropa  
                </li>

                <li className="text-white text-[15px] md:text-[22px] leading-[153%] font-semibold">
                  Mama San
                </li>

                <li className="text-white text-[15px] md:text-[22px] leading-[153%] font-semibold">
                  Warung Mak Beng
                  <br />
                  <span className="font-light">* Black Sands Brewery</span> <br />
                  <span className="font-light">* Rayjin Teppanyaki</span> <br />
                  <span className="font-light">* BoynCow</span> <br />
                  <span className="font-light">* room4dessert</span> <br />
                  <span className="font-light">* Kurasu Ubudssert</span> <br />
                  <span className="font-light">* Seafood at Jimbaran</span>
                </li>
              </ul>
            </div>
          </div>

          <div
            onClick={() => {
              if (showDetail5) {
                setShowDetail5(false);
              }
            }}
            className="relative z-[3] w-[340px] md:w-[500px] rounded-[15px] md:rounded-[23px] bg-[url('/images/arya-dan-rana/mobile/img-todo-5.png')] bg-cover bg-center bg-no-repeat mx-auto mt-[15px] md:mt-[25px] py-[20px] md:py-[30px] text-center animate cursor-pointer"
            data-animate="fade-up"
          >
            <div className="pointer-events-none absolute inset-0 z-[1] rounded-[15px] bg-[#000000]/70 mix-blend-multiply" />
            <div className="relative z-[3]">
              <h3 className="text-white text-[32px] md:text-[48px] italic font-bold">
                Nightlife
              </h3>

              {!showDetail5 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowDetail5(true);
                  }}
                  className="text-white text-base md:text-[22px] leading-[81%] underline italic cursor-pointer mt-[10px]"
                >
                  Detail
                </button>
              )}
            </div>

            {/* Detail */}
            <div
              className={`
                relative z-[3] text-left w-[314px] md:w-[430px] mx-auto
                overflow-hidden
                transition-all duration-700
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${
                  showDetail5
                    ? "max-h-[300px] opacity-100 mt-[15px] md:mt-[25px] translate-y-0"
                    : "max-h-0 opacity-0 mt-0 -translate-y-[10px]"
                }
              `}
            >
              <ul className="list-disc pl-[20px]">
                <li className="text-white text-[15px] md:text-[22px] leading-[153%] font-semibold">
                  Vault  
                </li>

                <li className="text-white text-[15px] md:text-[22px] leading-[153%] font-semibold">
                  Behind the Green Door 
                </li>

                <li className="text-white text-[15px] md:text-[22px] leading-[153%] font-semibold">
                  Savaya
                </li>

                <li className="text-white text-[15px] md:text-[22px] leading-[153%] font-semibold">
                  Shishi
                </li>

                <li className="text-white text-[15px] md:text-[22px] leading-[153%] font-semibold">
                  Potato Head Beachclub
                </li>

                <li className="text-white text-[15px] md:text-[22px] leading-[153%] font-semibold">
                  Finns Beachclub
                </li>
              </ul>
            </div>
          </div>

          {/* Image Absolute */}
          <Image src="/images/arya-dan-rana/mobile/img-bawah-things-todo.png" alt="Picture of gambar bawah things to do" width={560} height={344} className={`md:hidden absolute z-[3] left-0 bottom-0 pointer-events-none`} />

          {/* Desktop */}
          <Image src="/images/arya-dan-rana/dekstop/img-bawah-things-todo.png" alt="Picture of gambar bawah things to do" width={1874} height={1063} className={`hidden md:block absolute z-[3] left-0 -bottom-[420px] pointer-events-none`} />
        </div>
      </section>
    </>
  )
}