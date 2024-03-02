const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});

// search products
function searchProducts() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const productCards = document.querySelectorAll(".product");

  productCards.forEach((card) => {
    const productName = card.querySelector("h3").innerText.toLowerCase();
    if (productName.includes(searchInput)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Get references to elements
const toggleSliderButton = document.getElementById("toggleSliderButton");
const slider = document.querySelector(".slider");

// Event listener for the toggle slider button
toggleSliderButton.addEventListener("click", function () {
  // Toggle between 'horizontal' and 'vertical' classes on the slider
  slider.classList.toggle("vertical");
});
