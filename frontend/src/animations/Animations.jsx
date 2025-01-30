import { gsap } from "gsap";

export const PreloaderAnimation = () => {
    const tl = gsap.timeline();
    tl.from('.PreloaderImage', {
        duration: 1,
        opacity: 0,
        rotate: 360,
        scale: 1.8,
        })
    tl.from('.PreloaderName', {
        x: -100,
        opacity: 0,
        ease: 'power4.out',
        duration: 1,
    })
    tl.to('.PreloaderParent', {
        duration: 1,
        delay: 0.5,
        y: "-100%",
        ease: 'power4.out',
    })


}