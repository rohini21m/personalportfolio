const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".bigBro", {
  y: "5%",
  duration: 1.5,
  delay: 0.2,
  stagger: 0.25,
});
tl.to(".hide", {
  x: "180%",
  duration: 1.5,
  delay: 0.5,
  stagger: 0.25,
});

function portofolio() {
  const arrows = document.querySelectorAll(".fa-arrow-down");

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const input = arrow.previousElementSibling; // this gives us Name input info

      const parent = arrow.parentElement; //this gives us email input info

      const NextInput = parent.nextElementSibling; //this gives us thanku input info

      if (input.type === "text" && validateUser(input)) {
        nextSlide(parent, NextInput);
      } else if (input.type === "email" && validateEmail(input)) {
        nextSlide(parent, NextInput);
      } else {
        parent.style.animation = "shake 0.5s ease";
      }

      // to remove shake animation
      parent.addEventListener("animationEnd", () => {
        parent.style.animation = "";
      });
    });
  });
}

function validateUser(user) {
  if (user.value.length < 5) {
    console.log("not enough characters");
    error("rgb(189,77,77)");
    msg();
  } else {
    error("rgb(156,89,12)");
    return true;
  }
}
function validateEmail(email) {
  const validation = /^[^s@]+@[^s@]+.[^s@] +$/;
  if (validation.test(email.value)) {
    error("rgb(167,89,12)");
    return true;
  } else {
    console.log("not a valid email");
    error("rgb(133,67,97)");
    msg();
  }
}
function nextSlide(parent, NextInput) {
  parent.classList.add("innactive");
  parent.classList.remove("innactive");
  NextInput.classList.add("active");
}

function error(color) {
  document.getElementById("contact").style.backgroundColor = color;
}
function msg() {
  document.getElementById("Msg").innerText = "Oops invalid info !!";
}

portofolio();

const p1 = document.getElementById("P1");
const p0 = document.getElementById("P0");
const p2 = document.getElementById("P2");
const p3 = document.getElementById("P3");
const p4 = document.getElementById("P4");
const p5 = document.getElementById("P5");
const p6 = document.getElementById("P6");
const p7 = document.getElementById("P7");

p1.addEventListener("click", () => {
  location.href = "https://rohini21m.github.io/burgers/";
});
p0.addEventListener("click", () => {
  location.href = "https://rohini21m.github.io/Recipe-App/";
});

p2.addEventListener("click", () => {
  location.href = "https://rohini21m.github.io/sigma/";
});

p3.addEventListener("click", () => {
  location.href = "https://rohini21m.github.io/E-councelling/";
});

p4.addEventListener("click", () => {
  location.href = "https://rohini21m.github.io/shopify/";
});

p5.addEventListener("click", () => {
  location.href = "https://rohini21m.github.io/minimalism-article/";
});

p6.addEventListener("click", () => {
  location.href = "https://rohini21m.github.io/animations/";
});
p7.addEventListener("click", () => {
  location.href = "https://rohini21m.github.io/TODO-ANIMATION/";
});
