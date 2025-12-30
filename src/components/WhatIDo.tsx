'use client'
import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
                    className="relative h-screen overflow-hidden"
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
                        <div className="lg:w-2/3 overflow-hidden ">
                            <div ref={trackRef} className="flex flex-col">
                                {ITEMS.map((item, index) => (
                                    <div
                                        key={index}
                                        className="what-slide min-h-screen flex flex-col justify-center gap-6 pb-10"
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
                    </div>
                </div>
            </div>
        </section>
    )
}





// 'use client'
// import { gsap, ScrollTrigger, registerGSAP } from "../lib/gsap";
// import React, { useLayoutEffect, useRef } from 'react'

// const ITEMS = [
//     {
//         title: "Development",
//         desc: "From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.",
//         list: [
//             { tools: ["React", "Next.js", "Vue.js"] },
//             { tools: ["REST APIs", "Fetch", "Axios"] },
//             { tools: ["Git", "GitHub", "Postman", "Vite", "Webpack"] },
//         ],
//     },
//     {
//         title: "Performance",
//         desc: "Optimizing performance and smooth interactions with GSAP.",
//         list: [
//             { tools: ["Lazy Loading", "Memoization"] },
//             { tools: ["Code Splitting", "SEO Principles"] },
//             { tools: ["Cross-browser Compatibility"] },
//         ],
//     },
//     {
//         title: "Design & UX",
//         desc: "Creating polished and intuitive digital experiences.",
//         list: [
//             { tools: ["Figma", "Adobe XD", "Photoshop"] },
//             { tools: ["Responsive Design", "Accessibility", "Typography"] },
//             { tools: ["Animations & Microinteractions", "Prototyping"] },
//         ],
//     },
// ];

// export default function WhatIDo() {
//     const pinSectionRef = useRef<HTMLDivElement>(null);
//     const titleRef = useRef<HTMLHeadingElement>(null);
//     const descRef = useRef<HTMLParagraphElement>(null);
//     const counterRef = useRef<HTMLSpanElement>(null);
//     const listRef = useRef<HTMLUListElement>(null);

//     useLayoutEffect(() => {
//         if (!pinSectionRef.current) return; // ensure DOM exists

//         registerGSAP();

//         const ctx = gsap.context(() => {
//             const tl = gsap.timeline({
//                 defaults: { ease: "power4.out", duration: 1 },
//             });



//             ScrollTrigger.create({
//                 trigger: pinSectionRef.current,
//                 start: "10% top",
//                 end: `+=${ITEMS.length * 100}%`,
//                 scrub: true,
//                 pin: true,
//                 onUpdate: (self) => {
//                     const index = Math.min(
//                         ITEMS.length - 1,
//                         Math.floor(self.progress * ITEMS.length)
//                     );

//                     counterRef.current!.textContent = `(0${index + 1})`;
//                     titleRef.current!.textContent = ITEMS[index].title;
//                     descRef.current!.textContent = ITEMS[index].desc;

//                     // Render list dynamically
//                     const toolsHTML = ITEMS[index].list
//                         .map(item => item.tools.join(", "))
//                         .map((str, i) => `<li class="py-3 m-0 flex items-center border-b border-gray-500/50">
//                             <span class="mr-2 font-bold text-xl opacity-60">0${i + 1}</span>
//                             <p class="text-3xl capitalize">${str}</p>
//                             </li>`)
//                         .join("");
//                     if (listRef.current) {
//                         listRef.current.innerHTML = toolsHTML;
//                     }
//                 },
//             });
//         });

//         return () => ctx.revert();
//     }, []);

//     return (
//         <section className="relative bg-[#000] z-20 text-white">
//             <div className="app-wrapper">

//                 <div className="content-head pt-20">
//                     <h1 className="hero-name text-[7.5vw] tracking-wide uppercase font-bold mb-6 flex justify-between gap-4 overflow-hidden">
//                         What I Do /
//                     </h1>
//                     <div className="text max-w-[760px] pt-10 pr-40 mx-auto mr-0 flex gap-12">
//                         <span className="block text-[#999]">(Services)</span>
//                         <p className="pro-desc text-[22px] text-gray-300 leading-8">
//                             {"I specialize in building full-stack web applications that are fast, reliable, and user-friendly. With a solid foundation in both frontend and backend technologies, I help bring ideas to life whether it's for a business, a startup, or a product team."
//                                 .split(" ")
//                                 .map((word, index) => (
//                                     <span key={index} className="inline-block">
//                                         {word}&nbsp;
//                                     </span>
//                                 ))}
//                         </p>
//                     </div>
//                 </div>

//                 <div ref={pinSectionRef} className="relative min-h-[80vh] mt-20 border-t border-gray-400/50">
//                     <div className="flex h-screen">
//                         <div className="lg:w-[50%] flex items-center">
//                             <h2 className="text-6xl font-bold text-gray-300">
//                                 <span ref={counterRef}>01</span>
//                             </h2>
//                         </div>

//                         <div className="w-2/3 flex flex-col justify-center gap-6">
//                             <div>
//                                 <h3 ref={titleRef} className="text-5xl font-semibold capitalize pb-10">{ITEMS[0].title}</h3>
//                                 <p ref={descRef} className="max-w-[400px] text-xl opacity-70 text-gray-200">{ITEMS[0].desc}</p>
//                             </div>
//                             <ul ref={listRef} className="mt-6 list-disc">
//                                 {ITEMS[0].list.map((item, idx) => (
//                                     <li
//                                         key={idx + 1}
//                                         className="py-3 m-0 flex items-center border-b border-gray-500/50">
//                                         <span className="mr-2 font-bold text-xl opacity-60">0{idx + 1}</span>
//                                         <p className="text-3xl capitalize">{item.tools.join(", ")}</p>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
