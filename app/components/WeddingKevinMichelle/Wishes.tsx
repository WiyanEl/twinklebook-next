'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

type Wish = {
  name: string
  message: string
}

const DEFAULT_WISHES: Wish[] = [
  {
    name: "Yeremia (TESTER)",
    message: "Selamat menempuh Hidup Baru, Gbu",
  },
  {
    name: "Hani",
    message: "Darren dan Given Selamat berbahagia Tuhan selalu Memberkati kehidupan kalian🙏",
  },
  {
    name: "Sinyo",
    message: "Happy wedding ya, semoga menjadi keluarga yg harmonis dan selalu dalam penyertaan Tuhan Yesus amin",
  },
  {
    name: "Kel. Ivan Gladwin Harliono",
    message: "Selamat ya daren and given Bahagia selalu and happy in new chapters Luv to the moon and back",
  },
  {
    name: "Yeremia (TESTER)",
    message: "Selamat menempuh Hidup Baru, Gbu",
  },
  {
    name: "Hani",
    message: "Darren dan Given Selamat berbahagia Tuhan selalu Memberkati kehidupan kalian🙏",
  },
  {
    name: "Sinyo",
    message: "Happy wedding ya, semoga menjadi keluarga yg harmonis dan selalu dalam penyertaan Tuhan Yesus amin",
  },
  {
    name: "Kel. Ivan Gladwin Harliono",
    message: "Selamat ya daren and given Bahagia selalu and happy in new chapters Luv to the moon and back",
  },
]

