"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollSmoother, registerGSAP } from "../lib/gsap";

type Props = {
    children: React.ReactNode;
};

export default function SmoothScroller({ children }: Props) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        registerGSAP();

        if (!wrapperRef.current || !contentRef.current) return;

        const ctx = gsap.context(() => {
            ScrollSmoother.create({
                wrapper: wrapperRef.current!,
                content: contentRef.current!,
                smooth: 2.2,
                effects: true,
                normalizeScroll: true,
                ignoreMobileResize: true,
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div id="smooth-wrapper" ref={wrapperRef}>
            <div id="smooth-content" ref={contentRef}>
                {children}
            </div>
        </div>
    );
}
