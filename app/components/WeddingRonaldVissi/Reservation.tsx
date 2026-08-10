'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  data: any
}

export default function Reservation({ data }: Props) {
  const [attendance, setAttendance] = useState('attend')
  const [showModal, setShowModal] = useState(false)
  const dataGuest = data?.guest
  const dataEvent = data?.event
  const [pin, setPin] = useState<string | null>(null)

  useEffect(() => {
    setPin(localStorage.getItem('pin'))
  }, [])

  return (
    <>
      <div id="reservation" className="relative z-10 w-full">
        <div className="relative overflow-hidden z-10 text-center h-full font-cormorantgaramond text-black pt-[30px] pb-[73px]">
          <h2 className="font-slight text-[28px] leading-[25px] animate" data-animate="fade-up">Rsvp</h2>

          <p className="text-[15px] font-normal leading-[15px] mt-[40px] animate" data-animate="zoom-in">Dear,</p>
          <p className="text-[15px] font-normal leading-[15px] mt-[26px] capitalize animate" data-animate="zoom-in">{dataGuest.name ?? '.........'}</p>

          <p className="text-[15px] font-normal leading-[20px] mt-[24px] animate" data-animate="zoom-in">Kindly confirm your attendance before</p>
          <p className="text-[15px] font-normal leading-[20px] mt-0.5 animate" data-animate="zoom-in">12 September 2026</p>

          <div className="flex justify-between w-[262px] mx-auto mt-[30px] animate" data-animate="zoom-in">
            <button type="button" onClick={() => {
              setAttendance('attend')
              setShowModal(true)
              }} className={`w-[121px] h-[40px] rounded-[6px] flex justify-center items-center ${attendance == 'attend' ? 'bg-[#473B2F]' : 'bg-transparent border-[1px] border-[#473B2F]'}`}>
                <span className={`text-[15px] font-light leading-[14.96px] uppercase ${attendance == 'attend' ? 'text-white' : 'text-black'}`}>confirm attend</span>
            </button>
            <button type="button" onClick={() => {
              setAttendance('not')
              setShowModal(true)
              }} className={`w-[121px] h-[40px] rounded-[6px] flex justify-center items-center ${attendance == 'attend' ? 'bg-transparent border-[1px] border-[#473B2F]' : 'bg-[#473B2F]'}`}>
                <span className={`text-[15px] font-light leading-[14.96px] uppercase ${attendance == 'attend' ? 'text-black' : 'text-white'}`}>unable to <br className="md:hidden" /> attend</span>
            </button>
          </div>

          <p className="md:hidden text-[15px] font-normal leading-[14.96px] mt-[37px] animate" data-animate="zoom-in">Confirm your selection?</p>
          <p className="hidden md:block text-[22px] font-normal leading-[14.96px] mt-[77px] uppercase animate" data-animate="zoom-in">are you sure?</p>

          <div className="mt-[28px] animate" data-animate="zoom-in">
            <button onClick={() => {
              setAttendance('not')
              setShowModal(true)
            }} type="button" className="flex justify-center items-center w-[262px] h-[33px] rounded-[6px] bg-[#473B2F] mx-auto">
              <span className="text-[15px] md font-light leading-[14.96px] text-white uppercase">confirm unable to attend</span>
            </button>
          </div>
          <p className="text-xs font-normal leading-[16px] mt-[54px] animate" data-animate="zoom-in">If you need assistance with your RSVP,</p>
          <p className="text-xs font-normal leading-[16px] mt-0.5 animate" data-animate="zoom-in">please contact our support team.</p>

          <div className="mt-[33px] animate" data-animate="zoom-in">
            <Link href="https://wa.me/6289671650843" target="_blank" className="flex justify-center items-center w-[262px] h-[33px] rounded-[6px] bg-[#12877B] mx-auto">
              <Image src="/images/ronald-dan-vissi/mobile/icon-whatsapp.png"  alt="Picture of Icon WhatsApp" width={16} height={16} className="mr-2" />
              <span className="font-ovo text-[15px] font-light leading-[14.96px] text-white uppercase">chat support</span>
            </Link>
          </div>
        </div>
      </div>


      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-[#E9E9E9A8] backdrop-blur-[6.8px]"
            onClick={() => setShowModal(false)}
          />
          {attendance == 'attend' ? (
            <div className="relative flex flex-col items-center text-center z-10 w-[322px] md:w-[486] h-[360px] md:h-[543px] bg-white rounded-[10px] pt-[38px] md:pt-[57px] border border-[#605F5E33] text-[#605F5E] animate-scale-in">
              <Image src="/images/ronald-dan-vissi/mobile/icon-checked-fill.png"  alt="Picture of Icon Checked" width={42} height={42} className="md:w-[64px] md:h-[64px]" />
              <h6 className="font-noto font-extrabold text-base md:text-[24.13px] leading-none uppercase mt-[18px] md:mt-[22px]">rsvp confirmed</h6>
              <p className="font-noto font-medium text-xs md:text-lg leading-[16px] mt-[18px] md:mt-[26px]">
                <span>Konfirmasi kehadiran Anda telah kami terima,</span> <br />
                <span>kami menantikan kehadiran Anda. Terima kasih</span> <br />
                <span>atas konfirmasi Anda.</span>
              </p>
              <p className="font-noto font-medium text-xs md:text-lg leading-[16px] mt-[18px] md:mt-[26px]">
                <span>Your attendance has been confirmed, we look</span> <br />
                <span>forward to welcoming you. Thank you for your</span> <br />
                <span>confirmation.</span>
              </p>
              <div onClick={() => setShowModal(false)} className="absolute bottom-0 flex justify-center items-center w-full h-[52px] md:h-[78px] border-t border-[#605F5E33] cursor-pointer">
                <span className="font-noto text-[15px] md:text-[21px] font-normal leading-[16px] md:leading-[24px]">Close</span>
              </div>
            </div>
          ) : (
            <div className="relative flex flex-col items-center text-center z-10 w-[322px] md:w-[486] h-[360px] md:h-[543px] bg-white rounded-[10px] pt-[38px] border border-[#605F5E33] text-[#605F5E] animate-scale-in">
              <Image src="/images/ronald-dan-vissi/mobile/icon-checked.png"  alt="Picture of Icon Checked" width={42} height={42} className="md:w-[64px] md:h-[64px]" />
              <h6 className="font-noto font-extrabold text-base md:text-[24.13px] leading-none uppercase mt-[18px] md:mt-[22px]">rsvp confirmed</h6>
              <p className="font-noto font-medium text-xs md:text-lg leading-[16px] mt-[18px] md:mt-[26px]">
                <span>Konfirmasi ketidakhadiran Anda telah kami</span> <br />
                <span>terima, terima kasih atas respon Anda. Kami</span> <br />
                <span>menghargai pemberitahuan Anda.</span>
              </p>
              <p className="font-noto font-medium text-xs md:text-lg leading-[16px] mt-[18px] md:mt-[26px]">
                <span>Your response has been received, thank you for</span> <br />
                <span>your confirmation. We appreciate your</span> <br />
                <span>response.</span>
              </p>
              <div onClick={() => setShowModal(false)} className="absolute bottom-0 flex justify-center items-center w-full h-[52px] md:h-[78px] border-t border-[#605F5E33] cursor-pointer">
                <span className="font-noto text-[15px] md:text-[21px] font-normal leading-[16px] md:leading-[24px]">Close</span>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}