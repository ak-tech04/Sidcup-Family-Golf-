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
