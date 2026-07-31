// Ini nanti dikomen aja hooks nya
import { SmartRsvpForm, useSmartRsvp } from "@/components/rsvp/SmartRsvpForm";
import moment from "moment";

// data: Object (data dari API)
// paramUrl: String (untuk menampilkan nama tamu di RSVP dari index)
// onSubmitRSVP: Function (callback ketika submit RSVP) oprional, bisa dihapus aja kalau ga dipake
export default function Rsvp({ data, paramUrl, onSubmitRSVP }: any) {
    return (
        // Standard Reusable Component Parent
        <SmartRsvpForm data={data} paramUrl={paramUrl} onSubmitRSVP={onSubmitRSVP}>
            <RSVPSectionDesign data={data} />
        </SmartRsvpForm>
    );
}

const RSVPSectionDesign = ({ data }: { data: any }) => {
    // guestData: Object
    // attendStatus: Number
    // invitationUrl: String (untuk di nomor wa biasanya)
    // paramUrl: String
    // Hooks to get the RSVP state and data nanti dikomen aja, pake costants aja
    const { guestData, attendStatus, invitationUrl, paramUrl } = useSmartRsvp();
    return (
        <>
            {/* Standard Reusable Pop Up Modals */}
            <SmartRsvpForm.Modals />
            {/* RSVP Section Design */}
            <section>
                {/* RSVP Content Section Design */}
                <p className={`text-[14px] text-[#41261A] mt-[21px]`}>
                    {paramUrl !== "" ? paramUrl : guestData?.name ?? '........'}
                </p>
                <p className={`text-[14px] text-[#41261A] mt-[21px] tracking-wide`}>
                    Kindly confirm your attendance before
                    <br />
                    {
                        data === null ? (
                            moment(new Date().toISOString()).format("DD MMMM YYYY")
                        ) : (
                            moment(guestData?.closeRSVPDate ?? new Date(data?.dataEvent?.closeRSVPDate).toISOString() ?? new Date().toISOString()).format("DD MMMM YYYY")
                        )
                    }
                </p>
                {/* Standard Reusable Toggle Buttons */}
                <div className="flex items-center justify-center gap-[23px] mt-[37px]">
                    <SmartRsvpForm.AttendToggle className="" />
                    <SmartRsvpForm.NotAttendToggle className="" />
                </div>

                <h3 className={`text-[14px] text-[#41261A] mt-[36px]`}>
                    {attendStatus == 0 ? "Kindly select your attendance status" : "Confirm your selection?"}
                </h3>

                {/* Standard Reusable Accordion Component Containing RSVP Form Fields
                ClassName for parent div to set such font class and bgActiveColor props are passed to customize the design of the Accordion component Active BG color */}
                <SmartRsvpForm.Accordion className={`w-full mt-[36px]`} bgActiveColor="#41261A" />

                {
                    attendStatus !== 0 && (
                        <SmartRsvpForm.SubmitButton className={`h-[33px] w-[222px] bg-[#41261A] hover:bg-[#6B6B6B] active:bg-[#3A3A3A] transition-colors duration-200 text-white uppercase text-[12px] rounded-full flex items-center justify-center mt-[37px]`} />
                )}
                {/* RSVP Content Section Design */}
            </section>
        </>
    );
}