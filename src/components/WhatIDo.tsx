'use client'
import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useMobile from '../hooks/useMobile'

gsap.registerPlugin(ScrollTrigger)

const ITEMS = [
    {
        title: "Development",
        desc: "From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.",
        list: [
            ["React", "Next.js", "Vue.js"],
            ["REST APIs", "Fetch", "Axios"],
            ["Git", "GitHub", "Postman", "Vite", "Webpack"],
        ],
    },
    {
        title: "Performance",
        desc: "Optimizing performance and smooth interactions with GSAP.",
        list: [
            ["Lazy Loading", "Memoization"],
            ["Code Splitting", "SEO Principles"],
            ["Cross-browser Compatibility"],
        ],
    },
    {
        title: "Design & UX",
        desc: "Creating polished and intuitive digital experiences.",
        list: [
            ["Figma", "Adobe XD", "Photoshop"],
            ["Responsive Design", "Accessibility", "Typography"],
            ["Animations & Microinteractions", "Prototyping"],
        ],
    },
]

export default function WhatIDo() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)
    const counterRef = useRef<HTMLSpanElement>(null)

    const { isMobile } = useMobile();

    const ItemsContent = () => {
        return (
            <div className="lg:w-2/3 overflow-hidden lg:pt-0 pt-12">
                <div ref={trackRef} className="flex flex-col">
                    {ITEMS.map((item, index) => (
                        <div
                            key={index}
                            className="what-slide lg:min-h-screen flex flex-col lg:justify-center gap-6 pb-10"
                        >
                            <h3 className="lg:text-5xl text-3xl font-semibold slide-title">
                                {item.title}
                            </h3>

                            <p className="max-w-[420px] slide-desc text-xl opacity-70">
                                {item.desc}
                            </p>

                            <ul className="mt-6 slide-list">
                                {item.list.map((tools, i) => (
                                    <li
                                        key={i}
                                        className="py-3 slide-item flex items-center border-b border-gray-500/50"
                                    >
                                        <span className="mr-3 font-bold text-xl opacity-60">
                                            0{i + 1}
                                        </span>
                                        <p className="lg:text-3xl text-xl capitalize">
                                            {tools.join(', ')}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    useLayoutEffect(() => {
        if (!sectionRef.current || !trackRef.current) return

        const ctx = gsap.context(() => {

            gsap.from('.heading-word', {
                yPercent: 120,
                opacity: 0,
                duration: 1,
                ease: 'power4.out',
                stagger: 0.12,
                scrollTrigger: {
                    trigger: '.what-i-do-heading',
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
            })


            const slides = gsap.utils.toArray<HTMLElement>('.what-slide')

            slides.forEach((slide) => {
                const title = slide.querySelector('.slide-title')
                const desc = slide.querySelector('.slide-desc')
                const items = slide.querySelectorAll('.slide-item')

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

                gsap.from(items, {
                    y: 40,
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power3.out',
                    stagger: 0.12,
                    scrollTrigger: {
                        trigger: slide,
                        start: 'top center+=100',
                        toggleActions: 'play none none reverse',
                    },
                })
            })


            const slideHeight = slides[0].offsetHeight
            const totalSlides = slides.length

            gsap.to(trackRef.current, {
                y: -(totalSlides - 1) * slideHeight,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: () => `+=${slideHeight * totalSlides}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
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
        <section className="relative bg-black text-white lg:py-20 py-10 z-20">
            <div className="app-wrapper">
                <h1 className="lg:text-[7vw] text-[35px] what-i-do-heading uppercase font-extrabold tracking-tight overflow-hidden">
                    {'What I Do'.split(' ').map((word, i) => (
                        <span key={i} className="inline-block mr-[0.25em]">
                            <span className="inline-block heading-word">
                                {word}
                            </span>
                        </span>
                    ))}
                    <span className="text-white/30">.</span>
                </h1>


                {/* PINNED */}
                <div
                    ref={sectionRef}
                    className="lg:block hidden relative h-screen overflow-hidden"
                >
                    <div className="lg:flex h-full">
                        {/* LEFT */}
                        <div className="lg:w-1/3 w-full flex items-start lg:pb-0 pb-5 lg:pt-24 pt-12 lg:pl-10">
                            <div className="flex gap-6 w-full">
                                <span className="lg:text-8xl text-4xl font-bold text-white/40">
                                    (<span ref={counterRef}>01</span>)
                                </span>
                                <div className="lg:block hidden w-px h-[60vh] bg-white/20 mt-4" />
                            </div>
                        </div>

                        {/* RIGHT */}
                        {!isMobile && (<ItemsContent />)}

                    </div>
                </div>

                {isMobile && (<ItemsContent />)}
            </div>
        </section>
    )
}