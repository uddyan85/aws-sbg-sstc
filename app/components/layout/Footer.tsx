"use client";

import Link from "next/link";
import { useState } from "react";

import {
  Cloud,
  Heart,
  Mail,
  MapPin,
  Shield,
  FileText,
  ArrowUpRight,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaInstagram,
  FaMeetup,
  FaXTwitter,
} from "react-icons/fa6";

import PolicyDialog from "../ui/PolicyDialog";
import { div } from "framer-motion/client";

export default function Footer() {
  const [openConduct, setOpenConduct] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const eventLinks = [
    { label: "About", href: "#about" },
    { label: "Agenda", href: "#agenda" },
    { label: "Speakers", href: "#speakers" },
    { label: "Venue", href: "#venue" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <footer className="relative mt-16">
        {/* TOP BORDER */}

        <div className="h-px bg-gradient-to-r from-transparent via-[#A45AFA]/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-5 py-10">
          {/* HEADER */}

          <div
            className="
              mb-14
              flex flex-col lg:flex-row
              gap-8
              justify-between
            "
          >
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center gap-2 relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <img src="/AWS.png" alt="AWS Image" />
                  </div>

                  <div className="flex h-8 w-8 items-center justify-center">
                    <img src="/AWS_SBG.png" alt="AWS SBG Image" />
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-bold text-xl">AWS SBG SSTC</h3>

                  <p className="text-slate-400 text-sm">Bhilai</p>
                </div>
              </div>

              <p className="text-slate-400 leading-10">
                A premier gathering of innovators, developers, and industry
                leaders focused on meaningful connections, transformative ideas,
                and the technologies redefining the future.
              </p>
            </div>

            {/* EVENT STATUS */}

            <div
              className="
                h-fit
                px-5 py-3
                rounded-2xl
                border border-[#A45AFA]/90
                bg-[#A45AFA]/10
                text-[#A45AFA]
                text-sm
                uppercase
                font-bold
                flex items-center gap-3
              "
            >
              AWS Student Community Day • SEPTEMBER 2026
            </div>
          </div>

          {/* GRID */}

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/*---------------------- EVENT ----------------------*/}
            <div>
              <h4 className="text-white font-semibold mb-5 uppercase">Event</h4>
              <ul className="space-y-3">
                {eventLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="
          text-slate-400
          hover:text-[#A45AFA]
          transition-all
          duration-300
        "
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/*---------------------- COMMUNITY ----------------------*/}

            <div>
              <h4 className="text-white font-semibold mb-5 uppercase">
                Community
              </h4>

              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://builder.aws.com/community/student-builder-groups"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    flex items-center gap-2
                    text-slate-400
                    hover:text-[#A45AFA]
                    transition
                    "
                  >
                    AWS Student Builder Groups
                    <ArrowUpRight size={14} />
                  </Link>
                </li>

                <li>
                  <button
                    onClick={() => setOpenConduct(true)}
                    className="
                      text-slate-400
                      hover:text-[#A45AFA]
                      transition
                      flex items-center gap-2
                      cursor-pointer
                    "
                  >
                    <Shield size={15} />
                    Code of Conduct
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setOpenPrivacy(true)}
                    className="
                      text-slate-400
                      hover:text-[#A45AFA]
                      transition
                      flex items-center gap-2
                      cursor-pointer
                    "
                  >
                    <FileText size={15} />
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>

            {/*---------------------- RESOURCES ----------------------*/}

            <div>
              <h4 className="text-white font-semibold mb-5 uppercase">
                AWS Resources
              </h4>

              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://aws.amazon.com/free/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
          flex items-center gap-2
          text-slate-400
          hover:text-[#A45AFA]
          transition
        "
                  >
                    AWS Free Tier
                    <ArrowUpRight size={14} />
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://skillbuilder.aws/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
          flex items-center gap-2
          text-slate-400
          hover:text-[#A45AFA]
          transition
        "
                  >
                    AWS Skill Builder
                    <ArrowUpRight size={14} />
                  </Link>
                </li>

                {/* <li>
      <Link
        href="https://aws.amazon.com/certification/"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex items-center gap-2
          text-slate-400
          hover:text-[#A45AFA]
          transition
        "
      >
        AWS Certification
        <ArrowUpRight size={14} />
      </Link>
    </li> */}

                <li>
                  <Link
                    href="https://docs.aws.amazon.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
          flex items-center gap-2
          text-slate-400
          hover:text-[#A45AFA]
          transition
        "
                  >
                    AWS Docs
                    <ArrowUpRight size={14} />
                  </Link>
                </li>
              </ul>
            </div>

            {/*---------------------- CONNECT ----------------------*/}

            <div>
              <h4 className="text-white font-semibold mb-5 uppercase">
                Connect
              </h4>

              <div className="space-y-4 text-slate-400">
                <div className="flex gap-3">
                  <Mail size={18} />
                  <a
                    href="mailto:aws.sbg.sstc@gmail.com"
                    className="hover:underline hover:text-[#A45AFA]"
                  >
                    aws.sbg.sstc@gmail.com
                  </a>
                </div>

                <div className="flex gap-3">
                  <MapPin size={18} />
                  <span>Bhilai, Chhattisgarh, India</span>
                </div>

                {/*---------------------- social media links ----------------------*/}

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="https://www.meetup.com/aws-sbg-at-sstc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group h-11 w-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#A45AFA]/10 hover:border-[#A45AFA]/40 transition-all"
                  >
                    <FaMeetup className="text-slate-400 group-hover:text-[#A45AFA] text-lg" />
                  </Link>

                  <Link
                    href="https://www.linkedin.com/company/aws-sbg-sstc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group h-11 w-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#A45AFA]/10 hover:border-[#A45AFA]/40 transition-all"
                  >
                    <FaLinkedinIn className="text-slate-400 group-hover:text-[#A45AFA] text-lg" />
                  </Link>

                  <Link
                    href="https://www.instagram.com/aws_student_builder_group_sstc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group h-11 w-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#A45AFA]/10 hover:border-[#A45AFA]/40 transition-all"
                  >
                    <FaInstagram className="text-slate-400 group-hover:text-[#A45AFA] text-lg" />
                  </Link>

                  <Link
                    href="https://x.com/awsccsstc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group h-11 w-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#A45AFA]/10 hover:border-[#A45AFA]/40 transition-all"
                  >
                    <FaXTwitter className="text-slate-400 group-hover:text-[#A45AFA] text-lg" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM */}

          <div className="mt-14 pt-8 border-t border-white/10">
            <div
              className="
                flex flex-col md:flex-row
                gap-4
                justify-between
                items-center
              "
            >
              <p className="text-slate-500 text-sm">
                © 2026 AWS Student Builder Group SSTC. All rights reserved.
              </p>

              <div className="flex items-center gap-2 text-slate-500 text-sm">
                Made with
                <Heart
                  className=" text-bold text-[#A45AFA] animate-pulse"
                  size={15}
                />
                for builders.
                {/* by Uddyan */}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/*---------------------- CODE OF CONDUCT ----------------------*/}

      <PolicyDialog
        open={openConduct}
        onClose={() => setOpenConduct(false)}
        title="Code of Conduct"
        badge="COMMUNITY POLICY"
      >
        <div className="space-y-6">
          <div className="rounded-2xl border border-[#A45AFA]/20 bg-[#A45AFA]/5 p-5">
            <p className="text-slate-300 leading-7">
              We are committed to providing a safe, welcoming, inclusive, and
              respectful environment for all attendees, speakers, volunteers,
              and organizers throughout AWS Student Community Day Bhilai.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center gap-3">
                <span className="text-lg">🤝</span>
                <span className="text-white font-medium">Respect Everyone</span>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center gap-3">
                <span className="text-lg">🛡️</span>
                <span className="text-white font-medium">No Harassment</span>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center gap-3">
                <span className="text-lg">💬</span>
                <span className="text-white font-medium">
                  Professional Communication
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center gap-3">
                <span className="text-lg">⚡</span>
                <span className="text-white font-medium">
                  Follow Event Guidelines
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h4 className="mb-3 text-white font-medium">Reporting Concerns</h4>

            <p className="text-sm text-slate-400 leading-7">
              If you experience or witness behavior that violates this Code of
              Conduct, please contact an event organizer immediately. Reports
              will be handled respectfully and confidentially.
            </p>
          </div>

          <p className="text-center text-xs sm:text-sm text-slate-500">
            By attending this event, you agree to uphold these principles and
            help create a positive experience for everyone.
          </p>
        </div>
      </PolicyDialog>

      {/*---------------------- PRIVACY ----------------------*/}

      <PolicyDialog
        open={openPrivacy}
        onClose={() => setOpenPrivacy(false)}
        title="Privacy Policy"
        badge="LEGAL INFORMATION"
      >
        <div className="space-y-6">
          {/* INTRO */}

          <div className="rounded-2xl border border-[#A45AFA]/20 bg-[#A45AFA]/5 p-5">
            <p className="text-slate-300 leading-7">
              Your privacy is important to us. Information collected during
              registration and participation is used solely for event
              communication, management, and improving attendee experience.
            </p>
          </div>

          {/* POLICY ITEMS */}

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center gap-3">
                <span className="text-lg">🔒</span>
                <span className="text-white font-medium">Secure Storage</span>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center gap-3">
                <span className="text-lg">🚫</span>
                <span className="text-white font-medium">Never Sold</span>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center gap-3">
                <span className="text-lg">📧</span>
                <span className="text-white font-medium">
                  Event Communication Only
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center gap-3">
                <span className="text-lg">🗑️</span>
                <span className="text-white font-medium">
                  Data Removal Requests
                </span>
              </div>
            </div>
          </div>

          {/* DETAILS */}

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h4 className="mb-3 text-white font-medium">
              How We Use Your Information
            </h4>

            <p className="text-sm text-slate-400 leading-7">
              Personal information provided during registration may be used to
              send event updates, important announcements, schedule changes,
              participation details, and post-event communications related to
              AWS Student Community Day Bhilai.
            </p>
          </div>

          {/* FOOTER NOTE */}

          <p className="text-center text-xs sm:text-sm text-slate-500">
            By registering for this event, you consent to the collection and use
            of information as described in this Privacy Policy.
          </p>
        </div>
      </PolicyDialog>
    </>
  );
}
