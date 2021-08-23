const testClick = () => {
    console.log("OK")
}

const menuAnimation = (reverse = false) => {
    var tl = gsap.timeline();
    if (!reverse) {

        tl.to(".menu-icon", { duration: 0.3, width: 0, stagger: 0.1 })
            .fromTo("#sidebar", { duration: 0.2, width: 0 }, { width: "25vw" })
            .fromTo(".menu-icon-cross", { left: -40, display: "block" }, { left: 0 })
    } else {
        tl.to(".menu-icon-cross", { left: -40 })
            .fromTo("#sidebar", { duration: 0.2, width: "25vw" }, { width: 0 })
            .fromTo("#top-line", { duration: 0.01, width: 0 }, { width: 20 })
            .fromTo("#center-line", { duration: 0.01, width: 0 }, { width: 30 })
            .fromTo("#bottom-line", { duration: 0.01, width: 0 }, { width: 40 })
    }
}

const initAnimation = () => {
    gsap.fromTo("#banner", 1.5, { backgroundSize: "contain", height: "100vh" }, { backgroundSize: "cover", height: "50vh" })
}

initAnimation()