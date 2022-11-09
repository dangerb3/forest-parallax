window.addEventListener("scroll", (e) => {
  document.body.style.cssText += `--scrollTop: ${this.scrollY}px`; /* нужен именно += чтобы добавлять стили к имеющимся, а не заменять их */
});
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
});
// not working
