document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconMenu = document.getElementById("icon-menu");
  const iconClose = document.getElementById("icon-close");

  menuBtn.addEventListener("click", function () {
    const isOpen = mobileMenu.classList.contains("scale-x-100");

    if (isOpen) {
      mobileMenu.classList.remove("scale-x-100");
      mobileMenu.classList.add("scale-x-0");
    } else {
      mobileMenu.classList.remove("scale-x-0");
      mobileMenu.classList.add("scale-x-100");
    }

    iconMenu.classList.toggle("hidden");
    iconClose.classList.toggle("hidden");
  });

  iconClose.addEventListener("click", function () {
    mobileMenu.classList.remove("scale-x-100");
    mobileMenu.classList.add("scale-x-0");
    iconMenu.classList.remove("hidden");
    iconClose.classList.add("hidden");
  });

  window.addEventListener("resize", function () {
    if (
      window.innerWidth > 768 &&
      mobileMenu.classList.contains("scale-x-100")
    ) {
      mobileMenu.classList.remove("scale-x-100");
      mobileMenu.classList.add("scale-x-0");
      iconMenu.classList.remove("hidden");
      iconClose.classList.add("hidden");
    }
  });
});

window.addEventListener("load", () => {
  document.getElementById("page-overlay").classList.add("animate-curtainUp");
});

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconMenu = document.getElementById("icon-menu");
  const iconClose = document.getElementById("icon-close");

  menuBtn.addEventListener("click", function () {
    const isOpen = mobileMenu.classList.contains("scale-x-100");

    if (isOpen) {
      mobileMenu.classList.remove("scale-x-100");
      mobileMenu.classList.add("scale-x-0");
    } else {
      mobileMenu.classList.remove("scale-x-0");
      mobileMenu.classList.add("scale-x-100");
    }

    iconMenu.classList.toggle("hidden");
    iconClose.classList.toggle("hidden");
  });

  iconClose.addEventListener("click", function () {
    mobileMenu.classList.remove("scale-x-100");
    mobileMenu.classList.add("scale-x-0");
    iconMenu.classList.remove("hidden");
    iconClose.classList.add("hidden");
  });

  window.addEventListener("resize", function () {
    if (
      window.innerWidth > 768 &&
      mobileMenu.classList.contains("scale-x-100")
    ) {
      mobileMenu.classList.remove("scale-x-100");
      mobileMenu.classList.add("scale-x-0");
      iconMenu.classList.remove("hidden");
      iconClose.classList.add("hidden");
    }
  });
});

window.addEventListener("load", () => {
  document.getElementById("page-overlay").classList.add("animate-curtainUp");
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".section").forEach((section) => {
    const overlay = section.querySelector(".overlay");
    const content = section.querySelector(".section > *:not(.overlay)");

    if (content) {
      gsap.to(content, {
        scale: 0.7,
        scrollTrigger: {
          trigger: section,
          start: "20% ",
          end: "bottom ",
          scrub: true,
        },
      });
    }

    if (overlay) {
      gsap.set(overlay, {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0,
      });

      gsap.fromTo(
        overlay,
        { opacity: 0 },
        {
          opacity: 0.5,
          scrollTrigger: {
            trigger: section,
            start: "20%",
            end: "bottom",
            scrub: true,
          },
        }
      );
    }
  });
});
