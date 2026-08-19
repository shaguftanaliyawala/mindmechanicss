// // 'use client';

// // import React from 'react';
// // import { MapPin } from 'lucide-react';

// // interface OfficeToursComponentProps {
// //   videoUrl?: string;
// //   officeLocation?: string;
// // }

// // export const OfficeToursComponent: React.FC<OfficeToursComponentProps> = ({
// //   videoUrl = 'YOUR_VIDEO_URL_HERE',
// //   officeLocation = 'Karachi, Sindh, Pakistan',
// // }) => {
// //   return (
// //     <section className="py-24 px-4 md:px-6">
// //       <div className="max-w-7xl mx-auto">
// //         {/* Section Header */}
// //         <div className="text-center mb-16">
// //           <p className="text-xs md:text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-4">
// //             Visit Our Space
// //           </p>
// //           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
// //             Our Office Now Open
// //           </h2>
// //           <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
// //             Experience our thoughtfully designed therapeutic space where comfort and healing come first. 
// //             Visit us for walk-in consultations or online appointments.
// //           </p>
// //         </div>

// //         {/* Main Content */}
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
// //           {/* Left Content */}
// //           <div className="space-y-8">
// //             {/* Description Paragraph */}
// //             <div className="space-y-4">
// //               <p className="text-gray-300 leading-relaxed text-base md:text-lg">
// //                 Step into our welcoming therapeutic environment designed for your peace and healing. 
// //                 Our professional space combines comfort with confidentiality, creating the perfect setting 
// //                 for your mental wellness journey. Whether you prefer face-to-face sessions or online consultations, 
// //                 we're here to support you every step of the way.
// //               </p>
// //             </div>

// //             {/* Location Info */}
// //             <div className="flex items-start gap-4 pt-4">
// //               <div className="flex-shrink-0">
// //                 <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
// //                   <MapPin className="h-5 w-5 text-cyan-400" />
// //                 </div>
// //               </div>
// //               <div>
// //                 <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
// //                   Location
// //                 </p>
// //                 <p className="text-white text-lg font-medium">
// //                   {officeLocation}
// //                 </p>
// //               </div>
// //             </div>

// //             {/* Additional Info */}
// //           </div>

