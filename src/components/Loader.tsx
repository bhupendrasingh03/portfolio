"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader() {
    const loaderRef = useRef<HTMLDivElement>(null);
    const shapeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power2.inOut" },
        });

        // Curve fill from bottom → top
        tl.fromTo(
            shapeRef.current,
            { yPercent: 100 },
            { yPercent: -10, duration: 1.8 }
        );

        // Loader slides up and disappears
        tl.to(loaderRef.current, {
            yPercent: -100,
            duration: 1,
        });
        // tl.set(loaderRef.current, {
        //     display: "none",
        // });
    }, []);

    return (
        <div
            ref={loaderRef}
            className="fixed inset-0 bg-black z-[9999] overflow-hidden pointer-events-none"
        >
            <div
                ref={shapeRef}
                className="
          absolute bottom-0 left-1/2 -translate-x-1/2
          w-[120%] h-[120%]
          bg-[#e8e8e3]
          rounded-t-[100%]
        "
            />
          
        </div>
    );
}
