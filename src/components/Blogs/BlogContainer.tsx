'use client'
import React, { useRef, useLayoutEffect } from "react";
import { blogsList } from "./Blog";
import BlogCard from "./BlogCard";
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const BlogContainer = () => {
    const headerRef = useRef(null);
    const cardsRef = useRef(null);

    useLayoutEffect(() => {
        if (!headerRef.current || !cardsRef.current) return;

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 1024px)", () => {
                ScrollTrigger.create({
                    trigger: cardsRef.current,
                    start: "top top+=100",
                    end: "bottom bottom",
                    pin: headerRef.current,
                    scrub: false,
                });
            });

        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="blog-container bg-black text-white border-t border-gray-50/20">
            <div className="app-wrapper">
                <div className="lg:flex">
                    {/* HEADER */}
                    <div className="lg:w-[30%] lg:py-20 py-10 lg:border-r border-gray-50/20">
                        <div ref={headerRef}>
                            <h1 className="lg:text-[7vw] text-[35px] heading-projects uppercase font-extrabold tracking-tight overflow-hidden">
                                Blogs
                                <span className="text-white/30">.</span>
                            </h1>
                            <p className='lg:text-[18px] text-xl text-white/60'>Thoughts, experiments, and deep dives into JavaScript, performance,
                                and modern web development.</p>
                        </div>
                    </div>
                    <div className="lg:w-[66%] lg:pl-15 lg:py-20 lg:flex justify-between flex-wrap gap-x-[5%] gap-y-12" ref={cardsRef}>
                        {blogsList.map((data) => <div key={data.heading} className="w-full" >
                            <BlogCard blog={data} />
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogContainer;