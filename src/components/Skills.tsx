'use client'

import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Skills() {

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            /* MAIN HEADING */
            gsap.from('.skills-heading', {
                y: 120,
                opacity: 0,
                duration: 1.2,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: '.skills-heading',
                    start: 'top 85%',
                },
            })

            /* EACH SKILL CARD */
            gsap.utils.toArray<HTMLElement>('.skill-card').forEach((card) => {
                const title = card.querySelector('h3')
                const desc = card.querySelector('p')
                const chips = card.querySelectorAll('.skill-chip')

                gsap.from([title, desc], {
                    y: 60,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                    },
                })

                gsap.from(chips, {
                    y: 30,
                    opacity: 0,
                    scale: 0.95,
                    duration: 0.5,
                    ease: 'power3.out',
                    stagger: 0.08,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 75%',
                    },
                })
            })

        })

        return () => ctx.revert()
    }, [])

    return (
        <section className="relative bg-black text-white">
            <div className="app-wrapper">

                {/* HEADER */}
                <div className="lg:pt-24 pt-12 lg:pb-20 pb-8">
                    <h1 className="lg:text-[7vw] text-[35px] uppercase font-extrabold tracking-tight skills-heading">
                        Skills<span className="text-white/30">.</span>
                    </h1>
                </div>

                {/* SKILLS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 lg:gap-y-24 gap-y-16 lg:pb-32 pb-16">

                    {/* Frontend Core */}
                    <div className="space-y-6 skill-card">
                        <h3 className="lg:text-[2.8vw] text-2xl font-bold leading-tight">
                            Frontend Core
                        </h3>
                        <p className="max-w-[520px] text-lg text-white/70">
                            Strong foundation in building fast, accessible, and maintainable user interfaces.
                        </p>
                        <div className="flex gap-3 flex-wrap">
                            {["HTML5", "CSS3", "JavaScript (ES6+)", "Accessibility", "Performance Optimization"].map((skill, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-1 text-sm border border-white/30 rounded-full text-white/80 skill-chip"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Frameworks */}
                    <div className="space-y-6 skill-card">
                        <h3 className="lg:text-[2.8vw] text-2xl font-bold leading-tight">
                            Frameworks & Libraries
                        </h3>
                        <p className="max-w-[520px] text-lg text-white/70">
                            Experienced in building production-ready applications using modern frameworks.
                        </p>
                        <div className="flex gap-3 flex-wrap">
                            {["React.js", "Next.js", "Redux", "Context API", "Vue.js"].map((skill, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-1 text-sm border border-white/30 rounded-full text-white/80 skill-chip"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Styling */}
                    <div className="space-y-6 skill-card">
                        <h3 className="lg:text-[2.8vw] text-2xl font-bold leading-tight">
                            Styling & UI
                        </h3>
                        <p className="max-w-[520px] text-lg text-white/70">
                            Focused on clean layouts, responsive design, and motion-driven user experience.
                        </p>
                        <div className="flex gap-3 flex-wrap">
                            {["Tailwind CSS", "CSS Modules", "GSAP", "ScrollTrigger", "Responsive Design"].map((skill, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-1 text-sm border border-white/30 rounded-full text-white/80 skill-chip"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="space-y-6 skill-card">
                         <h3 className="lg:text-[2.8vw] text-2xl font-bold leading-tight">
                            Backend & Integration
                        </h3>
                        <p className="max-w-[520px] text-lg text-white/70">
                            Hands-on experience integrating APIs, authentication flows, and backend services.
                        </p>
                        <div className="flex gap-3 flex-wrap">
                            {["Node.js", "Express", "MongoDB", "REST APIs", "JWT"].map((skill, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-1 text-sm border border-white/30 rounded-full text-white/80 skill-chip"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
