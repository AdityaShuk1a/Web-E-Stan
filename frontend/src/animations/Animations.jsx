import { gsap } from "gsap";

export const PreloaderAnimation = () => {
    gsap.from('.StarOne', {
        duration: 1,
        ease: 'sine.inOut',
        scale: 1.5,
        
        transform: "translateX(-30%) translateY(40%)",
        repeat: -1,
        yoyo: true,
        rotate: 230,
    })
    gsap.from('.StarTwo', {
        duration: 1,
        scale: 2.1,
        ease: 'sine.inOut',
        transform: "translateX(60%) translateY(-40%)",
        repeat: -1,
        yoyo: true,
        rotate: 230,
    })
    gsap.from('.StarThree', {
        duration: 1,
        scale: 1.2,
        ease: 'sine.inOut',
        transform: "translateX(70%) translateY(-50%)",
        repeat: -1,
        yoyo: true,
        rotate: 230,
    })
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
        ease: 'sine.in',
    })
    
    tl.fromTo('.LogoContainer', {
        opacity: 0,
        y: -30,
    }, {
        duration: 1,
        y: 0,
        opacity: 1,
        rotate: 360,
        ease : "sine.inOut"
    })
    tl.from('.BtnsContainer', {
        duration: 1,
        opacity: 0,
        y: "-100%",
        ease: 'sine.inOut',
    })
    tl.from('.NavbarLine', {
        duration: 1,
        opacity: 0,
        x: "-100%",
        ease: 'sine.inOut',
    }, "-=1")
}


