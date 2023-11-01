            document.addEventListener("DOMContentLoaded", function() {
            const cart = document.querySelector(".cart-container"); //cambien en el html cart por cart0
            const itemCounter = document.querySelector(".item-count");
            const buyButtons = document.querySelectorAll(".buy-button");

            let cartItems = [];
            let cartTotal = 0;

            function updateCartCount() {
                itemCounter.innerText = cartItems.length;
            }

            function updateCartItems() {
                const cartItemsContainer = document.querySelector(".cart-items");
                cartItemsContainer.innerHTML = ""; // Limpia los elementos existentes en el carrito
            
                cartItems.forEach(function(item) {
                    const cartItem = document.createElement("div");
                    cartItem.classList.add("cart-item");
                    cartItem.innerHTML = `<span>${item.name}</span><span>$${item.price.toFixed(2)}</span>`;
                    cartItemsContainer.appendChild(cartItem);
                });
            }
            
            function updateCartTotal() {
                cartTotal = cartItems.reduce((total, item) => total + item.price, 0);
                const cartTotalElement = document.querySelector("#cart-total");
                cartTotalElement.innerText = `${cartTotal.toFixed(2)}`;
            }

            function addToCart(name, price) {
                cartItems.push({ name, price });
                updateCartCount();
                updateCartItems();
                updateCartTotal();
            }

            buyButtons.forEach(function(button) {
                button.addEventListener("click", function() {
                    const name = button.getAttribute("data-name");
                    const price = parseFloat(button.getAttribute("data-price"));
                    addToCart(name, price);
                });
            });

        });
        function openCart() {
            const cart = document.querySelector(".cart-container");
            cart.style.transform = "translateX(0)";
        }
        
        function closeCart() {
            const cart = document.querySelector(".cart-container");
            cart.style.transform = "translateX(100%)";
        }