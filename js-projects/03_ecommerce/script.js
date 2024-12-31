document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 29.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    { id: 3, name: "Product 3", price: 59.99 },
  ];

  const cart = [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const emptyCartMessage = document.getElementById("empty-cart");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
    <span>${product.name} - $${product.price}</span>
    <button data-id=${product.id}>Add to Cart</button>
    `;

    productList.appendChild(div);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
    }
  });

  function addToCart(product) {
    cart.push(product);
    renderCart();
  }

  function renderCart() {
    cartItems.innerText = "";
    let totalPrice = 0;
    if (cart.length > 0) {
      emptyCartMessage.classList.add("hidden");
      cartTotal.classList.remove("hidden");
      cart.forEach((item) => {
        totalPrice += item.price;
        const cartItemDisplay = document.createElement("div");
        cartItemDisplay.innerHTML = `
        ${item.name} - $${item.price} <button data-id=${item.id}>remove</button>
        `;

        cartItems.addEventListener("click", (e) => {
          if (e.target.tagName === "BUTTON") {
            cartItems.remove(cart.filter((t) => t.id === item.id));
          }
        });

        cartItems.appendChild(cartItemDisplay);
      });

      totalPriceDisplay.innerText = `${totalPrice.toFixed(2)}`;
    } else {
      emptyCartMessage.classList.remove("hidden");
      totalPriceDisplay.innerText = "$0.00";
    }
  }

  checkoutBtn.addEventListener("click", () => {
    cart.length = 0;
    alert("Checkout sucefully");
    renderCart();
  });
});
