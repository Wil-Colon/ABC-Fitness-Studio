//Gallery cart
const cart = document.querySelector(".cart");
const cartBtn = document.querySelectorAll("#products button");
const quantity = document.getElementById("counter");
const modal = document.querySelector(".cart-modal-closed");
const listElement = document.querySelector(".cart-modal-items");
const clearCart = document.getElementById("clear-cart");
const processCart = document.getElementById("process-cart");
let cartItems = [];
let counter = 0;

cartBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const listItem = document.createElement("li");
    let itemName = btn.parentElement.children[1].innerHTML;
    alert(itemName + " added to cart!");
    counter++;
    quantity.innerHTML = counter; //adjust the counter count
    cartItems.push(itemName); //add the item to cart array
    listItem.textContent = itemName;
    listElement.appendChild(listItem);
  });
});

cart.addEventListener("click", () => {
  modal.classList.toggle("cart-modal-open");
});

clearCart.addEventListener("click", () => {
  if (cartItems.length > 0) {
    alert("Cart Cleared");
    cartItems = [];
    counter = 0;
    quantity.innerHTML = counter;
    listElement.replaceChildren();
  } else {
    alert("No items to clear.");
  }
});

processCart.addEventListener("click", () => {
  if (cartItems.length > 0) {
    alert("Thank you for your order!");
    cartItems = [];
    counter = 0;
    quantity.innerHTML = counter;
    listElement.replaceChildren();
  } else {
    alert("Cart is empty.");
  }
});