// //           {/* Right Content - Video */}
// //           <div className="flex justify-center lg:justify-end">
// //             <div className="w-full max-w-sm aspect-video md:aspect-auto rounded-xl overflow-hidden border border-white/10 bg-black shadow-2xl">
// //               <div className="relative w-full h-full" style={{ aspectRatio: '9/16' }}>
// //                 <video
// //                   autoPlay
// //                   muted
// //                   loop
// //                   playsInline
// //                   className="w-full h-full object-cover"
// //                 >
// //                   <source src={videoUrl} type="video/mp4" />
// //                   Your browser does not support the video tag.
// //                 </video>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default OfficeToursComponent;

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import {
//   MapPin,
//   CalendarDays,
//   ArrowUpRight,
// } from "lucide-react";

// export default function NewTherapy StuidoSection() {
//   return (
//     <section className="w-full bg-[#080b11] px-5 py-20 md:px-8 md:py-24 lg:py-28">
//       <div className="mx-auto max-w-6xl">

//         {/* Section Heading */}
//         <div className="mb-12 text-center md:mb-16">
//           <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.35em] text-white/35">
//             A New Beginning
//           </p>

//           <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
//             Our New Therapy Stuido Is Now Open
//           </h2>

//           <p className="mx-auto mt-3 max-w-xl text-[11px] leading-5 text-white/40 md:text-xs">
//             A thoughtfully designed space for meaningful conversations,
//             professional care, and personal growth.
//           </p>
//         </div>

//         {/* Main Layout */}
//         <div className="grid items-center gap-10 md:grid-cols-[1fr_260px_1fr] lg:grid-cols-[1fr_280px_1fr]">

//           {/* LEFT — Information */}
//           <div className="text-center md:text-left">

//             <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.25em] text-white/35">
//               Now Welcoming You
//             </p>

//             <h3 className="text-xl font-medium leading-tight text-white md:text-2xl">
//               In person
//               <br />
//               <span className="text-white/45">
//                 and online.
//               </span>
//             </h3>

//             <p className="mt-4 max-w-sm text-[10px] leading-5 text-white/40 md:text-[11px]">
//               We are now open for walk-in consultations at our new Therapy Stuido.
//               Online appointments are also available for those who prefer
//               to connect remotely.
//             </p>

//             {/* Location */}
//             <div className="mt-7 flex items-center justify-center gap-3 md:justify-start">
//               <MapPin className="h-3.5 w-3.5 shrink-0 text-white/50" />

//               <div>
//                 <p className="text-[8px] uppercase tracking-[0.2em] text-white/30">
//                   Visit Us
//                 </p>

//                 <p className="mt-0.5 text-[10px] text-white/65">
//                   Your Therapy Stuido Address Here
//                 </p>
//               </div>
//             </div>

//             {/* Appointment */}
//             <div className="mt-4 flex items-center justify-center gap-3 md:justify-start">
//               <CalendarDays className="h-3.5 w-3.5 shrink-0 text-white/50" />

//               <div>
//                 <p className="text-[8px] uppercase tracking-[0.2em] text-white/30">
//                   Appointments
//                 </p>

//                 <p className="mt-0.5 text-[10px] text-white/65">
//                   Walk-ins & Online Consultations
//                 </p>
//               </div>
//             </div>

//             {/* CTA */}
//             <div className="mt-7">
//               <Link
//                 href="/contact"
//                 className="group inline-flex items-center gap-2 border border-white/15 px-4 py-2 text-[9px] font-medium text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.04]"
//               >
//                 Book an Appointment

//                 <ArrowUpRight
//                   className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//                 />
//               </Link>
//             </div>
//           </div>

//           {/* CENTER — Portrait Video */}
//           <div className="mx-auto w-full max-w-[240px] md:max-w-[260px]">

//             <div className="relative aspect-[9/16] overflow-hidden bg-black">

//               <video
//                 src="/office_tour.mp4"
//                 poster="/images/Therapy Stuido-video-poster.jpg"
//                 className="h-full w-full object-cover"
//                 controls
//                 playsInline
//               />

//             </div>

//             <p className="mt-3 text-center text-[8px] uppercase tracking-[0.25em] text-white/30">
//               Explore Our New Space
//             </p>
//           </div>

//           {/* RIGHT — Therapy Stuido Image */}
//           <div className="hidden md:block">

//             <div className="relative aspect-[4/5] overflow-hidden">

//               <Image
//                 src="/images/Therapy Stuido.jpg"
//                 alt="Mind Mechanics new Therapy Stuido"
//                 fill
//                 className="object-cover"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

//               <div className="absolute bottom-5 left-5">
//                 <p className="text-[8px] uppercase tracking-[0.25em] text-white/50">
//                   Mind Mechanics
//                 </p>

//                 <p className="mt-1 text-xs text-white">
//                   Our new space.
//                 </p>
//               </div>
//             </div>

//           </div>

//         </div>

//         {/* Bottom Divider */}
//         <div className="mt-16 border-t border-white/[0.06] pt-5 text-center">
//           <p className="text-[8px] tracking-[0.2em] text-white/25">
//             WALK IN · BOOK ONLINE · BEGIN YOUR JOURNEY
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }

// "use client"

// import Image from "next/image"
// import Link from "next/link"
// import { MapPin, CalendarDays, ArrowUpRight, Play } from "lucide-react"

// export default function NewTherapy StuidoSection() {
//   return (
//     <section className="relative w-full bg-[#080b11] px-5 py-20 md:px-8 md:py-24 lg:py-28">
//       <div className="mx-auto max-w-6xl">

//         {/* =========================
//             SECTION HEADER
//         ========================== */}
//         <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">

//           <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.35em] text-white/35">
//             A New Beginning
//           </p>

//           <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
//             Our New Therapy Stuido Is Now Open
//           </h2>

//           <p className="mx-auto mt-4 max-w-lg text-[10px] leading-5 text-white/40 sm:text-xs">
//             A thoughtfully designed space created for meaningful
//             conversations, professional care, and personal growth.
//           </p>

//         </div>


//         {/* =========================
//             MAIN CONTENT
//         ========================== */}
//         <div className="grid items-center gap-8 md:grid-cols-[1fr_240px_240px] lg:grid-cols-[1fr_270px_270px] lg:gap-10">


