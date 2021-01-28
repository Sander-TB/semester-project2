const slides = document.querySelectorAll(".hero__slide");
const next = document.querySelector("#next") as Element;
const prev = document.querySelector("#prev") as Element;
const auto = false as boolean;
const intervalTime = 5000 as number;
let slideInterval : number;

const nextSlide = () => {
  //Get current class
  const current = document.querySelector(".current") as Element;
  //Remove current class
  current.classList.remove("current");
  //Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    // Add current to start
    slides[0].classList.add("current");
  }

  setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
  //Get current class
  const current = document.querySelector(".current") as Element;
  //Remove current class
  current.classList.remove("current");
  //Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add("current");
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

// Button events
next.addEventListener("click", (e) => {
  nextSlide();

  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener("click", (e) => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide

if (auto) {
  //Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}
