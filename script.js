gsap.fromTo(
  ".hero-title",
  { opacity: 0, y: -20 },
  { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
);

gsap.fromTo(
  ".hero-subtitle",
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power2.out" }
);

gsap.fromTo(
  ".hero-button",
  { opacity: 0, scale: 0.8 },
  { opacity: 1, scale: 1, duration: 1, delay: 0.6, ease: "power2.out" }
);

const mouseEffect = document.querySelector(".mouse-effect");
document.addEventListener("mousemove", (e) => {
  const { clientX: x, clientY: y } = e;
  mouseEffect.style.transform = `translate(${x - window.innerWidth / 2}px, ${
    y - window.innerHeight / 2
  }px)`;
});

const getStartedButton = document.getElementById("get-started");
const heroSubtitle = document.querySelector(".hero-subtitle");

getStartedButton.addEventListener("click", (e) => {
  e.preventDefault();

  const tl = gsap.timeline();

  tl.to(heroSubtitle, { opacity: 0, y: -20, duration: 0.5 })

    .add(() => {
      heroSubtitle.textContent = "Thank you for joining us!";
    })

    .to(heroSubtitle, { opacity: 1, y: 0, duration: 0.5 });
});
