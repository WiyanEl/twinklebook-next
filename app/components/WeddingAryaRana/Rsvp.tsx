// Ini nanti dikomen aja hooks nya
// import { SmartRsvpForm, useSmartRsvp } from "@/components/rsvp/SmartRsvpForm";
import moment from "moment";
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// data: Object (data dari API)
// paramUrl: String (untuk menampilkan nama tamu di RSVP dari index)
// onSubmitRSVP: Function (callback ketika submit RSVP) oprional, bisa dihapus aja kalau ga dipake
export default function Rsvp({ data, paramUrl, onSubmitRSVP }: any) {
    return (
        // Standard Reusable Component Parent
        // <SmartRsvpForm data={data} paramUrl={paramUrl} onSubmitRSVP={onSubmitRSVP}>
            <RSVPSectionDesign data={data} />
        // </SmartRsvpForm>
    );
}

const RSVPSectionDesign = ({ data }: { data: any }) => {
    // guestData: Object
    // attendStatus: Number
    // invitationUrl: String (untuk di nomor wa biasanya)
    // paramUrl: String
    // Hooks to get the RSVP state and data nanti dikomen aja, pake costants aja
    // const { guestData, attendStatus, invitationUrl, paramUrl } = useSmartRsvp();

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
            {/* Standard Reusable Pop Up Modals */}
            {/* <SmartRsvpForm.Modals /> */}
            {/* RSVP Section Design */}
            <section id="reservation" className="relative z-10 w-full">
                {/* RSVP Content Section Design */}
                <div className="relative overflow-hidden z-10 text-center h-full font-cormorantgaramond text-[#001A3B] pt-[135px] md:pt-[152px]">
                    <h2 className="font-bochan text-2xl md:text-[32px] animate" data-animate="fade-up">Rsvp</h2>

                    <p className="text-[15px] md:text-[22px] font-normal md:leading-[15px] mt-[30px] md:mt-[60px] animate" data-animate="zoom-in">Dear Mr./Mrs./Ms.</p>
                    <p className="text-[15px] md:text-2xl font-normal md:leading-[15px] mt-[15px] md:mt-[22px] capitalize animate" data-animate="zoom-in">{dataGuest.name ?? '.........'}</p>

                    <p className="text-[13px] md:text-xl font-normal md:leading-[26px] mt-[33px] md:mt-[40px] animate" data-animate="zoom-in">Kindly confirm your attendance before</p>
                    <p className="text-[13px] md:text-xl font-normal leading-[18px] md:leading-[26px] mt-0.5 animate" data-animate="zoom-in">12 October 2026</p>

                    <div className="flex justify-between w-[302px] md:w-[435px] mx-auto mt-[34px] md:mt-[25px] animate" data-animate="zoom-in">
                        <button type="button" onClick={() => {
                        setAttendance('attend')
                        setShowModal(true)
                        }} className={`w-[141px] md:w-[203px] h-[40px] md:h-[42px] rounded-[6px] md:rounded-[50px] flex justify-center items-center ${attendance == 'attend' ? 'bg-[#001A3B]' : 'bg-transparent border-[1px] border-[#001A3B]'}`}>
                            <span className={`text-[13px] md:text-base md:leading-[14.96px] font-light uppercase ${attendance == 'attend' ? 'text-white' : 'text-black'}`}>attend</span>
                        </button>
                        <button type="button" onClick={() => {
                        setAttendance('not')
                        setShowModal(true)
                        }} className={`w-[141px] md:w-[203px] h-[40px] md:h-[42px] rounded-[6px] md:rounded-[50px] flex justify-center items-center ${attendance == 'attend' ? 'bg-transparent border-[1px] border-[#001A3B]' : 'bg-[#001A3B]'}`}>
                            <span className={`text-[13px] md:text-base md:leading-[14.96px] font-light uppercase ${attendance == 'attend' ? 'text-black' : 'text-white'}`}>unable to <br className="md:hidden" /> attend</span>
                        </button>
                    </div>

                    <p className="text-[13px] md:text-xl md:leading-[14.96px] font-normal mt-[81px] md:mt-[102px] animate" data-animate="zoom-in">Confirm Your RSVP</p>
                    {/* <p className="hidden md:block text-[15px] font-normal mt-[37px] uppercase animate" data-animate="zoom-in">are you sure?</p> */}

                    <div className="mt-[25px] md:mt-[38px] animate" data-animate="zoom-in">
                        <button onClick={() => {
                            setAttendance('not')
                            setShowModal(true)
                            }} type="button" className="flex justify-center items-center w-[161px] md:w-[220px] h-[36px] md:h-[52px] rounded-[6px] md:rounded-[50px] bg-[#001A3B] mx-auto">
                            <span className="text-xs md:text-base md:font-light leading-[14.96px] md:leading-none text-white uppercase">{attendance == 'attend' ? 'confirm to attend' : 'confirm unable to attend'}</span>
                        </button>
                    </div>
                    <p className="text-[11px] md:text-xl md:leading-[22px] font-normal mt-[39px] md:mt-[69px] animate" data-animate="zoom-in">If you need assistance with your RSVP,</p>
                    <p className="text-[11px] md:text-xl md:leading-[22px] font-normal animate" data-animate="zoom-in">please contact our support team.</p>

                    <div className="mt-[33px] md:mt-[40px] animate" data-animate="zoom-in">
                        <Link href="https://wa.me/6281998478131" target="_blank" className="flex justify-center items-center w-[161px] md:w-[220px] h-[30px] md:h-[42px] rounded-[6px] md:rounded-[50px] bg-[#12877B] mx-auto">
                        <Image src="/images/arya-dan-rana/mobile/icon-whatsapp.png"  alt="Picture of Icon WhatsApp" width={25} height={25} className="w-[20px] md:w-[25px] mr-2" />
                        <span className="text-[13px] md:text-base md:leading-[26px] text-white uppercase">chat support</span>
                        </Link>
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
                            <Image src="/images/arya-dan-rana/mobile/icon-checked-fill.png"  alt="Picture of Icon Checked" width={42} height={42} className="md:w-[64px] md:h-[64px]" />
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
                            <Image src="/images/arya-dan-rana/mobile/icon-checked.png"  alt="Picture of Icon Checked" width={42} height={42} className="md:w-[64px] md:h-[64px]" />
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
                {/* RSVP Content Section Design */}
            </section>
        </>
    );
}