//           {/* =========================
//               LEFT CONTENT
//           ========================== */}
//           <div className="flex flex-col justify-center">

//             <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.3em] text-white/35">
//               Now Welcoming You
//             </p>

//             <h3 className="text-2xl font-medium leading-[1.15] text-white sm:text-3xl">
//               In person
//               <br />
//               <span className="text-white/45">
//                 and online.
//               </span>
//             </h3>

//             <p className="mt-5 max-w-sm text-[10px] leading-6 text-white/40 sm:text-[11px]">
//               Our doors are now open for walk-in consultations at our new
//               Therapy Stuido. You can also book an online appointment and connect
//               with us from wherever you are.
//             </p>


//             {/* Location */}
//             <div className="mt-7 flex items-start gap-3">

//               <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.04]">
//                 <MapPin className="h-3.5 w-3.5 text-white/60" />
//               </div>

//               <div>
//                 <p className="text-[8px] uppercase tracking-[0.25em] text-white/30">
//                   Visit Us
//                 </p>

//                 <p className="mt-1 text-[10px] leading-4 text-white/65">
//                   DHA Phase 5, Karachi
//                 </p>
//               </div>

//             </div>


//             {/* Appointments */}
//             <div className="mt-4 flex items-start gap-3">

//               <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.04]">
//                 <CalendarDays className="h-3.5 w-3.5 text-white/60" />
//               </div>

//               <div>
//                 <p className="text-[8px] uppercase tracking-[0.25em] text-white/30">
//                   Appointments
//                 </p>

//                 <p className="mt-1 text-[10px] leading-4 text-white/65">
//                   Walk-ins & Online Consultations
//                 </p>
//               </div>

//             </div>


//             {/* Button */}
//             <div className="mt-7">

//               <Link
//                 href="/contact"
//                 className="group inline-flex items-center gap-2 border border-white/15 px-5 py-2.5 text-[9px] font-medium text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.04]"
//               >
//                 Book an Appointment

//                 <ArrowUpRight
//                   className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                 />
//               </Link>

//             </div>

//           </div>


//           {/* =========================
//               CENTER — VIDEO
//           ========================== */}
//           <div className="mx-auto w-full max-w-[270px]">

//             <div className="group relative aspect-[9/16] overflow-hidden bg-black">

//               <video
//                 src="/videos/Therapy Stuido-tour.mp4"
//                 poster="/images/Therapy Stuido-video-poster.jpg"
//                 className="h-full w-full object-cover"
//                 controls
//                 playsInline
//               />

//               {/* Subtle overlay */}
//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

//             </div>

//             <div className="mt-3 flex items-center justify-center gap-2">

//               <Play className="h-2.5 w-2.5 fill-white/40 text-white/40" />

//               <p className="text-[8px] uppercase tracking-[0.3em] text-white/30">
//                 Therapy Stuido Tour
//               </p>

//             </div>

//           </div>


//           {/* =========================
//               RIGHT — Therapy Stuido IMAGE
//           ========================== */}
//           <div className="mx-auto w-full max-w-[270px]">

//             <div className="group relative aspect-[4/5] overflow-hidden">

//               <Image
//                 src="/images/Therapy Stuido.jpg"
//                 alt="Mind Mechanics new Therapy Stuido"
//                 fill
//                 priority
//                 className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
//               />

//               {/* Image gradient */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

//               {/* Image text */}
//               <div className="absolute bottom-5 left-5">

//                 <p className="text-[8px] uppercase tracking-[0.3em] text-white/45">
//                   Mind Mechanics
//                 </p>

//                 <p className="mt-1 text-xs font-medium text-white">
//                   A space designed for you.
//                 </p>

//               </div>

//             </div>

//           </div>

//         </div>


//         {/* =========================
//             BOTTOM STATEMENT
//         ========================== */}
//         <div className="mt-14 flex items-center justify-center gap-4">

//           <div className="h-px w-10 bg-white/10 sm:w-20" />

//           <p className="text-[7px] uppercase tracking-[0.3em] text-white/25 sm:text-[8px]">
//             Walk In
//             <span className="mx-2">•</span>
//             Book Online
//             <span className="mx-2">•</span>
//             Begin Your Journey
//           </p>

