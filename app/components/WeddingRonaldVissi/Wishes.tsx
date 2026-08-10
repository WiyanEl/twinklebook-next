'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { PostPersonalGuestMesage, GetAllPersonalGuestMessagesData } from '@/app/lib/event'

type Props = {
  data: any
  isOpen: boolean
}

type Wish = {
  name: string
  message: string
}

export default function Wishes({ data, isOpen }: Props) {
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
  const dataEvent = data?.event
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (data.messages.length > 0) {
      let arrMessage = []
      for (const element of data.messages) {
        arrMessage.push({
          name: element.guestName,
          message: element.message
        })
      }

      setWishes(arrMessage)
    } 
  }, [])

  const fetchMessage = async () => {
    try {
      const res = await GetAllPersonalGuestMessagesData(dataEvent.id)
      let arrMessage = []
      for (const element of res) {
        arrMessage.push({
          name: element.guestName,
          message: element.message
        })
      }

      setWishes(arrMessage)
    } catch (error) {
      
    }
  }

  const save = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!name.trim() || !message.trim()) return

    const json = {
      eventId: dataEvent.id,
      mediaFileId: null,
      name: name,
      message: message,
      status: 1,
      type: 1
    }

    try {
      const res = await PostPersonalGuestMesage(json)

      setName('')
      setMessage('')

      fetchMessage()
      setShowModal(true)
    } catch (error) {
      
    } finally {

    }

  }

  return (
    <>
      <div id="wishes" className="relative z-10 w-full">
        <div className="absolute inset-0 bg-[#F8F4EE]" />
        <div className="absolute inset-0 bg-[url('/images/ronald-dan-vissi/mobile/bg-wishes.png')] bg-cover bg-center bg-no-repeat" />

        <div className="relative overflow-hidden z-10 text-center h-full font-cormorantgaramond text-black py-[85px]">
          <h2 className="font-slight text-[28px] leading-[25px] animate" data-animate="fade-up">Your Wishes</h2>

          {!seeAllMessages ? (
            <div className="relative text-center">
              <form onSubmit={save} className="mx-auto mt-[32px] animate zoom-in" data-animate="zoom-in">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="block w-[278px] h-[33px] rounded-[6px] border-[1px] border-[#473B2F] bg-transparent px-[13px] py-1 text-[15px] leading-[140%] text-[#473B2F] placeholder:text-[#473B2F80] mx-auto" placeholder="Desy (Tester)" />
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="block w-[278px] h-[60px] rounded-[6px] border-[1px] border-[#473B2F] bg-transparent px-[13px] py-1 text-[15px] leading-[140%] text-[#473B2F] mx-auto mt-4"></textarea>
                <button type="submit" className="flex justify-center items-center w-[278px] h-[33px] bg-[#473B2F] rounded-[6px] border-[0.49px] border-[#473B2F] mx-auto mt-4">
                  <Image src="/images/ronald-dan-vissi/mobile/icon-send.png" alt="Picture of Icon Send" width={15} height={19} className="mr-2" />
                  <span className="text-[15px] text-white font-normal leading-[140%] uppercase">send</span>
                </button>
              </form>
              <div className="w-[278px] h-[332px] rounded-[6px] border-[0.49px] border-[#473B2F] py-[18px] px-[13px] mx-auto mt-4 animate zoom-in" data-animate="zoom-in">
                <div className="w-full h-full overflow-y-auto scroll-smooth">
                  {wishes.length === 0 ? (
                    <p className="text-center text-[15px] text-[#473B2F]">
                      No message yet
                    </p>
                  ) : (
                    wishes.map((wish, i) => (
                      <div
                        key={i}
                        className="w-full pb-[13px] border-b-[0.49px] border-b-[#473B2F] text-left text-black mb-[7px]"
                      >
                        <p className="font-bold text-[15px] leading-[140%]">
                          {wish.name}
                        </p>
                        <p className="font-normal text-[15px] leading-[140%] mt-[7px]">
                          {wish.message}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>
              <button type="button" onClick={() => setSeeAllMessages(true)} className="flex justify-center items-center w-[278px] h-[33px] bg-[#473B2F] rounded-[6px] border-[0.49px] border-[#473B2F] mx-auto mt-4 animate zoom-in" data-animate="zoom-in">
                  <Image src="/images/ronald-dan-vissi/mobile/icon-message.png" alt="Picture of Icon Send" width={17} height={22} className="mr-2" />
                  <span className="text-[15px] text-white font-normal leading-[140%] uppercase">see all message</span>
                </button>
            </div>
          ) : (
            <div className="relative text-center text-[#3B3B3B] mt-[47px]">
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="w-[340px] h-[33px] rounded-[6px] border-[0.49px] border-[#473B2F] bg-transparent px-2 py-1 text-[15px] leading-[140%] text-[#473B2F] placeholder:text-[#473B2F80] mx-auto animate zoom-in" data-animate="zoom-in" placeholder="Search" />
              <div className="grid grid-cols-2 gap-5 mt-[20px] w-[340px] h-[459.87px] overflow-y-auto mx-auto">
                {filtered.length === 0 ? (
                  <p className={`col-span-2 text-center text-sm text-white animate'}`}>
                    No message found
                  </p>
                ) : (
                  filtered.map((wish, i) => (
                    <div
                      key={i}
                    
                      className="relative w-[160px] h-[140.87px] rounded-[9.57px] bg-[#473B2F] border-[0.87px] border-white shadow-[5.22px_7.83px_9.74px_2.61px_#0000000F] cursor-pointer zoom-in"
                      onClick={() => setSelectedWish(wish)}
                    >
                      <div className="w-full relative px-[9px]">
                        <p className="absolute top-3 left-3 font-cinzel font-normal text-[64px] leading-none text-[#adadad]">
                          “
                        </p>
                        <p className="relative top-[34px] font-light text-[15px] leading-none text-white">
                          {wish.message}
                        </p>
                      </div>
                      <div className="bg-[#868686] flex absolute w-full h-[41px] rounded-bl-[9.57px] rounded-br-[9.57px] bottom-0 px-[14px]">
                        <p className="font-medium text-[15px] leading-none text-[#473B2F] my-auto">
                          {wish.name}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <span data-animate="zoom-in">
                <button onClick={() => setSeeAllMessages(false)} className="flex justify-center items-center w-[340px] h-[33px] bg-[#473B2F] rounded-[10px] border-[0.49px] border-[#473B2F] mx-auto mt-5 animate zoom-in" data-animate="zoom-in">
                  <span className="text-[15px] text-white font-normal leading-[140%] uppercase">back</span>
                </button>
              </span>
            </div>
          )}
          
          {selectedWish && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
              <div className="relative w-[340px] md:w-[691px] scale-in">
                <div className="relative py-8 px-5 bg-[#473B2F] rounded-[16px] border border-[#473B2F] shadow-[0_10px_33px_rgba(0,0,0,0.08)] text-center">
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
                  className="flex justify-center items-center w-[340px] md:w-[691px] h-[33px] md:h-[40px] bg-[#473B2F] rounded-[10px] md:rounded-[20px] border-[0.49px] border-[#473B2F] mx-auto mt-5"
                >
                  <span className="text-[15px] md:text-lg text-white font-normal leading-[140%] uppercase">back</span>
                </button>

              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal Notification */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-[#E9E9E9A8] backdrop-blur-[6.8px]"
            onClick={() => setShowModal(false)}
          />

          {/* Modal */}
          <div className="relative z-10 w-[330px] rounded-2xl bg-[#FAF8F5] px-8 py-10 shadow-2xl animate-scale-in font-century">
            <h2 className="text-center text-[14px] md:text-lg leading-none font-semibold text-[#4D3F37]">
              Pesan Terkirim !
            </h2>

            <div className="mx-auto mt-4 h-px w-10 bg-[#DDD4CB]" />
            <p className="mt-4 text-center text-[14px] md:text-lg leading-[16px] text-[#5E554E]">
              Terima kasih atas doa dan ucapan baik Anda. Kami sangat menghargai
              pesan yang telah diberikan.
            </p>

            <div className="mt-5 flex justify-center">
              <button
                onClick={() => setShowModal(false)}
                className="w-[103px] md:w-[223px] h-[33px] md:h-[40px] rounded-full bg-[#E8E5E1] text-[14px] md:text-lg font-medium text-[#666] transition hover:bg-[#dcd8d4]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}