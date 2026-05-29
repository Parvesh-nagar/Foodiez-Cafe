// let cart = [];

// let total = 0;

// function addToCart(item, price){

//     cart.push({item, price});

//     total += price;

//     updateCart();

// }

// function updateCart(){

//     const cartItems =
//     document.getElementById("cart-items");

//     cartItems.innerHTML = "";

//     cart.forEach(product => {

//         const li =
//         document.createElement("li");

//         li.innerHTML =
//         `${product.item} - ₹${product.price}`;

//         cartItems.appendChild(li);

//     });

//     document.getElementById("total")
//     .innerText = total;

//     document.getElementById("cart-count")
//     .innerText = cart.length;

// }

// function placeOrder(){

//     if(cart.length === 0){

//         alert("Cart is empty!");

//         return;

//     }

//     let message =
//     "Hello Foodiez Caffee,%0A%0AI want to order:%0A";

//     cart.forEach(product => {

//         message +=
//         `- ${product.item} ₹${product.price}%0A`;

//     });

//     message +=
//     `%0ATotal = ₹${total}`;

//     window.open(
//         `https://wa.me/918059484950?text=${message}`,
//         "_blank"
//     );

// }

// function orderNow(item, price){

//     let message =
//     `Hello Foodiez Caffee,%0A%0AI want to order:%0A${item} - ₹${price}`;

//     window.open(
//         `https://wa.me/918059484950?text=${message}`,
//         "_blank"
//     );

// }

// function scrollCategory(id){

//     document
//     .getElementById(id)
//     .scrollIntoView({
//         behavior:"smooth"
//     });

// }

// function scrollToMenu(){

//     document
//     .getElementById("menu")
//     .scrollIntoView({
//         behavior:"smooth"
//     });

// }

// function openWhatsApp(){

//     window.open(
//         "https://wa.me/918059484950",
//         "_blank"
//     );

// }

// function scrollToCategories(){

//     document
//     .querySelector(".category-bar")
//     .scrollIntoView({
//         behavior:"smooth"
//     });

// }

// function openWhatsApp(){

//     window.open(
//         "https://wa.me/918059484950",
//         "_blank"
//     );

// }

function scrollToCategories(){

    document
    .querySelector(".category-bar")
    .scrollIntoView({
        behavior:"smooth"
    });

}

function openWhatsApp(){

    window.open(
        "https://wa.me/918059484950",
        "_blank"
    );

}

function orderNow(item, price){

    let message =
    `Hello Foodiez Caffee,%0A%0AI want to order:%0A${item} - ₹${price}`;

    window.open(
        `https://wa.me/918059484950?text=${message}`,
        "_blank"
    );

}
