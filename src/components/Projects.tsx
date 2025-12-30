'use client'
import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ITEMS = [

    {
        name: "Travel Booking System",
        desc: "Developed a full-stack travel booking system where users can explore travel packages, enter passenger details, and complete bookings through a structured multi-step flow. Emphasized real-world booking logic, form validation, and a responsive, production-ready UI.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        github: "https://github.com/bhupendrasingh03/",
    },
    {
        name: "Dynamic CMS Platform",
        desc: "Built a flexible content management platform focused on reusable UI components and API-driven content rendering. Integrated smooth GSAP animations and modular layouts to allow non-technical users to manage content without breaking design consistency.",
        tech: ["Next.js", "GSAP", "REST API"],
        github: "",
    },
    {
        name: "Cloud Drive Web Application",
        desc: "Designed and developed a secure cloud-based file management system that enables users to upload, organize, share, and control access to files. Implemented role-based permissions, authentication workflows, and optimized UI performance for handling large datasets efficiently.",
        tech: ["React", "Node.js", "MongoDB", "JWT"],
        github: "",
    },
    {
        name: "Flight Booking Interface",
        desc: "Created a modern flight booking experience with real-time filtering, dynamic pricing logic, and centralized state management. Focused on building an intuitive user journey from flight discovery to booking while maintaining performance and scalability.",
        tech: ["React", "Redux", "Tailwind CSS"],
        github: "",
    },
]



