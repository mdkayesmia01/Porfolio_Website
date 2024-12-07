// Typewriter Effect for Role
const roles = ["Frontend Developer", "UI/UX Designer", "Web Developer"];
let roleIndex = 0;
let charIndex = 0;
const roleElement = document.querySelector(".role");

function typeWriter() {
  if (charIndex < roles[roleIndex].length) {
    roleElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 150);
  } else {
    setTimeout(eraseWriter, 1500);
  }
}

function eraseWriter() {
  if (charIndex > 0) {
    roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseWriter, 100);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeWriter, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeWriter();
});

// Scroll Animation
const introSection = document.querySelector(".intro");
const circleImage = document.querySelector(".circle-image");

function handleScroll() {
  const introPosition = introSection.getBoundingClientRect().top;
  const circlePosition = circleImage.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (introPosition < windowHeight - 50) {
    introSection.classList.add("animate");
  }

  if (circlePosition < windowHeight - 50) {
    circleImage.classList.add("animate");
  }
}

window.addEventListener("scroll", handleScroll);