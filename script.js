let cursor = document.querySelector("#cursor");
let cursorBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", (pos) => {
  gsap.to("#cursor", {
    x: pos.x - 10,
    y: pos.y - 10,
    duration: 0.5,
  });
  gsap.to("#cursor-blur", {
    x: pos.x - 250,
    y: pos.y - 250,
    duration: 0.5,
  });
});
gsap.to("#nav", {
  backgroundColor: "black",
  height: "110px",
  duration: 1,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    scrub: 1,
    start: "top -10%",
    end: "top -11%",
  },
});
gsap.to("#main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -50%",
    end: "top -100%",
    scrub: 2,
  },
});

gsap.from("#about-us", {
  y: 150,
  // stagger:5,
  // x: 100,
  scrollTrigger: {
    trigger: "#about-us",
    scroll: "body",
    start: "top 80%",
    end: "bottom 40%",
    scrub: 2,
    // markers: true,
  },
});
gsap.from("#card-container", {
  y: 100,
  x: 500,
  opacity: 0,
  scrollTrigger: {
    trigger: "#card-container",
    scroller: "body",
    start: "top 80%",
    end: "50% 50%",
    scrub: 2,
    // markers:  true,
  },
});
let colonTL = gsap.timeline();

colonTL.from("#colon-left", {
  y: -100,
  x: -50,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    start: "20% 80%",
    end: "40% 40%",
    scrub: 2,
  },
});
colonTL.from("#colon-right", {
  y: 80,
  x: 50,
  opacity: 0,

  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    start: "20% 80%",
    end: "40% 40%",
    scrub: 2,
  },
});
if(screen.width> 1200){

  gsap.from("#page4>h2",{
    x: 70,
    opacity: 0,
    scrollTrigger: {
      trigger:"#page4",
      scroller:"body",
      start: "top 80%",
      end: 'center 50%',
      scrub: 2,
    }
  })
  gsap.from('#page4 .card-container', {
    x:-70,
    opacity:0,
    scrollTrigger: {
      trigger:"#page4",
      scroller:'body',
      start:'top 80%',
      end:'center 60%',
      scrub:2,
    }
  })
}
