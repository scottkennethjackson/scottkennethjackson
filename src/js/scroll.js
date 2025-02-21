gsap.registerPlugin(ScrollTrigger);

let panels = gsap.utils.toArray(".panel");

panels.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "bottom bottom",
    pin: i !== panels.length - 1,
    pinSpacing: false,
  });
});
