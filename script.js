// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true,
// });

// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy(".main", {
//   scrollTop(value) {
//     return arguments.length
//       ? locoScroll.scrollTo(value, 0, 0)
//       : locoScroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };
//   },
//   pinType: document.querySelector(".main").style.transform
//     ? "transform"
//     : "fixed",
// });

// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// ScrollTrigger.refresh();

// nav-overlay
const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".nav-overlay");
const closeBtn = document.querySelector(".close-btn");
const main = document.querySelector(".main");
const footer = document.querySelector("footer");
hamburger.addEventListener("click", () => {
  overlay.style.width = "100%";
  overlay.style.opacity = "1";
  // document.body.style.height = "90vh";
  // document.body.style.overflowY = "hidden";
  // main.style.height = "0";
  // footer.style.opacity = "0";
  gsap.from(".overlay-nav a", {
    x: 120,
    opacity: 0,
    stagger: 0.2,
    duration: 0.5,
    delay: 0.5,
  });
  gsap.from(".overlay-bottom ul li", {
    x: 120,
    opacity: 0,
    stagger: 0.2,
    duration: 0.5,
    delay: 0.5,
  });
});
closeBtn.addEventListener("click", () => {
  overlay.style.width = "0";
  overlay.style.width = "0";
  overlay.style.opacity = "0";
  // document.body.style.height = "100%";
  // document.body.style.overflowY = "";
  // main.style.height = "";
  // footer.style.opacity = "1";
});

// timeline
// const dayIndicator = document.getElementById("day-indicator");
// const cards = document.querySelectorAll(".idv-card");

// cards.forEach((card, index) => {
//   ScrollTrigger.create({
//     trigger: card,
//     start: "top center",
//     end: "bottom center",
//     onEnter: () => updateDayIndicator(index + 1),
//     onEnterBack: () => updateDayIndicator(index + 1),
//   });
// });

// function updateDayIndicator(day) {
//   dayIndicator.textContent = `DAY ${day}`;
// }

// gsap.to("#day-indicator", {
//   // transform: "translate(-50%, 0 )",
//   scrollTrigger: {
//     trigger: ".page3",
//     scroller: ".cards-container",
//     start: "top top",
//     end: "bottom bottom",
//     duration: 12,
//     // markers: true,
//     scrub: 2,
//     // pin: true,
//     pinSpacing: false,
//   },
// });


document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navOverlay = document.querySelector('.nav-overlay');
  const closeBtn = document.querySelector('.close-btn');
  
  hamburger.addEventListener('click', function () {
    navOverlay.style.width = '100%';  // Expand the overlay
    navOverlay.style.opacity = '1';   // Make the overlay visible
    document.body.classList.add('no-scroll'); // Prevent body scrolling
  });

  closeBtn.addEventListener('click', function () {
    navOverlay.style.width = '0';      // Collapse the overlay
    navOverlay.style.opacity = '0';    // Hide the overlay
    document.body.classList.remove('no-scroll'); // Allow body scrolling
  });
});

// Events Section
const div3Elements = document.querySelectorAll(".events .div-3");

div3Elements.forEach((div3) => {
  const ellipse = div3.querySelector(".ellipse");

  // Set the position of the ellipse to be at the bottom center
  ellipse.style.top = 'calc(100% - 48.5px)'; // Adjust the position to be at the bottom
  ellipse.style.left = 'calc(50% - 245px)'; // Center horizontally

  div3.addEventListener("mouseenter", () => {
    ellipse.style.opacity = "1";
  });

  div3.addEventListener("mouseleave", () => {
    ellipse.style.opacity = "0";
  });
});


// Page 6 Js
document.addEventListener("DOMContentLoaded", () => {
  const faqs = document.querySelectorAll(".faq");

  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      const isActive = faq.classList.contains("active");

      // Close all FAQs
      faqs.forEach((f) => {
        f.classList.remove("active");
      });

      // If clicked FAQ wasn't already active, open it
      if (!isActive) {
        faq.classList.add("active");
      }
    });
  });
});

//footer
// gsap.from(".footer-top", {
//   y: "200%",
//   opacity: 0,
//   stagger: 0.3,
//   duration: 3,
//   scrollTrigger: {
//     trigger: ".page7",
//     scroller: ".main",
//     start: "top 50%",
//     end: "top 5%",
//     markers: false,
//     scrub: 2,
//   },
// });

// gsap.from(".footer-bottom", {
//   y: "200%",
//   opacity: 0,
//   stagger: 0.3,
//   duration: 3,
//   scrollTrigger: {
//     trigger: ".page7",
//     scroller: ".main",
//     start: "top 100%",
//     end: "top 5%",
//     markers: false,
//     scrub: 2,
//   },
// });

// gsap.from(".footer-bottom h1 span", {
//   y: -120,
//   opacity: 0,
//   stagger: 0.3,
//   duration: 2,
//   scrollTrigger: {
//     trigger: ".page7",
//     scroller: ".main",
//     start: "top 30%",
//     end: "top 0%",
//     markers: false,
//     scrub: 2,
//   },
//   delay: 2,
// });

document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute("href"));
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  });
});

const tlPage = document.querySelector(".page3");
document.getElementById("getStarted").addEventListener("click", () => {
  window.scrollTo({
    top: tlPage.offsetTop,
    behavior: "smooth",
  });
});

// oss website redirection
document.getElementById("oss").addEventListener("click", () => {
  window.open("https://aitoss.club/", "_blank");
});

