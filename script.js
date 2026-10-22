gsap.registerPlugin(MotionPathPlugin, ScrollToPlugin, ScrollTrigger);

gsap.set("#bf-1", { x: "-60vw", y: "-60vh", opacity: 0 });
gsap.set("#bf-2", { x: "60vw", y: "-60vh", opacity: 0 });

const t1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "+=3000",
    scrub: 1,
    pin: true,
  },
});

t1.to(
  ".bunga-kiri",
  {
    x: "-55vw",
    rotate: -6,
  },
  0,
);

t1.to(
  ".bunga-kanan",
  {
    x: "55vw",
    rotate: 6,
  },
  0,
);

t1.to(
  "#bf-1",
  {
    x: 100,
    y: -100,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out",
  },
  1.05,
);

t1.to(
  "#bf-2",
  {
    x: -100,
    y: 50,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out",
  },
  1.05,
);

t1.to(
  ".hero-tittle",
  {
    opacity: 0.2,
  },
  1.3,
);

const cards = gsap.utils.toArray(".flower");

cards.forEach((card, i) => {
  t1.fromTo(
    card,
    {
      opacity: 0,
      scale: 0.6,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power1.out",
      motionPath: {
        path: ".curve-path",
        align: ".curve-path",
        alignOrigin: [0.5, 0.5],
        start: 0,
        end: 0.2 + i * 0.15,
      },
    },
    0.1 + i * 0.2,
  );
});

t1.to(
  "#contain",
  {
    opacity: 1,
    duration: 1,
    ease: "power2.out",
  },
  4.0,
);

t1.to(
  "#bf-1",
  {
    x: "400",
    scale: 1.2,
    duration: 1,
    rotation: "-20deg",
    ease: "power2.out",
  },
  4.5,
);

t1.to(
  "#bf-2",
  {
    x: "200",
    scale: 1.2,
    duration: 1,
    rotation: "-20deg",
    ease: "power2.out",
  },
  4.5,
);

t1.to(
  "#Gift",
  {
    opacity: 1,
    duration: 1,
    ease: "power2.out",
  },
  4.0,
);

t1.to(
  "#bf-1",
  {
    x: "400",
    scale: 1.2,
    duration: 1,
    rotation: "-20deg",
    ease: "power2.out",
  },
  4.5,
);

t1.to(
  "#bf-2",
  {
    x: "200",
    scale: 1.2,
    duration: 1,
    rotation: "-20deg",
    ease: "power2.out",
  },
  4.5,
);

const flyToGift = gsap.timeline({
  scrollTrigger: {
    trigger: "#gift",
    start: "top bottom",
    end: "top 20%",
    scrub: 1,
  },
});

flyToGift.to(
  "#bf-1",
  {
    keyframes: [
      { x: 480, y: -60, rotation: -30 },
      { x: 560, y: -170, rotation: -10 },
      { x: 620, y: -260, rotation: -35 },
    ],
    scale: 1.1,
    ease: "none",
  },
  0,
);

flyToGift.to(
  "#bf-2",
  {
    keyframes: [
      { x: 260, y: 20, rotation: -25 },
      { x: 330, y: -90, rotation: -5 },
      { x: 380, y: -190, rotation: -30 },
    ],
    scale: 1.1,
    ease: "none",
  },
  0,
);

const flyOut = gsap.timeline({
  scrollTrigger: {
    trigger: "#rsvp",
    start: "top bottom",
    end: "top 30%",
    scrub: 1,
  },
});

flyOut.to(
  "#bf-1",
  {
    x: "70vw",
    y: "-70vh",
    rotation: 25,
    opacity: 0,
    scale: 0.8,
    ease: "power1.in",
  },
  0,
);

flyOut.to(
  "#bf-2",
  {
    x: "-70vw",
    y: "-70vh",
    rotation: -25,
    opacity: 0,
    scale: 0.8,
    ease: "power1.in",
  },
  0,
);

const bgm = document.getElementById("bgm");

bgm.volume = 2;

window.addEventListener("load", () => {
  bgm.play().catch((error) => {
    console.log("Autoplay diblokir browser:", error);
  });
});
