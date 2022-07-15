export {items , produContainer}

const items = [
    {
       id: 1,
       name: "Hoodies",
       price: 14.0,
       image: "./img/featured1.png",
       category: "hoodies",
       quantity: 10,
    },
    {
       id: 2,
       name: "Shirts",
       price: 24.0,
       image: "./img/featured2.png",
       category: "shirts",
       quantity: 15,
    },
    {
       id: 3,
       name: "Sweatshirts",
       price: 24.0,
       image: "./img/featured3.png",
       category: "sweatshirts",
       quantity: 20,
    },
 ];
 
 const produContainer = document.getElementById("products_container");
 
 let html = "";
 for (let i = 0; i < items.length; i++) {
    html += `<div class="card">
         <div class="img_card">
             <img class="product_img" src="${items[i].image}" alt="">
         </div>
         <div class="product_data">
             <h2 class="product_price">$${items[i].price}.00
                 <span>| Stock:${items[i].quantity}</span>
             </h2>
             <h3 class="product_name">${items[i].name}</h3>
             <div class="cards_actions" data-iduser="${items[i].id}">
             <button class="button btn_product">+</button></div>
             
         </div>
 
     </div>`;
 }
 produContainer.innerHTML = html;





