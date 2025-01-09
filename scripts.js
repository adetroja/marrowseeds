// Add interactivity if needed
document.querySelector(".cta-button").addEventListener("click", () => {
  alert("Learn more about maximising your seed potential!");
});

var flkty = new Flickity(".carousel-hero-3", {
  cellAlign: "left",
  contain: true,
});

// Handle text button navigation
document.querySelectorAll(".button").forEach((button, index) => {
  button.addEventListener("click", () => {
    flkty.select(index);
  });
});
