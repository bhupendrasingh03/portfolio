'use client'

import React, { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
    const sectionRef = useRef<HTMLElement>(null)

    useLayoutEffect(() => {
        if (!sectionRef.current) return

        const ctx = gsap.context(() => {

            // Big statement
            gsap.from('.about-heading', {
                y: 80,
                opacity: 0,
                duration: 1.2,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: '.about-heading',
                    start: 'top 85%',
                },
            })

            // About label + text block
            gsap.from('.about-content > *', {
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '.about-content',
                    start: 'top 80%',
                },
            })

            // Image
            gsap.from('.about-image', {
                scale: 1.1,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.about-image',
                    start: 'top 80%',
                },
            })

        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="relative bg-black text-white border-t border-white/10 lg:py-20 py-10"
            id="about"
        >
            <div className="app-wrapper py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* RIGHT CONTENT */}
                    <div className="lg:space-y-10">

                        <h5 className='lg:hidden block text-[35px] uppercase font-extrabold tracking-tight'>
                            About me {" "}
                            <span className="text-white/30">.</span>
                        </h5>
                        {/* BIG STATEMENT */}
                        <h2 className="lg:block hidden lg:text-[3.2vw] text-xl leading-tight font-medium about-heading">
                            I’m a software engineer driven by a passion for turning ideas
                            into clean, intuitive digital experiences.
                        </h2>

                        {/* ABOUT LABEL + TEXT */}
                        <div className="lg:flex gap-10 items-start pt-6 about-content">

                            <span className="lg:block hidden text-sm text-white/40 uppercase tracking-wide whitespace-nowrap">
                                (About Me)
                            </span>

                            <div className="space-y-6 max-w-[560px] lg:text-white/70 text-white/80 text-lg leading-relaxed">

                                <p className='lg:text-[18px] text-xl'>
                                    I’m a frontend-focused software engineer with experience
                                    building modern, scalable web applications using technologies
                                    like React, Next.js, and Tailwind CSS. I enjoy translating
                                    complex requirements into simple, user-friendly interfaces.
                                </p>

                                <p className='lg:text-[18px] text-xl'>
                                    Over time, I’ve worked on real-world products including travel
                                    booking platforms, dashboards, and content-driven websites.
                                    I thrive in collaborative environments and enjoy solving
                                    challenging problems that sit at the intersection of design,
                                    performance, and usability.
                                </p>

                            </div>
                        </div>

                    </div>

                    {/* LEFT IMAGE */}
                    <div className="relative w-full h-[520px] max-w-[320px] overflow-hidden rounded-md flex items-end justify-center mx-auto mr-0 about-image">

                        <Image
                            src="/assets/images/about.jpeg"
                            alt="About Bhupendra Singh"
                            fill
                            className="object-cover cursor-pointer grayscale hover:grayscale-0 transition-all duration-500"
                            priority
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}
