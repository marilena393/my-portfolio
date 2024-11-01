
let modal = document.querySelector(".modal");
let modalImg = document.querySelector(".modalImage");
let images = document.querySelectorAll(".Img");
let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    currentIndex = index;
  });
});

document.querySelector(".close").addEventListener("click", () => {
  modal.style.display = "none";
});

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex].src;
});

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
});


let backToTopButton = document.createElement("button");
backToTopButton.innerText = "⬆️";
backToTopButton.classList.add("back-to-top");
document.body.appendChild(backToTopButton);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

let themeToggleButton = document.createElement("button");
themeToggleButton.innerText = "🌙";
themeToggleButton.classList.add("theme-toggle");
document.body.appendChild(themeToggleButton);

themeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeToggleButton.innerText = document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
});

