import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function CodeOfConductPage() {
    const router = useRouter();

    return (
        <main className="relative min-h-screen bg-[#0A0A0F] px-3 py-6 sm:px-4 sm:py-8 md:px-6 md:py-12 lg:px-8 lg:py-16 flex items-center justify-center overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-1/2 -right-1/4 h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] md:h-[600px] md:w-[600px] rounded-full bg-[#A45AFA]/5 blur-[120px]" />
                <div className="absolute -bottom-1/3 -left-1/4 h-[350px] w-[350px] sm:h-[450px] sm:w-[450px] rounded-full bg-blue-500/5 blur-[100px]" />
            </div>

            {/* Back Button */}
            <div className="fixed z-[9999] left-3 top-3 sm:left-4 sm:top-4 md:left-6 md:top-6 lg:left-10 lg:top-10">
                <button
                    onClick={() => router.back()}
                    className="
                        group relative flex items-center justify-center
                        h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12
                        rounded-full
                        bg-white/5 backdrop-blur-2xl
                        border border-white/10
                        transition-all duration-300
                        hover:scale-110 active:scale-95
                        cursor-pointer
                    "
                >
                    <span className="absolute inset-0 rounded-full bg-[#A45AFA]/20 blur-md animate-pulse" />
                    <span className="absolute inset-0 rounded-full border border-[#A45AFA]/30 group-hover:rotate-45 transition-transform duration-700" />

                    <ArrowLeft
                        size={16}
                        className="relative z-10 text-slate-300 group-hover:text-white transition-all duration-300 group-hover:-translate-x-0.5 sm:size-[18]"
                    />

                    <span className="absolute left-2.5 h-4 w-4 sm:left-3 sm:h-5 sm:w-5 rounded-full bg-[#A45AFA] animate-ping" />
                </button>
            </div>

            <div className="w-full max-w-4xl relative px-2 sm:px-0">
                {/* Header */}
                <div className="mb-6 sm:mb-8 md:mb-10 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 sm:px-4 sm:py-1.5 mb-3 sm:mb-4 backdrop-blur-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#A45AFA] animate-pulse" />
                        <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#A45AFA]">
                            Community Policy
                        </span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        Code of Conduct
                    </h1>
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed px-2">
                        AWS Student Community Day Bhilai 2026
                    </p>
                    <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-2 text-[10px] sm:text-xs text-slate-500">
                        <span>Last updated: July 2026</span>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">

                    {/* Importance */}
                    <section className="group rounded-2xl border border-white/5 bg-white/[0.02] p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-300 hover:border-[#A45AFA]/20 hover:bg-[#A45AFA]/[0.04]">
                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                                <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-[#A45AFA]/10 flex items-center justify-center border border-[#A45AFA]/10">
                                    <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#A45AFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-sm sm:text-base font-semibold text-white mb-1.5 sm:mb-2 tracking-tight">
                                    Importance
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-300">
                                    We believe that every participant deserves a welcoming, inclusive, and respectful environment. This Code of Conduct outlines the standards of behavior expected from all attendees, speakers, sponsors, volunteers, partners, and organizers participating in AWS Student Community Day Bhilai 2026, both at the event venue and in all event-related online spaces. Our goal is to foster learning, collaboration, knowledge sharing, and meaningful community engagement while ensuring a safe and positive experience for everyone.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Expected Behaviour */}
                    <section className="group rounded-2xl border border-white/5 bg-white/[0.02] p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-300 hover:border-emerald-500/20 hover:bg-emerald-500/[0.03]">
                        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-5">
                            <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center">
                                <svg className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                                Expected Behaviour
                            </h3>
                            <span className="ml-auto text-[8px] sm:text-[10px] font-medium uppercase tracking-wider text-emerald-400/60">
                                All Participants
                            </span>
                        </div>
                        <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm md:text-base leading-relaxed">
                            <li className="flex items-start gap-2 sm:gap-3 pl-0.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                                <span className="text-slate-300">Treat all participants with respect, kindness, and professionalism.</span>
                            </li>
                            <li className="flex items-start gap-2 sm:gap-3 pl-0.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                                <span className="text-slate-300">Use inclusive, welcoming, and respectful language.</span>
                            </li>
                            <li className="flex items-start gap-2 sm:gap-3 pl-0.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                                <span className="text-slate-300">Be considerate of diverse viewpoints, backgrounds, and experiences.</span>
                            </li>
                            <li className="flex items-start gap-2 sm:gap-3 pl-0.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                                <span className="text-slate-300">Accept constructive feedback gracefully and engage in respectful discussions.</span>
                            </li>
                            <li className="flex items-start gap-2 sm:gap-3 pl-0.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                                <span className="text-slate-300">Provide accurate and truthful information during registration, check-in, and other event-related activities.</span>
                            </li>
                            <li className="flex items-start gap-2 sm:gap-3 pl-0.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                                <span className="text-slate-300">Comply with all event policies, venue regulations, and instructions from organizers, volunteers, and venue staff.</span>
                            </li>
                            <li className="flex items-start gap-2 sm:gap-3 pl-0.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                                <span className="text-slate-300">Respect the privacy, personal boundaries, and consent of fellow participants.</span>
                            </li>
                            <li className="flex items-start gap-2 sm:gap-3 pl-0.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                                <span className="text-slate-300">Contribute to creating a safe, inclusive, and positive environment for everyone.</span>
                            </li>
                        </ul>
                    </section>

                    {/* Unacceptable Behaviour */}
                    <section className="group rounded-2xl border border-white/5 bg-white/[0.02] p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-300 hover:border-rose-500/20 hover:bg-rose-500/[0.03]">
                        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-5">
                            <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full border border-rose-500/30 bg-rose-500/10 flex items-center justify-center">
                                <svg className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                                Unacceptable Behaviour
                            </h3>
                            <span className="ml-auto text-[8px] sm:text-[10px] font-medium uppercase tracking-wider text-rose-400/60">
                                Zero Tolerance
                            </span>
                        </div>
                        <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm md:text-base leading-relaxed">
                            <li className="flex items-start gap-2 sm:gap-3 pl-0.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-rose-400/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                                <span className="text-slate-300">Harassment, intimidation, or discrimination in any form, including but not limited to race, gender, gender identity and expression, national origin, religion, disability, age, sexual orientation, or any other protected characteristic.</span>
                            </li>
                            <li className="flex items-start gap-2 sm:gap-3 pl-0.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-rose-400/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                                <span className="text-slate-300">Bullying, threats, stalking, or any unwelcome physical or verbal conduct, including sexual harassment.</span>
                            </li>
                            <li className="flex items-start gap-2 sm:gap-3 pl-0.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-rose-400/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                                <span className="text-slate-300">Disruptive behavior that interferes with sessions, speakers, organizers, or other participants' event experience.</span>
                            </li>
                            <li className="flex items-start gap-2 sm:gap-3 pl-0.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-rose-400/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                                <span className="text-slate-300">Offensive, abusive, or inappropriate language, gestures, or content.</span>
                            </li>
                            <li className="flex items-start gap-2 sm:gap-3 pl-0.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-rose-400/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                                <span className="text-slate-300">Sharing or transferring event credentials (badges, login information, or access passes) with others, or attempting to gain unauthorized access to event benefits or restricted areas.</span>
                            </li>
                            <li className="flex items-start gap-2 sm:gap-3 pl-0.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-rose-400/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                                <span className="text-slate-300">Unsolicited marketing, promotion, or solicitation of products or services without prior approval from the organizers.</span>
                            </li>
                            <li className="flex items-start gap-2 sm:gap-3 pl-0.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-rose-400/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                                <span className="text-slate-300">Failure to follow instructions from event organizers, volunteers, venue staff, or violation of applicable laws, venue policies, or event-specific health and safety requirements.</span>
                            </li>
                        </ul>
                    </section>

                    {/* Photography & Media */}
                    {/* <section className="group rounded-2xl border border-white/5 bg-white/[0.02] p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-400/[0.03]">
                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                                <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-blue-400/10 flex items-center justify-center border border-blue-400/10">
                                    <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm sm:text-base font-semibold text-white mb-1.5 sm:mb-2 tracking-tight">
                                    Photography &amp; Media
                                </h4>
                                <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-300">
                                    Photography and videography will take place during the event for promotional purposes. If you do not wish to appear in photographs or videos, please inform the Registration Desk upon arrival. We will make reasonable efforts to respect your request.
                                </p>
                            </div>
                        </div>
                    </section> */}

                    {/* Sponsor Code of Conduct */}
                    <section className="group rounded-2xl border border-white/5 bg-white/[0.02] p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-300 hover:border-amber-400/20 hover:bg-amber-400/[0.03]">
                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                                <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-amber-400/10 flex items-center justify-center border border-amber-400/10">
                                    <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm sm:text-base font-semibold text-white mb-2 sm:mb-3 tracking-tight">
                                    Sponsor Code of Conduct
                                </h4>
                                <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm md:text-base leading-relaxed">
                                    <li className="flex items-start gap-2 sm:gap-3 pl-0.5">
                                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400/50 mt-1.5 sm:mt-2 flex-shrink-0" />
                                        <span className="text-slate-300">Treat all participants with respect and professionalism.</span>
                                    </li>
                                    <li className="flex items-start gap-2 sm:gap-3 pl-0.5">
                                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400/50 mt-1.5 sm:mt-2 flex-shrink-0" />
                                        <span className="text-slate-300">Do not engage in harassment, discrimination, or offensive behavior.</span>
                                    </li>
                                    <li className="flex items-start gap-2 sm:gap-3 pl-0.5">
                                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400/50 mt-1.5 sm:mt-2 flex-shrink-0" />
                                        <span className="text-slate-300">Avoid aggressive or unauthorized marketing outside designated sponsor areas.</span>
                                    </li>
                                    <li className="flex items-start gap-2 sm:gap-3 pl-0.5">
                                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400/50 mt-1.5 sm:mt-2 flex-shrink-0" />
                                        <span className="text-slate-300">Follow the instructions of event organizers and comply with venue policies.</span>
                                    </li>
                                    <li className="flex items-start gap-2 sm:gap-3 pl-0.5">
                                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400/50 mt-1.5 sm:mt-2 flex-shrink-0" />
                                        <span className="text-slate-300">Respect attendee privacy and obtain consent before collecting personal information.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Scope */}
                    <section className="group rounded-2xl border border-white/5 bg-white/[0.02] p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.03]">
                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                                <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-cyan-400/10 flex items-center justify-center border border-cyan-400/10">
                                    <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm sm:text-base font-semibold text-white mb-1.5 sm:mb-2 tracking-tight">
                                    Scope
                                </h4>
                                <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-300">
                                    We expect all AWS community members —including, but not limited to, attendees, speakers, sponsors, partners, volunteers, moderators, exhibitors, vendors, and organizers—to uphold the principles of this Code of Conduct. This Code of Conduct applies to the main event and all related activities, including workshops, networking sessions, social events, online discussions, and all official communication channels associated with AWS Student Community Day Bhilai 2026.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Consequences */}
                    <section className="group rounded-2xl border border-white/5 bg-white/[0.02] p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-300 hover:border-orange-400/20 hover:bg-orange-400/[0.03]">
                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                                <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-orange-400/10 flex items-center justify-center border border-orange-400/10">
                                    <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm sm:text-base font-semibold text-white mb-1.5 sm:mb-2 tracking-tight">
                                    Consequences
                                </h4>
                                <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-300 mb-2 sm:mb-3">
                                    If we determine that you have violated this Code of Conduct, the organizers may take one or more of the following actions:
                                </p>
                                <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm md:text-base leading-relaxed">
                                    <li className="flex items-start gap-2 sm:gap-3 pl-0.5">
                                        <span className="h-1.5 w-1.5 rounded-full bg-orange-400/50 mt-1.5 sm:mt-2 flex-shrink-0" />
                                        <span className="text-slate-300">Require you to leave or stop participating in the event immediately.</span>
                                    </li>
                                    <li className="flex items-start gap-2 sm:gap-3 pl-0.5">
                                        <span className="h-1.5 w-1.5 rounded-full bg-orange-400/50 mt-1.5 sm:mt-2 flex-shrink-0" />
                                        <span className="text-slate-300">Revoke your event access or remove your event credentials.</span>
                                    </li>
                                    <li className="flex items-start gap-2 sm:gap-3 pl-0.5">
                                        <span className="h-1.5 w-1.5 rounded-full bg-orange-400/50 mt-1.5 sm:mt-2 flex-shrink-0" />
                                        <span className="text-slate-300">Remove any content or materials that violate this Code of Conduct.</span>
                                    </li>
                                    <li className="flex items-start gap-2 sm:gap-3 pl-0.5">
                                        <span className="h-1.5 w-1.5 rounded-full bg-orange-400/50 mt-1.5 sm:mt-2 flex-shrink-0" />
                                        <span className="text-slate-300">Prohibit you from attending or participating in future AWS Programs or events.</span>
                                    </li>
                                </ul>
                                <p className="text-xs sm:text-sm md:text-base leading-relaxed mt-2 sm:mt-3 text-slate-400 border-t border-white/5 pt-2 sm:pt-3">
                                    If you are asked to leave the event due to a Code of Conduct violation, you will not be eligible for a refund of any registration fees. The organizers reserve the right to take appropriate action, including involving venue security or law enforcement where necessary.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Contact Us */}
                    <section className="group rounded-2xl border border-[#A45AFA]/20 bg-[#A45AFA]/[0.04] p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-300 hover:border-[#A45AFA]/40 hover:bg-[#A45AFA]/[0.07]">
                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                                <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-[#A45AFA]/20 flex items-center justify-center border border-[#A45AFA]/20">
                                    <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#A45AFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm sm:text-base font-semibold text-white mb-1.5 sm:mb-2 tracking-tight">
                                    Contact Us
                                </h4>
                                <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-300">
                                    If you witness or experience inappropriate behavior during AWS Student Community Day Bhilai 2026, please report it promptly to the event organizers. You can contact us via email at <a href="mailto:aws.sbg.sstc@gmail.com" className="text-[#A45AFA] hover:text-[#B87CFF] transition-colors duration-200 font-medium">aws.sbg.sstc@gmail.com</a> or through our official communication channels. All reports will be handled with care, respect, and confidentiality.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Footer */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-white/5">
                        <p className="text-[10px] sm:text-xs text-slate-500 text-center sm:text-left leading-relaxed">
                            By attending this event, you agree to uphold these principles and help create a positive experience for everyone.
                        </p>
                        <div className="flex items-center gap-2 sm:gap-3 text-[8px] sm:text-[10px] text-slate-600 uppercase tracking-wider">
                            <span>AWS Student Community Day Bhilai 2026</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
