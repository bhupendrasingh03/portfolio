import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

let isRegistered = false;

export const registerGSAP = () => {
    if (typeof window === "undefined") return;
    if (isRegistered) return;

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    isRegistered = true;
};

export { gsap, ScrollTrigger, ScrollSmoother };