//           <div className="h-px w-10 bg-white/10 sm:w-20" />

//         </div>

//       </div>
//     </section>
//   )
// }

"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, CalendarDays, ArrowUpRight, Play } from "lucide-react"

export default function NewTherapyClinic() {
  return (
    <section className="relative w-full bg-[#080b11] px-5 py-20 md:px-8 md:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">

          <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-white/35">
            A New Beginning
          </p>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Our New Therapy Stuido Is Now Open
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-lg md:text-xl leading-relaxed text-white/40">
            A thoughtfully designed space created for meaningful
            conversations, professional care, and personal growth.
          </p>

        </div>


        {/* =========================
            MAIN CONTENT
        ========================== */}
        <div className="grid items-center gap-8 md:grid-cols-[1fr_240px_240px] lg:grid-cols-[1fr_270px_270px] lg:gap-10">


          {/* =========================
              LEFT CONTENT
          ========================== */}
          <div className="flex flex-col justify-center">

            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-white/35">
              Now Welcoming You
            </p>

            <h3 className="text-3xl md:text-4xl font-bold leading-[1.15] text-white">
              In person
              <br />
              <span className="text-white/45">
                and online.
              </span>
            </h3>

            <p className="mt-5 max-w-sm text-lg leading-relaxed text-white/40">
              Our doors are now open for walk-in consultations at our new
              Therapy Stuido. You can also book an online appointment and connect
              with us from wherever you are.
            </p>


            {/* Location */}
            <div className="mt-7 flex items-start gap-3">

              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.04]">
                <MapPin className="h-4 w-4 text-white/60" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                  Visit Us
                </p>

                <p className="mt-1 text-base leading-5 text-white/65">
                  Shop no.5 Plot.5-C Seher Commercial Lane 3, D.H.A. Phase 7, Karachi
                </p>
              </div>

            </div>


            {/* Appointments */}
            <div className="mt-4 flex items-start gap-3">

              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.04]">
                <CalendarDays className="h-4 w-4 text-white/60" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                  Appointments
                </p>

                <p className="mt-1 text-base leading-5 text-white/65">
                  Walk-ins & Online Consultations
                </p>
              </div>

            </div>


            {/* Button */}
            <div className="mt-7">

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 border border-white/15 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.04]"
              >
                Book an Appointment

                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

            </div>

          </div>
          {/* =========================
    CENTER — VIDEO
========================== */}
          <div className="mx-auto w-full max-w-[270px]">

            <div className="group relative h-[360px] overflow-hidden bg-black">

              <video
  src="/office_tour.mp4"
  poster="/images/Therapy Stuido-video-poster.jpg"
  className="h-full w-full object-cover"
  autoPlay
  loop
  muted
  playsInline
/>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            </div>

            <div className="mt-3 flex items-center justify-center gap-2">
              <Play className="h-3 w-3 fill-white/40 text-white/40" />
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Therapy Stuido Tour
              </p>
            </div>

          </div>


          {/* =========================
    RIGHT — Therapy Stuido IMAGE
========================== */}
          <div className="mx-auto w-full max-w-[270px]">

            <div className="group relative h-[360px] overflow-hidden">

              <Image
                src="/clinic.jpeg"
                alt="Mind Mechanics new Therapy Stuido"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

              <div className="absolute bottom-5 left-5">
                <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                  Mind Mechanics
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  A space designed for you.
                </p>

              </div>

            </div>

            {/* Matching caption to balance with video's "Therapy Stuido Tour" label */}
            <div className="mt-3 flex items-center justify-center gap-2">
              <MapPin className="h-3 w-3 text-white/40" />
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Our Space
              </p>
            </div>

          </div>
        </div>


        {/* =========================
            BOTTOM STATEMENT
        ========================== */}
        <div className="mt-14 flex items-center justify-center gap-4">

          <div className="h-px w-10 bg-white/10 sm:w-20" />

          <p className="text-xs uppercase tracking-[0.3em] text-white/25">
            Walk In
            <span className="mx-2">•</span>
            Book Online
            <span className="mx-2">•</span>
            Begin Your Journey
          </p>

          <div className="h-px w-10 bg-white/10 sm:w-20" />

        </div>

      </div>
    </section>
  )
}