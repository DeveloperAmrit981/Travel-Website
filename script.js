gsap.to("#nav", {
    backgroundColor: "#000",
    height: "5rem",
    duration:1,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -20%",
        scrub: 1
    }
});

gsap.to("#main",{
    backgroundColor: "#000",
    duration:1,
    scrollTrigger: {
        trigger: "#main",
        scroller : "body",
        start: "top -30%",
        end: "top -100vh",
        scrub: 4,
    }
})