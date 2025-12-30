'use client'
import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

const SOCIAL_LINKS = [
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/bhupendra-singh-rajput-890316295/',
    },
    {
        label: 'GitHub',
        href: 'https://github.com/bhupendrasingh03/',
    },
    {
        label: 'Medium',
        href: 'https://medium.com/@bp.singh/',
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/bp.singh07/',
    },
]


export default function Footer() {
    const footerRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        if (!footerRef.current) return

        const ctx = gsap.context(() => {
            gsap.from('.footer-item', {
                opacity: 0,
                y: 24,
                duration: 0.8,
                ease: 'power2.out',
                stagger: 0.12,
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 85%',
                },
            })
        })

        return () => ctx.revert()
    }, [])

    return (
        <footer
            ref={footerRef}
            className="bg-[#e8e8e3] text-black lg:py-24 py-16"
        >
            <div className="app-wrapper">

                {/* MAIN GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center">

                    {/* LEFT */}
                    <div className="footer-item space-y-3">
                        <p className="text-lg font-medium">
                            No © copyright issues.
                        </p>
                        <p className="text-base leading-relaxed text-black/70 max-w-sm">
                            Feel free to copy. If you need any help, ping me!
                        </p>
                    </div>

                    {/* CENTER */}
                    <div className="footer-item lg:text-center space-y-2">
                        <h2 className="lg:text-[2vw] text-4xl min-text-[22px] font-semibold tracking-tight">
                            Bhupendra Singh
                        </h2>
                        <p className="text-base text-black/70">
                            Made with ❤️ in India
                        </p>
                    </div>

                    {/* RIGHT */}
                    <div className="footer-item space-y-4 md:text-right">
                        <p className="text-lg font-medium">
                            You can find me here
                        </p>

                        <div className="flex md:justify-end gap-5 text-base text-black/70">
                            {SOCIAL_LINKS.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-black transition"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CONTACT LINE */}
                <div className="footer-item mt-16 pt-8 border-t border-black/10 flex flex-col md:flex-row gap-10 justify-between">

                    <div className="flex items-start gap-3 text-base">
                        <span className="font-medium text-black">
                            Email:
                        </span>
                        <div className="space-y-1 text-black/70">
                            <a
                                href="mailto:yuvibana03@gmail.com"
                                className="block hover:text-black transition"
                            >
                                yuvibana03@gmail.com
                            </a>
                            <a
                                href="mailto:bpsinghrajput03@gmail.com"
                                className="block hover:text-black transition"
                            >
                                bpsinghrajput03@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="text-base">
                        <span className="font-medium text-black">
                            Phone:
                        </span>{' '}
                        <a
                            href="tel:+918058109330"
                            className="text-black/70 hover:text-black transition"
                        >
                            +91-8058109330
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    )
}
