"use client";
import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import moment from "moment";
import { Accordion, AccordionItem, Checkbox, cn } from "@nextui-org/react";
import { Label, Select } from "flowbite-react";
import { FaCheck } from "react-icons/fa";
import { useSmartRsvpController } from "@/hooks/useSmartRsvpController";
import type { UseSmartRsvpControllerProps } from "@/hooks/useSmartRsvpController";
import {
    Loader,
    ConfirmRsvpModal,
    IncompleteRsvpModal,
    IncompleteSmartRsvpModal,
    RsvpClosedModal,
    ConfirmedRsvpModal,
} from "./SmartRsvpFormModals";

// ──────────────────────────────────────────────
// SmartRsvpForm — the reusable "smart RSVP" building block.
//
// Every design/template shares the SAME state + handlers (via
// useSmartRsvpController, unchanged from the original RSVPSection.tsx)
// but is free to arrange, style, and space out the pieces however it
// wants — that's the point of the compound-component + context split.
//
// Usage in a design file:
//
//   <SmartRsvpForm data={data} paramUrl={paramUrl} onSubmitRSVP={onSubmitRSVP}>
//     <SmartRsvpForm.AttendToggle />
//     <SmartRsvpForm.Accordion />
//     <p>...whatever status copy this design wants...</p>
//     <SmartRsvpForm.SubmitButton />
//   </SmartRsvpForm>
//   <SmartRsvpForm.Modals />   {/* can also live inside the tree above */}
// ──────────────────────────────────────────────

type SmartRsvpControllerValue = ReturnType<typeof useSmartRsvpController>;

const SmartRsvpContext = createContext<SmartRsvpControllerValue | null>(null);

function useSmartRsvpContext() {
    const ctx = useContext(SmartRsvpContext);
    if (!ctx) {
        throw new Error("SmartRsvpForm.* components must be rendered inside <SmartRsvpForm>.");
    }
    return ctx;
}

/** Escape hatch for designs that need direct access to state/handlers not covered by a sub-component. */
export function useSmartRsvp() {
    return useSmartRsvpContext();
}

interface SmartRsvpFormProps extends UseSmartRsvpControllerProps {
    children: ReactNode;
}

function SmartRsvpFormRoot({ data, paramUrl, onSubmitRSVP, defaultAttendStatus, children }: SmartRsvpFormProps) {
    const controller = useSmartRsvpController({ data, paramUrl, onSubmitRSVP, defaultAttendStatus });
    return (
        <SmartRsvpContext.Provider value={controller}>
            {children}
        </SmartRsvpContext.Provider>
    );
}

// ──────────────────────────────────────────────
// AttendToggle — the ATTEND / UNABLE TO ATTEND buttons.
// Markup/behavior identical to the original inline JSX; className is
// overridable per design, defaulting to the original wrapper classes.
// ──────────────────────────────────────────────
function AttendToggle({ className }: { className?: string }) {
    const { attendStatus, setAttendStatus } = useSmartRsvpContext();
    return (
        <button
            onClick={() => setAttendStatus(1)}
            className={className ?? `w-[103px] h-[33px] lg:w-auto lg:h-[2vw] lg:px-2 font-sans text-[14px] lg:text-[16px] uppercase rounded-[71px] transition-all duration-200 ${attendStatus === 1 ? "bg-[#471e0c] text-white" : "bg-transparent border border-[#471e0c] text-[#471e0c]"}`}
        >
            ATTEND
        </button>
    );
}

function NotAttendToggle({ className }: { className?: string }) {
    const { attendStatus, setAttendStatus } = useSmartRsvpContext();
    return (
        <button
            onClick={() => setAttendStatus(2)}
            className={className ?? `w-[161px] h-[33px] lg:w-auto lg:h-[2vw] lg:px-2 font-sans text-[14px] lg:text-[16px] uppercase rounded-[71px] transition-all duration-200 ${attendStatus === 2 ? "bg-[#471e0c] text-white" : "bg-transparent border border-[#471e0c] text-[#471e0c]"}`}
        >
            UNABLE TO ATTEND
        </button>
    );
}

// ──────────────────────────────────────────────
// Accordion — session list + dynamic question rendering + general
// questions. Markup identical to the original; only reads from
// context instead of local component state.
// ──────────────────────────────────────────────
function AccordionSection({ className, bgActiveColor }: { className?: string, bgActiveColor?: string }) {
    
}

// ──────────────────────────────────────────────
// SubmitButton — same onClick/label logic as the original; className
// is overridable so each design can size/place/style it freely.
// Returns null when attendStatus === 0, exactly as before.
// ──────────────────────────────────────────────
function SubmitButton({ className }: { className?: string }) {
    const { attendStatus, handleSubmit } = useSmartRsvpContext();

    if (attendStatus === 0) return null;

    return (
        <button
            onClick={handleSubmit}
            className={className ?? "w-[222px] h-[33px] lg:h-[2vw] lg:w-full lg:px-2 bg-[#471e0c] font-sans text-[14px] lg:text-[16px] text-white uppercase rounded-[71px] mt-[28px] lg:mt-[2.5vw]"}
        >
            {attendStatus === 1
                ? "CONFIRM ATTEND"
                : attendStatus === 2
                    ? "CONFIRM NOT ATTEND"
                    : "CONFIRM"}
        </button>
    );
}

// ──────────────────────────────────────────────
// Modals — Loader + all four confirmation/incomplete/closed modals.
// Same trigger conditions and handlers as the original inline JSX.
// ──────────────────────────────────────────────
function Modals() {
    const {
        isSubmit,
        showIncompleteModal, setShowIncompleteModal,
        titleResponseRSVP, failedSubmitMessage, failedEnSubmitMessage,
        showIncompleteRSVPModal, setShowIncompleteRSVPModal,
        showClosedModal, setShowClosedModal, invitationUrl,
        showConfirmModal, setShowConfirmModal, handleRSVP,
        showModal, setShowModal, attendStatus,
    } = useSmartRsvpContext();

    return (
        <>
            {isSubmit && (
                <Loader />
            )}

            {showIncompleteModal && (
                <IncompleteRsvpModal onClose={() => setShowIncompleteModal(false)} title={titleResponseRSVP} indMessage={failedSubmitMessage} enMessage={failedEnSubmitMessage} />
            )}

            {showIncompleteRSVPModal && (
                <IncompleteSmartRsvpModal onClose={() => setShowIncompleteRSVPModal(false)} title={titleResponseRSVP} indMessage={failedSubmitMessage} />
            )}

            {showClosedModal && (
                <RsvpClosedModal onClose={() => setShowClosedModal(false)} whatsappNumber={invitationUrl} />
            )}

            {showConfirmModal && (
                <ConfirmRsvpModal
                    onClose={() => setShowConfirmModal(false)}
                    onConfirm={handleRSVP}
                />
            )}

            {showModal && (
                <ConfirmedRsvpModal onClose={() => setShowModal(false)} title="RSVP CONFIRMED" status={attendStatus} />
            )}
        </>
    );
}

export const SmartRsvpForm = Object.assign(SmartRsvpFormRoot, {
    AttendToggle,
    NotAttendToggle,
    Accordion: AccordionSection,
    SubmitButton,
    Modals,
});