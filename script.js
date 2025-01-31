const heroImage = document.getElementById("hero-image");
const dishes = document.querySelectorAll(".dish");
const cartCount = document.querySelector(".cart-count");
const addToCart = document.querySelectorAll(".add-to-cart");
const hamBurgerBtn = document.getElementById("hamburger");
const navBar = document.getElementById("nav");

let cart = [];

console.log(heroImage);

//start spininganimation

window.addEventListener("load", () => {
  heroImage.classList.add("spin");
});

dishes.forEach((dish) => {
  dish.addEventListener("click", () => {
    const newImagesrc = dish.getAttribute("data-img");

    heroImage.classList.remove("spin");

    heroImage.src = newImagesrc;

    void heroImage.offsetWidth;

    heroImage.classList.add("spin");
  });
});

/// add to cart function

addToCart.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();

    const name = button.getAttribute("data-name");
    const price = parseFloat(button.getAttribute("data-price"));

    cart.push({ name, price });
    updateCartCount();
  });
});

function updateCartCount() {
  cartCount.textContent = cart.length;
}

hamBurgerBtn.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
