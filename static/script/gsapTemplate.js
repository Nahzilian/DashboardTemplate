/**
 * Few side notes:
 * Some common special props
 * 
 * delay: number => delay before starting the animation
 * onComplete : callback
 * onUpdate: callback => update on every animation updates/renders
 * ease: ???
 * stagger: starting time for each target
 * 
*/

const gsapTo = () => {
    // Define destination value of the code
    // Meaning: declare how it ends, start from init position (no styling state)
    gsap.to("#gsap-to",
        {
            duration: 2,
            x: 300
        });
    gsap.to("#gsap-to",
        {
            duration: 3,
            rotation: 360,
            scale: 0.5
        });
}

const gsapFrom = () => {
    // Define where the animation should end up
    // Meaning: declare ending position (with styling applied), return to init (with no styling applied)
    gsap.from("#gsap-from",
        {
            diratopm: 1,
            x: 200,
            opaciy: 0
        })
}

const gsapFromTo = () => {
    // Define both starting point and ending point
    // Applied both gsap from and gsap To
    gsap.fromTo("#gsap-from-to",
        {
            width: 0,
            height: 0
        },
        {
            duration: 1.5,
            width: 100,
            height: 200
        })
}


const gsapSet = () => {
    // Instantly set styling, similar to CSS
    gsap.set("#gsap-set",
        {
            backgroundColor: "green",
            width: 400
        })
}

const gsapsEaseDefault = () => {
    // Ease in out ...
    gsap.to("#gsap-ease",
        {
            duration: 1,
            x: 300,
            ease: "power1"
        }
    )
}


const gsapStagger = () => {
    // Add a transition between chains of animations
    gsap.from(".small-box", {
        duration: 2,
        scale: 0.5,
        opacity: 0,
        delay: 0.5,
        stagger: 0.2,
        ease: "elastic",
        force3D: true,
        backgroundColor: "blue"
    });

    document.querySelectorAll(".small-box").forEach(function (box) {
        box.addEventListener("click", function () {
            gsap.to(".small-box", {
                duration: 0.5,
                opacity: 0,
                y: -100,
                stagger: 0.1,
                ease: "back.in"
            });
        });
    });
}

let tween = gsap.to("#tween-controller",
    {
        duration: 20,
        x: 1000
    })

const pause = () => tween.pause();

const resume = () => tween.resume();

const reverse = () => tween.reverse();

const seek = () => tween.seek(0.5);

const progress = () => tween.progress(0.5);

const speedDown = () => tween.timeScale(0.5);

const speedUp = () => tween.timeScale(2);

const restart = () => tween.restart();


const timelineTween = () => {
    var tl = gsap.timeline()

    tl.add(gsap.to)

}