export default function Projects() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)
    const counterRef = useRef<HTMLSpanElement>(null)

    useLayoutEffect(() => {
        if (!sectionRef.current || !trackRef.current) return

        const ctx = gsap.context(() => {

            gsap.from('.heading-projects', {
                yPercent: 120,
                opacity: 0,
                duration: 1,
                ease: 'power4.out',
                stagger: 0.12,
                scrollTrigger: {
                    trigger: '.heading-word',
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
            })



            const slides = gsap.utils.toArray<HTMLElement>('.project-slide');
            slides.forEach((slide) => {
                const title = slide.querySelector('.slide-title')
                const desc = slide.querySelector('.slide-desc')

                gsap.from([title, desc], {
                    y: 60,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: slide,
                        start: 'top center',
                        end: 'bottom center',
                        toggleActions: 'play none none reverse',
                    },
                })
            })

            const totalSlides = slides.length

            gsap.to(trackRef.current, {
                y: () => -(totalSlides - 1) * window.innerHeight,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: () => `+=${totalSlides * window.innerHeight}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    onUpdate: (self) => {
                        const index = Math.min(
                            totalSlides - 1,
                            Math.floor(self.progress * totalSlides)
                        )
                        if (counterRef.current) {
                            counterRef.current.textContent = `0${index + 1}`
                        }
                    },
                },
            })
        })

        return () => ctx.revert()
    }, [])

    return (
        <section className="relative bg-black text-white border-t border-white/10">
            <div className="app-wrapper">


                {/* HEADER */}
                <div className="lg:pt-24 pt-16 lg:pb-16 pb-12">
                    <h1 className="lg:text-[7vw] text-[35px] heading-projects uppercase font-extrabold tracking-tight overflow-hidden">
                        {'Projects'.split(' ').map((word, i) => (
                            <span key={i} className="inline-block mr-[0.25em]">
                                <span className="inline-block heading-word">
                                    {word}
                                </span>
                            </span>
                        ))}
                        <span className="text-white/30">.</span>
                    </h1>
                </div>

                {/* PINNED SECTION */}
                <div
                    ref={sectionRef}
                    className="relative h-screen overflow-hidden border-t border-white/10"
                >
                    <div className="lg:flex lg:h-full">

                        {/* LEFT COUNTER */}
                        <div className="lg:w-1/3 w-full flex items-start lg:pb-0 pb-5 lg:pt-24 pt-12 lg:pl-10">
                            <div className="flex gap-6">
                                <span className="lg:text-8xl text-4xl font-bold text-white/40">
                                    (<span ref={counterRef}>01</span>)
                                </span>
                                <div className="lg:block hidden w-px h-[60vh] bg-white/20 mt-4" />
                            </div>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="lg:w-2/3 overflow-hidden">
                            <div ref={trackRef} className="flex flex-col">

                                {ITEMS.map((item, index) => (
                                    <div
                                        key={index}
                                        className="project-slide h-screen flex flex-col justify-center gap-8 lg:pr-20"
                                    >
                                        <h3 className="lg:text-[4.5vw] text-[26px] font-bold leading-none slide-title">
                                            {item.name}
                                        </h3>

                                        <p className="lg:max-w-[520px] text-xl text-white/70 slide-desc">
                                            {item.desc}
                                        </p>

                                        {/* TECH STACK */}
                                        <div className="flex gap-3 flex-wrap">
                                            {item.tech.map((t, i) => (
                                                <span
                                                    key={i}
                                                    className="px-4 py-1 text-sm border border-white/30 rounded-full text-white/80"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        {/* ACTION */}
                                        <div className="pt-4">
                                            <a
                                                href={item.github}
                                                className="inline-flex items-center gap-2 text-lg font-medium border-b border-white pb-1 hover:text-white/70 transition"
                                            >
                                                View Project →
                                            </a>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


// 'use client'
// import React, { useLayoutEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'


// gsap.registerPlugin(ScrollTrigger)

// const ITEMS = [
//     {
//         name: "Cloud Drive Web Application",
//         desc: "MERN + secure file sharing.",
//         github: "",
//     },
//     {
//         name: "Dynamic CMS",
//         desc: "Next.js + API + GSAP UI.",
//         github: "",
//     },
//     {
//         name: "Flight Booking",
//         desc: "React + Redux UI project.",
//         github: "",
//     },
// ]

// export default function Projects() {
//     const sectionRef = useRef<HTMLDivElement>(null)
//     const trackRef = useRef<HTMLDivElement>(null)
//     const counterRef = useRef<HTMLSpanElement>(null)

//     useLayoutEffect(() => {
//         if (!sectionRef.current || !trackRef.current) return

//         const ctx = gsap.context(() => {
//             const slides = gsap.utils.toArray<HTMLElement>('.project-slide')
//             const totalSlides = slides.length

//             gsap.to(trackRef.current, {
//                 y: () => -(totalSlides - 1) * window.innerHeight,
//                 ease: 'none',
//                 scrollTrigger: {
//                     trigger: sectionRef.current,
//                     start: 'top top',
//                     end: () => `+=${totalSlides * window.innerHeight}`,
//                     scrub: 1, // THIS is what makes it slow & smooth
//                     pin: true,
//                     anticipatePin: 1,
//                     onUpdate: (self) => {
//                         const index = Math.min(
//                             totalSlides - 1,
//                             Math.floor(self.progress * totalSlides)
//                         )
//                         if (counterRef.current) {
//                             counterRef.current.textContent = `0${index + 1}`
//                         }
//                     },
//                 },
//             })
//         })

//         return () => ctx.revert()
//     }, [])

//     return (
//         <section className="relative bg-black text-white">
//             <div className="app-wrapper">
//                 {/* HEADER */}
//                 <div className="pt-20">
//                     <h1 className="text-[7.5vw] uppercase font-bold mb-12">
//                          Projects /
//                     </h1>
//                 </div>

//                 {/* PINNED */}
//                 <div
//                     ref={sectionRef}
//                     className="relative h-screen overflow-hidden border-t border-gray-400/50"
//                 >
//                     <div className="flex h-full">
//                         {/* LEFT */}
//                         <div className="w-1/3 flex pt-10">
//                             <h2 className="text-9xl font-bold text-white/50">
//                                 (<span ref={counterRef}>01</span>)
//                             </h2>
//                         </div>

//                         {/* RIGHT */}
//                         <div className="w-2/3 overflow-hidden">
//                             <div ref={trackRef} className="flex flex-col">
//                                 {ITEMS.map((item, index) => (
//                                     <div
//                                         key={index}
//                                         className="project-slide h-[90vh] flex flex-col justify-center gap-6 pb-10"
//                                     >
//                                         <h3 className="text-5xl font-semibold">
//                                             {item.name}
//                                         </h3>

//                                         <p className="max-w-[420px] text-xl opacity-70">
//                                             {item.desc}
//                                         </p>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }



