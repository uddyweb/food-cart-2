const listCart = document.querySelector('.listCart');
let products = [
    {
        id: 1,
        image:"assets/images/image-waffle-desktop.jpg",
        name: "Waffle",
        title: "Waffle With Berries",
        price: 600,
        quantity: 1,
        close: "assets/images/icon-remove-item.svg",
        plus: "assets/images/icon-increment-quantity.svg",
        remove:"assets/images/icon-decrement-quantity.svg",
        cart:"assets/images/icon-add-to-cart.svg"
    },
    {
        id: 2,
        image:"assets/images/image-creme-brulee-desktop.jpg",
        name: "Crème Brûlée",
        title: "Vanilla Bean Crème Brûlée",
        price: 650,
        quantity: 1,
        close: "assets/images/icon-remove-item.svg",
        plus: "assets/images/icon-increment-quantity.svg",
        remove:"assets/images/icon-decrement-quantity.svg",
        cart:"assets/images/icon-add-to-cart.svg"
    },
    {
        id: 3,
        image:"assets/images/image-macaron-desktop.jpg",
        name: "Macaron",
        title: "Macaron Mix of Five",
        price: 800,
        quantity: 1,
        close: "assets/images/icon-remove-item.svg",
        plus: "assets/images/icon-increment-quantity.svg",
        remove:"assets/images/icon-decrement-quantity.svg",
        cart:"assets/images/icon-add-to-cart.svg"
    },
    {
        id: 4,
        image:"assets/images/image-tiramisu-desktop.jpg",
        name: "Tiramisu",
        title: "Classic Tiramisu",
        price: 700,
        quantity: 1,
        close: "assets/images/icon-remove-item.svg",
        plus: "assets/images/icon-increment-quantity.svg",
        remove:"assets/images/icon-decrement-quantity.svg",
        cart:"assets/images/icon-add-to-cart.svg"
    },
    {
        id: 5,
        image:"assets/images/image-baklava-desktop.jpg",
        name: "Baklava",
        title: "Pistachio Baklava",
        price: 450,
        quantity: 1,
        close: "assets/images/icon-remove-item.svg",
        plus: "assets/images/icon-increment-quantity.svg",
        remove:"assets/images/icon-decrement-quantity.svg",
        cart:"assets/images/icon-add-to-cart.svg"
    },
    {
        id: 6,
        image:"assets/images/image-meringue-desktop.jpg",
        name: "Pie",
        title: "Lemon Meringue Pie",
        price: 400,
        quantity: 1,
        close: "assets/images/icon-remove-item.svg",
        plus: "assets/images/icon-increment-quantity.svg",
        remove:"assets/images/icon-decrement-quantity.svg",
        cart:"assets/images/icon-add-to-cart.svg"
    },
    {
        id: 7,
        image:"assets/images/image-cake-desktop.jpg",
        name: "Cake",
        title: "Red Velvet Cake",
        price: 500,
        quantity: 1,
        close: "assets/images/icon-remove-item.svg",
        plus: "assets/images/icon-increment-quantity.svg",
        remove:"assets/images/icon-decrement-quantity.svg",
        cart:"assets/images/icon-add-to-cart.svg"
    },
    {
        id: 8,
        image:"assets/images/image-brownie-desktop.jpg",
        name: "Brownie",
        title: "Salted Caramel Brownie",
        price: 550,
        quantity: 1,
        close: "assets/images/icon-remove-item.svg",
        plus: "assets/images/icon-increment-quantity.svg",
        remove:"assets/images/icon-decrement-quantity.svg",
        cart:"assets/images/icon-add-to-cart.svg"
    },
    {
        id: 9,
        image:"assets/images/image-panna-cotta-desktop.jpg",
        name: "Panna Cotta",
        title: "Vanilla Panna Cotta",
        price: 650,
        quantity: 1,
        close: "assets/images/icon-remove-item.svg",
        plus: "assets/images/icon-increment-quantity.svg",
        remove:"assets/images/icon-decrement-quantity.svg",
        cart:"assets/images/icon-add-to-cart.svg"
    }
];
let quantity = document.querySelector('.quantity');
function initApp(){
products.forEach((value, key)=>{
    let newDiv = document.createElement('div');
    newDiv.classList.add('list');
    newDiv.innerHTML = `
    <img src="${value.image}">
    <button class="btn" onclick="addToCart(${key})">Add To Cart</button>
      <div class="title">${value.name}</div>
      <div class="subTitle">${value.title}</div>
      <b>$${value.price.toLocaleString()}</b>
    `;
    listCart.appendChild(newDiv)
})
}
initApp();
let figureQ = document.querySelector('.figures')
function addToCart(key){
    if(productsCart[key] == null){
       productsCart[key] = products[key];
       productsCart[key].quantity = 1;
    }
    reLoad();
}

let btns = document.querySelector('.btn');
let figures = document.querySelector('.figure');
let productsCart = [];
let subSection = document.querySelector('.subSection');
let subSectionT = document.querySelector('.subSectionT');
let totalPrice = document.querySelector('.total');
let cartList = document.querySelector('.cartList');
function reLoad(){
    let count = 0;
    let total = 0;
  cartList.innerHTML = "";
   productsCart.forEach((value, key)=>{
    count = count + value.quantity;
    total = total + value.price;
    if(value != null){
      let newList = document.createElement('div');
      newList.classList.add('cartItem');
      subSection.style.display = 'none';
      subSectionT.style.display = 'block';
      newList.innerHTML = `
        <div id="title">${value.name}</div>
        <b>${value.quantity}x</b>
        <span id="fade">@$${value.price}</span>
        <span id="faded">$${value.price.toLocaleString()}</span>
        <button id="plus" onclick="changeQuantity(${key}, ${value.quantity + 1})">+<button>
        <button class="delete" onclick="removeElement(${key})"><img src="${value.close}"></button>
        <hr>
      `;
      cartList.appendChild(newList);
    }
   })
   totalPrice.innerText = `$${total.toLocaleString()}`;
   quantity.innerText = `(${count})`;
}
function changeQuantity(key, quantity){
        productsCart[key].quantity = quantity;
        productsCart[key].price = quantity * products[key].price;
    
    reLoad();
}
function removeElement(key){
    productsCart.splice(key, 1);
    reLoad();   
}
let btn = [];
let orderS = document.querySelector('.orderList');
let buttonBtn = document.querySelector('.button');
let orderP = document.querySelector('.orderConfirm')
buttonBtn.addEventListener('click', (key)=>{
    orderP.style.display = 'block';
    body.setAttribute('class', 'blur');
    if(productsCart[key] == null){
        productsCart[key] = products[key];
        productsCart[key] = 1;
     }
    orderReload();
})
let orderTotal = document.querySelector('#orderTotal');
let totalA = 0
function orderReload(){
    orderS.innerHTML = "";
 productsCart.forEach((value, key)=>{
    totalA = totalA + value.price
    if(value != null){
       let newOrder = document.createElement('div');
       newOrder.classList.add('orderItem');
       newOrder.innerHTML = `
       <div class="division">
       <div class="div">
         <img src="${value.image}">
         <div class="space">
         <div>${value.title}</div>
         <b>${value.quantity}x</b>
         <span>@$${value.price.toLocaleString()}</span>
         </div>
         </div>
         <span>$${value.price.toLocaleString()}</span>
         </div>
         <hr>
       `;
       orderS.appendChild(newOrder); 
    }
 }) 
 orderTotal.innerText = `$${totalA.toLocaleString()}`
}
let body = document.querySelector('.body');

function reStart(){
    location.reload()
}