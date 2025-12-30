"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { GoArrowDownRight } from "react-icons/go";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: "power4.out", duration: 1 },
            });

            tl.from(".hero-name span", {
                yPercent: 120,
                rotate: 3,
                opacity: 0,
                stagger: 0.12,
            });

            tl.from(
                ".hero-arrow",
                {
                    scale: 0,
                    rotate: -45,
                    opacity: 0,
                    duration: 0.6,
                },
                "-=0.4"
            );

            tl.from(
                ".hero-desc span",
                {
                    y: 40,
                    opacity: 0,
                    stagger: 0.02,
                    ease: "power3.out",
                },
                "-=0.6"
            );


            tl.to(
                ".hero-img",
                {
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    duration: 1.2,
                    ease: "power4.out",
                },
                "-=0.6"
            );

            tl.from(
                ".right p span",
                {
                    y: 30,
                    opacity: 0,
                    stagger: 0.02,
                    ease: "power3.out",
                },
                "-=0.8"
            );

            // 6️⃣ Year
            tl.from(
                ".hero-year",
                {
                    y: 80,
                    opacity: 0,
                    skewY: 4,
                },
                "-=0.8"
            );

            // 7️⃣ Button pop
            tl.from(
                ".hero-btn",
                {
                    y: 30,
                    opacity: 0,
                    scale: 0.9,
                },
                "-=0.8"
            );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="min-h-screen hero bg-[#e8e8e3] relative z-10 overflow-hidden lg:py-0 py-10 "
        >
            <div className="app-wrapper">
                {/* NAME */}
                <h1 className="hero-name lg:text-[9.5vw] text-[8.6vw] tracking-wide uppercase font-bold mb-6 flex justify-between gap-4 overflow-hidden">
                    {["Bhupendra", "Singh"].map((name, index) => (
                        <span key={index} className="inline-block">
                            {name}
                        </span>
                    ))}
                </h1>

                <div className="flex-div flex justify-between flex-wrap items-stretch">
                    {/* LEFT */}
                    <div className="leftside lg:w-[33%]">
                        <GoArrowDownRight className="hero-arrow lg:text-5xl text-3xl text-gray-600/50" />

                        <p className="hero-desc text-2xl text-gray-600 lg:py-12 py-6 leading-8">
                            {"Open to job opportunities worldwide. Passionate about building polished, intuitive, and thoughtful digital experiences that leave a mark."
                                .split(" ")
                                .map((word, index) => (
                                    <span key={index} className="inline-block">
                                        {word}&nbsp;
                                    </span>
                                ))}
                        </p>

                        <a
                            href="mailto:bpsinghrajput03@gmail.com"
                            className="hero-btn app-btn relative inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-medium overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                CONTACT
                                <span className="text-lg">
                                    <MdOutlineArrowOutward />
                                </span>
                            </span>
                        </a>
                    </div>

                    {/* CENTER */}
                    <div className="centerd lg:w-[30%] lg:pr-16 overflow-hidden lg:pt-0 pt-12">
                        <Image
                            height={400}
                            width={400}
                            src="/assets/images/mypic.png"
                            alt="Profile Image"
                            className="hero-img h-full lg:w-[80%] object-cover object-top rounded-md"
                            style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
                            priority
                        />
                    </div>

                    {/* RIGHT */}
                    <div className="right lg:w-[20%] w-full flex text-end justify-end lg:pt-0 pt-10">
                        <div className="flex flex-col justify-end text-right items-end">
                            <p className="text-gray-600 text-lg">
                                {"Available for work!"
                                    .split(" ")
                                    .map((word, index) => (
                                        <span key={index}>{word} </span>
                                    ))}
                            </p>
                            <h3 className="hero-year text-[7.5vw] tracking-wide uppercase font-bold">
                                2026
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
