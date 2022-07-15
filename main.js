import './modules/scroll.js';
import './modules/cards.js';
import { items } from './modules/cards.js';

// Loader

document.addEventListener('DOMContentLoaded', function () {
  const containerLoad = document.querySelector('#container_load');

  console.log(containerLoad);
});

window.addEventListener('load', function () {
  const contenLoad = document.querySelector('.content_load');

  setTimeout(() => {
    contenLoad.style.display = 'none';
  }, 3500);
});

// AggCart

const order = {};

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn_product')) {
      const userID = event.target.parentElement.dataset.iduser;

      let userCurrent = null;

      for (let i = 0; i < items.length; i++) {
        if (items[i].id === parseInt(userID)) {
          userCurrent = items[i];

          // return;
        }
      }

      if (order[userCurrent.id]) {
        if (order[userCurrent.id].amount === order[userCurrent.id].quantity) {
          alert('ya se agotaron');
          return;
        }

        order[userCurrent.id].amount++;
      } else {
        order[userCurrent.id] = userCurrent;
        order[userCurrent.id].amount = 1;
      }

      // Amount

      const amount = document.querySelector('#amountt');
      amount.textContent = Object.entries(order).length;
    }
  });

  const sidebarShop = document.querySelector('.sidebar_shop');
  const btnShop = document.querySelector('.shop');
  const close = document.querySelector('.btnclose');

  btnShop.addEventListener('click', function () {
    sidebarShop.classList.toggle('show_sidebar_shop');
  });

  // close.addEventListener('click', function (){
  //    sidebarShop.classList.remove("show_sidebar_shop")
  // })
});

//Menu mobile

// const menuMobile = document.querySelector('.menu_mobile');
// const nav_select = document.querySelector('.nav_selectt');

// menuMobile.addEventListener('click', function () {
//   nav_select.classList.toggle('nav_select');
// });