export default function Wishes({ isOpen, isMobile }: Props) {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [wishes, setWishes] = useState<Wish[]>([])
  const [seeAllMessages, setSeeAllMessages] = useState(false)
  const [search, setSearch] = useState('')
  const filtered = wishes.filter((item) => 
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.message.toLowerCase().includes(search.toLowerCase())
  )
  const [selectedWish, setSelectedWish] = useState<Wish | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem('wishes')

    if (saved) {
      setWishes(JSON.parse(saved))
    } else {
      setWishes(DEFAULT_WISHES)
    }
  }, [])

  useEffect(() => {
    if (wishes.length) {
      localStorage.setItem('wishes', JSON.stringify(wishes))
    }
  }, [wishes])

  const save = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!name.trim() || !message.trim()) return

    const newWish = { name, message }

    setWishes(prev => [newWish, ...prev])

    setName('')
    setMessage('')
  }

  return (
    <>
      <div id="wishes" className="relative z-10 w-full">
        <div className="relative overflow-hidden z-10 text-center h-full font-cormorantgaramond text-[#DFD28F] pt-[115px] md:pt-[225px]">
          <h2 className="font-milyuna text-2xl md:text-[48px] leading-[25px] animate" data-animate="zoom-in">Your Wishes</h2>
          <Image src="/images/kevin-dan-michelle/img-garis-judul-mobile.png" alt="Picture of garis judul" width={194} height={35} className="w-[109px] md:w-[194px] mt-1 md:mt-[25px] mx-auto animate" data-animate="zoom-in" />

          {!seeAllMessages ? (
            <div className="relative text-center">
              <form onSubmit={save} className="mx-auto mt-[32px] md:mt-[50px] animate zoom-in" data-animate="zoom-in">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="block w-[263px] md:w-[691px] h-[33px] md:h-[40px] rounded-[6px] md:rounded-[64px] border-[1px] border-[#CDA96A] bg-transparent px-[13px] md:px-[23px] py-1 text-[14px] md:text-lg leading-[140%] text-[#CDA96A] placeholder:text-[#CDA96A80] mx-auto" placeholder="Desy (Tester)" />
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="block w-[263px] md:w-[691px] h-[60px] md:h-[261px] rounded-[6px] md:rounded-[20px] border-[1px] border-[#CDA96A] bg-transparent px-[13px] md:px-[23px] py-1 text-[14px] md:text-lg leading-[140%] text-[#CDA96A] mx-auto mt-4"></textarea>
                <button type="submit" className="flex justify-center items-center w-[263px] md:w-[691px] h-[33px] md:h-[40px] bg-[#CDA96A] rounded-[6px] border-[0.49px] border-[#CDA96A] mx-auto mt-4">
                  <Image src="/images/kevin-dan-michelle/icon-send.png" alt="Picture of Icon Send" width={15} height={19} className="md:w-[24px] mr-2" />
                  <span className="text-[14px] md:text-lg text-white font-normal leading-[140%] uppercase">send</span>
                </button>
              </form>
              <div className="w-[263px] md:w-[691px] h-[332px] md:h-[526px] rounded-[6px] md:rounded-[20px] border-[0.49px] border-[#CDA96A] py-[18px] md:py-[39px] px-[13px] md:px-[23px] mx-auto mt-4 md:mt-[40px] animate zoom-in" data-animate="zoom-in">
                <div className="w-full h-full overflow-y-auto scroll-smooth">
                  {wishes.length === 0 ? (
                    <p className="text-center text-[14px] md:text-lg text-[#CDA96A]">
                      No message yet
                    </p>
                  ) : (
                    wishes.map((wish, i) => (
                      <div
                        key={i}
                        className="w-full pb-[13px] border-b-[0.49px] border-b-[#CDA96A] text-left text-[#CDA96A] mb-[7px]"
                      >
                        <p className="font-normal text-[14px] md:text-[22px] leading-[140%]">
                          {wish.name}
                        </p>
                        <p className="font-normal text-[14px] md:text-[22px] leading-[140%] mt-[7px]">
                          {wish.message}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>
              <button type="button" onClick={() => setSeeAllMessages(true)} className="flex justify-center items-center w-[263px] md:w-[691px] h-[33px] md:h-[40px] bg-[#CDA96A] rounded-[6px] border-[0.49px] border-[#CDA96A] mx-auto mt-4 animate zoom-in" data-animate="zoom-in">
                  <Image src="/images/kevin-dan-michelle/icon-message.png" alt="Picture of Icon Send" width={17} height={22} className="md:w-[26px] mr-2" />
                  <span className="text-[14px] md:text-lg text-white font-normal leading-[140%] uppercase">see all message</span>
                </button>
            </div>
          ) : (
            <div className="relative text-center text-[#3B3B3B] mt-[47px] md:mt-[89px]">
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="w-[340px] md:w-[691px] h-[33px] md:h-[40px] rounded-[6px] md:rounded-[64px] border-[0.49px] border-[#CDA96A] bg-transparent px-2 py-1 text-[14px] md:text-lg leading-[140%] text-[#CDA96A] placeholder:text-[#CDA96A80] mx-auto animate zoom-in" data-animate="zoom-in" placeholder="Search" />
              <div className="grid grid-cols-2 gap-5 mt-[20px] w-[340px] md:w-[691px] h-[459.87px] md:h-[638px] overflow-y-auto mx-auto">
                {filtered.length === 0 ? (
                  <p className={`col-span-2 text-center text-sm text-white animate'}`}>
                    No message found
                  </p>
                ) : (
                  filtered.map((wish, i) => (
                    <div
                      key={i}
                    
                      className="relative w-[160px] md:w-[252px] h-[140.87px] md:h-[252px] rounded-[9.57px] md:rounded-[20px] bg-[#CDA96A] border-[0.87px] border-white shadow-[5.22px_7.83px_9.74px_2.61px_#0000000F] cursor-pointer zoom-in"
                      onClick={() => setSelectedWish(wish)}
                    >
                      <div className="w-full relative px-[9px]">
                        <p className="absolute top-3 left-3 font-cinzel font-normal text-[64px] leading-none text-[#adadad]">
                          “
                        </p>
                        <p className="relative top-[34px] font-light text-[14px] md:text-lg leading-none text-white">
                          {wish.message}
                        </p>
                      </div>
                      <div className="bg-[#868686] flex absolute w-full h-[41px] md:h-[61px] rounded-bl-[9.57px] rounded-br-[9.57px] bottom-0 px-[14px]">
                        <p className="font-medium text-[14px] md:text-lg leading-none text-[#CDA96A] my-auto">
                          {wish.name}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <span data-animate="zoom-in">
                <button onClick={() => setSeeAllMessages(false)} className="flex justify-center items-center w-[340px] md:w-[691px] h-[33px] md:h-[40px] bg-[#CDA96A] rounded-[10px] md:rounded-[20px] border-[0.49px] border-[#CDA96A] mx-auto mt-5 animate zoom-in" data-animate="zoom-in">
                  <span className="text-[14px] md:text-lg text-white font-normal leading-[140%] uppercase">back</span>
                </button>
              </span>
            </div>
          )}
          {selectedWish && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
              <div className="relative w-[340px] md:w-[691px] scale-in">
                <div className="relative py-8 px-5 bg-[#CDA96A] rounded-[16px] border border-[#CDA96A] shadow-[0_10px_33px_rgba(0,0,0,0.08)] text-center">
                  <h3 className="font-medium text-[24px] md:text-[32px] text-white uppercase tracking-wide">
                    {selectedWish.name}
                  </h3>
                  <div className="w-10 h-[1px] bg-[#D6D0C4] mx-auto my-4" />
                  <p className="font-light text-sm md:text-lg leading-relaxed text-white px-2">
                    {selectedWish.message}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedWish(null)}
                  className="flex justify-center items-center w-[340px] md:w-[691px] h-[33px] md:h-[40px] bg-[#CDA96A] rounded-[10px] md:rounded-[20px] border-[0.49px] border-[#CDA96A] mx-auto mt-5"
                >
                  <span className="text-[14px] md:text-lg text-white font-normal leading-[140%] uppercase">back</span>
                </button>

              </div>
            </div>
          )}
        </div>

        {/* Image Absolute */}
        <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-atas-wishes-mobile.png" alt="Picture of tanaman kanan atas" width={217} height={217} className="md:hidden absolute -top-[190px] right-0 w-[127px] pointer-events-none" />
        <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-atas-wishes-2-mobile.png" alt="Picture of tanaman kanan atas" width={104} height={104} className="md:hidden absolute -top-[55px] right-0 w-[74px] pointer-events-none" />
        <Image src="/images/kevin-dan-michelle/img-tanaman-kiri-wishes-mobile.png" alt="Picture of tanaman kiri" width={210} height={210} className="md:hidden absolute top-[325px] left-0 w-[180px] pointer-events-none" />

        <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-atas-wishes-mobile.png" alt="Picture of tanaman kanan atas" width={623} height={623} className="hidden md:block absolute w-[450px] -top-[180px] right-0 pointer-events-none" />
        <Image src="/images/kevin-dan-michelle/img-tanaman-kanan-atas-wishes-2-mobile.png" alt="Picture of tanaman kanan atas" width={298} height={298} className="hidden md:block absolute w-[200px] top-[350px] right-0 pointer-events-none" />
        <Image src="/images/kevin-dan-michelle/img-tanaman-kiri-wishes-mobile.png" alt="Picture of tanaman kiri" width={677} height={677} className="hidden md:block absolute top-[285px] w-[550px] left-0 pointer-events-none" />
      </div>
    </>
  )
}