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

// Get Products and Footer in the header
const productsLink = document.querySelector(".nav-links li:nth-child(2) a");
const contactLink = document.querySelector(".nav-links li:nth-child(3) a");

// Get the section
const productsSection = document.querySelector(".product-showcase");
const footerSection = document.querySelector("footer");

//click the Products link
productsLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default link behavior

  // Scroll to the products section
  productsSection.scrollIntoView({
    behavior: "smooth",
  });
});

//click the Contact link
contactLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default link behavior

  // Scroll to the footer section
  footerSection.scrollIntoView({
    behavior: "smooth",
  });
});
